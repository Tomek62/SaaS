import LoginButton from "./login-button";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="mx-5 border border-stone-200 py-10 dark:border-stone-700 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">
      <p className="mt-2 text-center text-sm text-stone-600 dark:text-stone-400">
        Connectez-vous dès à présent à votre plateforme FoodPoint. <br />
        Vous pourrez accéder à vos commandes <br/> et les gérer en toute simplicité.
        <br />
        Utilisez Facebook pour l&apos;instant
      </p>

      <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
        <Suspense
          fallback={
            <div className="my-2 h-10 w-full rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
          }
        >
          <LoginButton provider="google"/>
          <LoginButton provider="github"/>
        </Suspense>
      </div>
    </div>
  );
}
