"use client";
import Image from "next/image";
import LoginButton from "./login-button";
import { Suspense ,useState} from "react";
import Nav from "../../sections/nav";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/dashboard"); // Redirection après connexion réussie
    }
  };
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center">
        <div className="hidden md:block w-1/2">
          
<Image src="/TakeAway-pana.png" alt="FoodPoint" width={600} height={600} className=""/>
        </div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="card bg-bgSecondary px-4 py-12">
          <h2 className="text-center font-primary text-2xl font-semibold text-primary">
            Connexion
          </h2>
          <p className="mt-2 text-center font-secondary text-secondary">
            Connectez-vous dès à présent à votre plateforme FoodPoint. <br />
            Accédez à vos commandes et gérez-les en toute simplicité.{" "}
          </p>
          <form className="mt-4" onSubmit={handleSubmit}>
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
            {error && (
              <p className="text-red-500 text-sm mb-4">Email ou mot de passe faux.</p>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 font-primary font-semibold text-white bg-primary hover:bg-primary-dark rounded-md"
            >
              Connexion
            </button>
          </form>
          <Link href="/subscribe">
            <p className="text-black text-xs mt-2">Pas inscrit ? Créer un compte</p>
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
