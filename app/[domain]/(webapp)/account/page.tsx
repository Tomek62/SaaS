import React from "react";
import { User, History, CreditCard, Settings, LogOut } from "lucide-react";
import { getSession } from "next-auth/react";

export default async function Account() {
  const session = await getSession();
  return (
    <>
    {session ?  (
      <div>
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mon Compte</h1>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <User className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Profil</h2>
              <p className="text-gray-600">Gérez les informations de votre profil.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <History className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Anciennes commandes</h2>
              <p className="text-gray-600 text-center">Consultez votre historique de commandes.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <CreditCard className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Moyens de paiement</h2>
              <p className="text-gray-600">Gérez vos cartes de paiement.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <Settings className="w-12 h-12 mb-4 text-blue-500" />
              <h2 className="text-2xl font-semibold mb-2">Paramètres</h2>
              <p className="text-gray-600">Modifiez vos paramètres de compte.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <LogOut className="w-12 h-12 mb-4 text-red-500" />
              <h2 className="text-2xl font-semibold mb-2">Déconnexion</h2>
              <p className="text-gray-600">Déconnectez-vous de votre compte.</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <h1>Veuillez vous connecter</h1>
    )
    }
    </>
  );
}