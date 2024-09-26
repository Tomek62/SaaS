"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { Facebook, Chrome } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function LoginButton({provider}:{provider:string}) {
  const [loading, setLoading] = useState(false);

  // Get error message added by next/auth in URL.
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop() : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  const renderIcon = () => {
    if (provider === "facebook") {
      return <Facebook width={18} />;
    } else if (provider === "google") {
      return <Chrome width={18} />;
    }
    // Add more providers here as needed
    return null;
  };


  return (
    <button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        signIn(provider); 
      }}
      className={`${
        loading
          ? "cursor-not-allowed bg-stone-50 dark:bg-stone-800"
          : "bg-white hover:bg-stone-50 active:bg-stone-100 dark:bg-black dark:hover:border-white dark:hover:bg-black"
      } group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-stone-200 transition-colors duration-75 focus:outline-none dark:border-stone-700`}
    >
      {loading ? (
        <LoadingDots color="#A8A29E" />
      ) : (
        <>
          {renderIcon()}
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Connectez-vous avec {provider}
          </p>
        </>
      )}
    </button>
  );
}
