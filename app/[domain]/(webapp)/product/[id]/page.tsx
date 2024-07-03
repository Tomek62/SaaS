import React from 'react';
import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className=" card w-full max-w-sm mx-auto">
    <Image
      src="https://www.bonappetit.com/recipe/best-fried-chicken"
      alt="Poulet frit"
      className="rounded-top"
    />
    <div className="p-4">
      <h1 className="h4 font-bold">Poulet frit</h1>
      <p className="p-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex items-center justify-between mt-4">
        <p className="font-bold p-lg">$20.00</p>
        <div className="btn btn-primary">Ajouter au panier</div>
      </div>
      <div className="mt-4">
        <p className="font-bold">Livraison</p>
        <p className="p-gray-500">25 minutes</p>
      </div>
      <div className="mt-4">
        <p className="font-bold">Prix total</p>
        <p className="p-gray-500">$20.00</p>
      </div>
    </div>
  </div>
  );
}