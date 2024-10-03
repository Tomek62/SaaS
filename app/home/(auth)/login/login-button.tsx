"use client";

import LoadingDots from "@/components/icons/loading-dots";
import { capitalize } from "@/lib/utils";
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
      return <Facebook width={18} className="stroke-primary"/>;
    } else if (provider === "google") {
      return <Chrome width={18} className="stroke-primary"/>;
    }
    // Add more providers here as needed
    return null;
  };


  return (
    <button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        signIn(provider); //a modifier plus tard avec provider
      }}
      className={`${
        loading
          ? "cursor-not-allowed bg-stone-50"
          : "bg-white hover:bg-stone-50 active:bg-stone-100 border-bgCardApp "
      } group my-2 flex h-10 w-full items-center justify-center space-x-2 rounded-md border border-bgCardApp transition-colors duration-75  `}
    >
      {loading ? (
        <LoadingDots color="#A8A29E" />
      ) : (
        <>
          {renderIcon()}
          <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
            {capitalize(provider)}
          </p>
        </>
      )}
    </button>
  );
}
