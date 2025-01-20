

import prisma from "@/lib/prisma";
import Form from "@/components/form";
import { updateSite } from "@/lib/actions";
import DeleteSiteForm from "@/components/form/delete-site-form";
import CreateSiteModal from "@/components/modal/create-site";
import { HandIcon,ArrowRight } from "lucide-react";



export default async function WelcomePage() {
  return (
    <div className="flex flex-col space-y-12">
      <div className="flex items-center">
        <HandIcon className="w-6 h-6 mr-4" />
        <h1 className="font-cal text-3xl font-bold">
          Bienvenue !
        </h1>
      </div>
      <WelcomeCard />
      <CreateSiteModal />

      {/* <Form
        title="Name"
        description="The name of your site. This will be used as the meta title on Google as well."
        helpText="Please use 32 characters maximum."
        inputAttrs={{
          name: "name",
          type: "text",
          defaultValue: null,
          placeholder: "My Awesome Site",
          maxLength: 32,
        }}
        handleSubmit={updateSite}
      />

      <Form
        title="Description"
        description="The description of your site. This will be used as the meta description on Google as well."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "description",
          type: "text",
          defaultValue: null,
          placeholder: "A blog about really interesting things.",
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Vos menus et produits"
        description="Ici vous pouvez ajouter une réduction pour votre site."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "description",
          type: "text",
          defaultValue: null,
          placeholder: "A blog about really interesting things.",
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Réduction"
        description="Ici vous pouvez ajouter une réduction pour votre site."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "description",
          type: "text",
          defaultValue: null,
          placeholder: "A blog about really interesting things.",
        }}
        handleSubmit={updateSite}
      />
      <Form
        title="Vos coordonnées"
        description="Ajoutez vos coordonnées pour que vos clients puissent vous contacter."
        helpText="Include SEO-optimized keywords that you want to rank for."
        inputAttrs={{
          name: "coordinates",
          type: "text",
          defaultValue: {address:null,phoneNumber:null,email:null},
        }}
        handleSubmit={updateSite}
      /> */}
    </div>
  );
}
const WelcomeCard = () => {
  return (
    <div className="w-full bg-white py-6 px-8 flex justify-between shadow-card rounded-xl">
      <div className="flex flex-col w-3/6">
        <h2 className="font-cal text-xl font-bold pb-2">Commencez dès maintenant en créant votre site.</h2>
        <span className="text-gray-500 text-sm">En moins d'1 heure vous aurez fini, promis ! <br />
        N'hésitez pas à suivre les tutos si vous le souhaitez.</span>
        <a
              href=""
              className="hover:border-1 btn mt-8 rounded-xl border-none bg-gradient-to-r from-[#2684FF] to-[#1D4ED8] font-semibold text-white"
            >
              JE ME LANCE
              {/* Essayez maintenant */}
              <ArrowRight className="w-6 h-6 ml-2" />
            </a>
      </div>
      <iframe
              src="https://www.youtube.com/embed/"
              title="Processus de Création"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
      ></iframe>
    </div>
  );
};  
