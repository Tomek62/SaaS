"use client";

import { toast } from "sonner";
import { createSite } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import LoadingDots from "@/components/icons/loading-dots";
import { useModal } from "./provider";
import va from "@vercel/analytics";
import { useEffect, useState } from "react";
import Uploader from "../form/uploader";
import GenerativeUploader from "../form/generative-uploader";

export default function CreateSiteModal() {
  const router = useRouter();
  const modal = useModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    subdomain: "",
    type: "",
    description: "",
    address:""
  });

  const [errors, setErrors] = useState({
    name: false,
    subdomain: false,
    type: false,
    description: false,
  });
  
  const validateStep1 = () => {
    const newErrors = {
      name: !data.name.trim(),
      subdomain: !data.subdomain.trim(),
      type: !data.type,
      description: !data.description.trim(),
    };
  
    setErrors(newErrors);
  
    // Retourne vrai si aucune erreur n'existe
    return !Object.values(newErrors).some((error) => error);
  };

  const handleNext = () => {
    if (currentStep === 1) {
      // Validation de l'étape 1
      if (!validateStep1()) {
        toast.error("Veuillez remplir tous les champs obligatoires avant de continuer.");
        return;
      }
    }
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  useEffect(() => {
    setData((prev) => ({
      ...prev,
      subdomain: prev.name
        .toLowerCase()
        .trim()
        .replace(/[\W_]+/g, "-"),
    }));
  }, [data.name]);

  return (
    <form
      action={async (formData: FormData) => {
        formData.append("name", data.name);
        formData.append("subdomain", data.subdomain);
        formData.append("description", data.description);
        createSite(formData).then((res: any) => { //bien rajouter restaurantId
          if (res.error) {
            toast.error(res.error);
          } else {
            va.track("Created Site");
            const { id } = res;
            router.refresh();
            router.push(`/site/${id}`);
            modal?.hide();
            toast.success(`Votre site a été créé avec succès !`);
          }
        })
      }}
      className="w-full bg-white  justify-between shadow-card rounded-xl"
    >
      <div className="relative flex flex-col space-y-4 p-5 md:p-10">
        <div className="bg-gradient-to-r from-[#2684FF] to-[#1D4ED8] w-fit rounded-xl py-1 px-6">
        <h2 className="font-cal text-white text-xl font-bold">Création</h2>
        </div>
        <ul className="steps text-stone-400 font-light steps-vertical lg:steps-horizontal py-10">
          <li className={cn("step", currentStep >= 1 && "step-primary text-primary font-bold")}>
            Informations générales
          </li>
          <li className={cn("step", currentStep >= 2 && "step-primary text-primary font-bold")}>
            Génération des données
          </li>
          <li className={cn("step", currentStep >= 3 && "step-primary text-primary font-bold")}>
            Aspect visuel
          </li>
        </ul>
        <div className="space-y-4">
        {currentStep === 1 && (
          <>
          <div className="flex flex-col space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-black"
          >
            Nom du restaurant
          </label>
          <input
            name="name"
            type="text"
            placeholder="Mon nouveau site"
            autoFocus
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            maxLength={32}
            required
            className={cn(
              "w-full max-w-md rounded-md border px-4 py-2 text-sm",
              errors.name ? "border-red-500 bg-red-50" : "border-stone-200 bg-stone-50"
            )}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="subdomain"
            className="text-sm font-medium text-black"
          >
            Sous-domaine
          </label>
          <div className="flex w-full max-w-md">
            <input
              name="subdomain"
              type="text"
              placeholder="subdomain"
              value={data.subdomain}
              onChange={(e) => setData({ ...data, subdomain: e.target.value })}
              autoCapitalize="off"
              pattern="[a-zA-Z0-9\-]+" // only allow lowercase letters, numbers, and dashes
              maxLength={32}
              required
              className="w-full max-w-md rounded-l-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-600 placeholder:text-stone-400 focus:border-black focus:outline-none focus:ring-black"
            />
            <div className="flex items-center rounded-r-lg border border-l-0 border-stone-200 bg-stone-100 px-3 text-sm ">
              .{process.env.NEXT_PUBLIC_ROOT_DOMAIN}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-black"
          >
            Type de restaurant
          </label>
          <select
            name="type"
            required
            value={data.type}
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className={cn("w-full max-w-md rounded-md border  px-4 py-2 text-sm text-stone-600 placeholder:text-stone-400 focus:border-black focus:outline-none focus:ring-black",errors.type?"border-red-500 bg-red-50" : "border-stone-200 bg-stone-50")}
          >
            <option value="">Choisir un type</option>
            <option value="restaurant">Restaurant</option>
            <option value="cafe">Café</option>
            <option value="bakery">Boulangerie</option>
            <option value="bar">Bar</option>
            <option value="food-truck">Food Truck</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-black"
          >
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description about why my site is so awesome"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            maxLength={140}
            rows={3}
            className={cn(
              "w-full max-w-md rounded-md border px-4 py-2 text-sm",
              errors.name ? "border-red-500 bg-red-50" : "border-stone-200 bg-stone-50"
            )}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="address"
            className="text-sm font-medium text-black"
          >
            Adresse
          </label>

          
        </div>
        <RestaurantSchedule />
        </>
        )}
        {currentStep === 2 && (
          <>
          <div className="flex flex-col space-y-2">
          <label
            htmlFor="description"
            className="text-md font-medium text-black"
          >
            Carte du restaurant
          </label>
          <p>Séléctionnez le mode de fonctionnement de votre carte.</p>
          <select
            name="type"
            required
            value={data.type}
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className={cn("w-full max-w-md rounded-md border  px-4 py-2 text-sm text-stone-600 placeholder:text-stone-400 focus:border-black focus:outline-none focus:ring-black",errors.type?"border-red-500 bg-red-50" : "border-stone-200 bg-stone-50")}
          >
            <option value="">Choisir un type</option>
            <option value="restaurant">1 carte par catégorie</option>
            <option value="cafe">1 carte pour tout le restaurant</option>
            <option value="bakery">Boulangerie</option>
            <option value="bar">Bar</option>
            <option value="food-truck">Food Truck</option>
          </select>
        </div>
        <p>Insérez la carte du restaurant pour générer automatiquement le contenu du site.
        Formats acceptés: .png, .jpg, .jpeg</p>
          {/* <Uploader name="image" defaultValue={null} /> */}
          <GenerativeUploader name="image" defaultValue={null} />
         </>
        )}
        
        </div>
       </div> 
      <div className="flex items-center justify-end rounded-b-lg border-t border-stone-200 bg-stone-50 p-3  md:px-10">
      {currentStep > 1 && (
          <div
            onClick={handlePrev}
            className="cursor-pointer text-sm bg-stone-200 rounded-md px-4 py-2"
          >
            Précédent
          </div>
        )}
        {currentStep < 3 ? (
          <div
            onClick={handleNext}
            className="cursor-pointer text-sm bg-gradient-to-r from-[#2684FF] to-[#1D4ED8] text-white rounded-md px-4 py-2"
          >
            Suivant
          </div>
        ) : (
          <CreateSiteFormButton />
        )}
      </div>
    </form>
  );
}
function CreateSiteFormButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className={cn(
        "flex h-10 w-1/2 items-center justify-center space-x-2 rounded-md border text-sm transition-all focus:outline-none",
        pending
          ? "cursor-not-allowed border-stone-200 bg-stone-100 text-stone-400 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
          : "bg-gradient-to-r from-[#2684FF] to-[#1D4ED8] text-white hover:bg-white hover:text-black dark:border-stone-700 dark:hover:border-stone-200 dark:hover:bg-black dark:hover:text-white dark:active:bg-stone-800",
      )}
      disabled={pending}
    >
      {pending ? <LoadingDots color="#808080" /> : <p>Créer votre site</p>}
    </button>
  );
}


interface Schedule {
  day: string;
  startTime: string;
  endTime: string;
}

function RestaurantSchedule(){
  const [schedules, setSchedules] = useState<Schedule[]>([
    { day: "", startTime: "", endTime: "" }, // Ligne initiale
  ]);

  const handleScheduleChange = (index: number, field: keyof Schedule, value: string) => {
    const updatedSchedules = [...schedules];
    updatedSchedules[index][field] = value;
    setSchedules(updatedSchedules);
  };

  const addScheduleRow = () => {
    setSchedules([...schedules, { day: "", startTime: "", endTime: "" }]);
  };

  const removeScheduleRow = (index: number) => {
    setSchedules(schedules.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col space-y-4">
      <label className="text-sm font-medium text-black">Horaires</label>
      {schedules.map((schedule, index) => (
        <div key={index} className="flex items-center space-x-2">
          {/* Sélecteur de jour */}
          <select
            value={schedule.day}
            onChange={(e) => handleScheduleChange(index, "day", e.target.value)}
            className="w-24 rounded-md border border-stone-200 bg-stone-50 px-2 py-1 text-sm text-stone-600 focus:border-black focus:outline-none focus:ring-black"

          >  
            <option value="Monday">Lundi</option>
            <option value="Tuesday">Mardi</option>
            <option value="Wednesday">Mercredi</option>
            <option value="Thursday">Jeudi</option>
            <option value="Friday">Vendredi</option>
            <option value="Saturday">Samedi</option>
            <option value="Sunday">Dimanche</option>
          </select>

          {/* Heure de début */}
          <input
            type="time"
            value={schedule.startTime}
            onChange={(e) => handleScheduleChange(index, "startTime", e.target.value)}
            className="w-24 rounded-md border border-stone-200 bg-stone-50 px-2 py-1 text-sm text-stone-600 focus:border-black focus:outline-none focus:ring-black"
          />

          {/* Heure de fin */}
          <input
            type="time"
            value={schedule.endTime}
            onChange={(e) => handleScheduleChange(index, "endTime", e.target.value)}
            className="w-24 rounded-md border border-stone-200 bg-stone-50 px-2 py-1 text-sm text-stone-600 focus:border-black focus:outline-none focus:ring-black"
          />

          {/* Bouton pour supprimer une ligne */}
          <button
            type="button"
            onClick={() => removeScheduleRow(index)}
            className="rounded-md bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600 focus:outline-none"
          >
            ✕
          </button>
        </div>
      ))}

      {/* Bouton pour ajouter une ligne */}
      <button
        type="button"
        onClick={addScheduleRow}
        className="mt-2 w-fit rounded-md bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-600 focus:outline-none"
      >
        + Ajouter un jour
      </button>
    </div>
  );
};

