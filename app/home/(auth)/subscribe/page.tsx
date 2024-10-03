"use client";
import Image from "next/image";
import { Metadata } from "next";
import LoginButton from "../login/login-button";
import { Suspense, useState } from "react";
import IphoneMockup from "@/components/iphone-mockup";
import {
  Youtube,
  Wifi,
  BatteryMedium,
  Home,
  ShoppingCart,
  UtensilsCrossed,
  User,
  Eye,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Nav from "../../sections/nav";
import Link from "next/link";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Step 1: Register the user in your database
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!res.ok) {
        const { message } = await res.json();
        toast.error(message || 'Inscription échouée');
        return;
      }
  
      // Step 2: Generate a random verification code
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
  
      // Step 3: Send verification email
      const emailRes = await fetch('/api/send-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, verificationCode }),
      });
  
      if (!emailRes.ok) {
        toast.error('Failed to send verification email.');
        return;
      }
  
      toast.success('Inscription réussie ! Veuillez vérifier vos emails pour le code de vérification.');
      setName('');
      setEmail('');
      setPassword('');
  
      // Optionally redirect to a verification page to input the code
      router.push('/verify-email');
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <Nav/>
      <div className="flex justify-between  lg:p-32 md:pt-16">
        {/* left part */}
        <div className="hidden md:block md:w-1/2">
          <h2 className="font-primary text-xl font-bold text-primary md:text-4xl">
            Inscrivez-vous et devenez notre premier testeur gratuitement !
            {/* Inscrivez-vous et obtenez votre démo gratuitement ! */}
          </h2>
          <p className="mb-16">
            Créez un compte pour votre restaurant et configurez votre service de
            Click & Collect. <br />
            Obtenez un premier aperçu de ce que pourrait être votre site !
          </p>
          <div className="flex justify-center">
            <IphoneMockup>
              <div className="relative h-full w-full bg-white text-black">
                {/* HEADER IPHONE */}
                <div className="header flex justify-between">
                  <p className="ml-8">20:32</p>
                  <div className="mr-8 flex items-center">
                    <Wifi width={20} height={20} className="stroke-black" />
                    <BatteryMedium
                      width={20}
                      height={20}
                      className="ml-2 stroke-black"
                    />
                  </div>
                </div>
                {/* BODY APPLICATION */}
                <div className="px-4 pt-5">
                  {/* HEADER APPLICATION */}
                  <div className="flex flex-row items-center">
                    <div className="w-10">
                      <Image
                        src="/Logo-chezmartinus.png"
                        width={500}
                        height={100}
                        alt="FoodPoint"
                      />
                    </div>
                    <h2 className="ml-4 font-appPrimary text-lg">
                      Chez Martinus
                    </h2>
                  </div>
                  {/* Card info */}
                  <div className="my-8 rounded-md bg-bgCardApp p-2 ">
                    <div className="flex flex-row justify-between">
                      <div>
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <h3 className="ml-2 font-appPrimary text-lg">
                            Ouvert
                          </h3>
                        </div>
                        <p className="ml-5 font-secondary text-xs">
                          Jusqu'à 23h
                        </p>
                      </div>
                      <div className="rounded-lg bg-white px-4 py-1 text-center">
                        <h3 className="font-appPrimary">Points fidélités</h3>
                        <p className="font-secondary">38</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-evenly">
                      <button className="rounded-md border-none bg-white px-6 py-1 font-semibold hover:bg-white">
                        <p className="text-xs text-black">Plus d'infos</p>
                      </button>
                      <button className="rounded-md border-none bg-gradient-to-r from-red-300 to-red-500 px-6 py-1 font-semibold">
                        <p className="text-xs text-white">Commander</p>
                      </button>
                    </div>
                  </div>
                  <h3 className="font-appPrimary">Nos Menus</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-bgCardApp">
                      <Image
                        src="/Smash-burger.png"
                        width={500}
                        height={100}
                        alt="Smash burger"
                      />
                      <p className="text-center font-secondary text-base font-black">
                        Burgers
                      </p>
                    </div>
                    <div className="rounded- bg-bgCardApp">
                      <Image
                        src="/Sandwich.png"
                        width={500}
                        height={100}
                        alt="Euratechnologies"
                      />
                      <p className="text-center font-secondary text-base font-black">
                        Sandwichs
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-appPrimary">Nos sides</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 flex w-full justify-around bg-bgCardApp py-2">
                  <Home width={20} />
                  <UtensilsCrossed width={20} />
                  <ShoppingCart width={20} />
                  <User width={20} />
                </div>
              </div>
            </IphoneMockup>
          </div>
        </div>
        {/* right part */}
        <div className="flex my-16 md:my-0 flex-col items-center min-h-screen ">
        <div className="card bg-bgSecondary px-4 py-6">
          <h2 className="text-center font-primary text-2xl font-semibold text-primary">
            Inscription
          </h2>
          <p className="mt-2 text-center font-secondary text-secondary">
            Créez votre compte dès à présent <br /> et commencez à configurer votre
            service de Click & Collect.{" "}
          </p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-primary font-semibold text-white bg-primary hover:bg-primary-dark rounded-md"
            >
              Inscription
            </button>
          </form>
          <Link href="/login">
            <p className="text-black text-xs mt-2">Déjà inscrit ? Connectez-vous</p>
          </Link>
          <div className="flex items-center justify-center opacity-50 my-4">
            <div className="flex-grow border-t border-textSecondary"></div>
            <span className="px-4 text-textSecondary font-secondary font-semibold">OR</span>
            <div className="flex-grow border-t border-textSecondary"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Suspense
              fallback={
                <div className="my-2 h-10 w-full rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
              }
            >
              <LoginButton provider="google" />
              <LoginButton provider="facebook" />
            </Suspense>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
