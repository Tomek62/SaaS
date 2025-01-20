"use client"; 

import React from "react";
import FoodCard from "../components/main-food-card";

const foodItems = [
  {
    id: "le-savoyard",
    name: "Le Savoyard",
    image:
      "https://www.google.fr/imgres?q=image%20burger&imgurl=https%3A%2F%2Fget-picto.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fburger-picto.webp&imgrefurl=https%3A%2F%2Fget-picto.com%2Fgratuit%2Fburger-picto%2F&docid=CKt64qVS988h1M&tbnid=8uf9q0RJOadzoM&vet=12ahUKEwj1pc-3w_mGAxWgcKQEHWKNAHoQM3oECB0QAA..i&w=1600&h=1600&hcb=2&ved=2ahUKEwj1pc-3w_mGAxWgcKQEHWKNAHoQM3oECB0QAA",
  },
  {
    id: "les-burritos-kebab-tacos",
    name: "LES BURRITOS, KEBAB & TACOS",
    image:
      "https://www.google.fr/imgres?q=image%20burritos&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230110%2Foriginal%2Fpngtree-delicious-burritos-with-meat-and-vegetables-png-image_8901511.png&imgrefurl=https%3A%2F%2Ffr.pngtree.com%2Ffreepng%2Fdelicious-burritos-with-meat-and-vegetables_8901511.html&docid=mmyBdmNl84KK_M&tbnid=sstXvwZvZCaGPM&vet=12ahUKEwjTuYfSw_mGAxXqRaQEHd-9DuQQM3oECHsQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjTuYfSw_mGAxXqRaQEHd-9DuQQM3oECHsQAA",
  },
  {
    id: "les-paniniis-pains-pizza",
    name: "LES PANINIIS & PAINS PIZZA",
    image:
      "https://www.google.fr/imgres?q=image%20burritos&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230110%2Foriginal%2Fpngtree-delicious-burritos-with-meat-and-vegetables-png-image_8901511.png&imgrefurl=https%3A%2F%2Ffr.pngtree.com%2Ffreepng%2Fdelicious-burritos-with-meat-and-vegetables_8901511.html&docid=mmyBdmNl84KK_M&tbnid=sstXvwZvZCaGPM&vet=12ahUKEwjTuYfSw_mGAxXqRaQEHd-9DuQQM3oECHsQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjTuYfSw_mGAxXqRaQEHd-9DuQQM3oECHsQAA",
  },
  {
    id: "les-salades",
    name: "LES SALADES",
    image:
      "https://www.google.fr/imgres?q=image%20burritos&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230110%2Foriginal%2Fpngtree-delicious-burritos-with-meat-and-vegetables-png-image_8901511.png&imgrefurl=https%3A%2F%2Ffr.pngtree.com%2Ffreepng%2Fdelicious-burritos-with-meat-and-vegetables_8901511.html&docid=mmyBdmNl84KK_M&tbnid=sstXvwZvZCaGPM&vet=12ahUKEwjTuYfSw_mGAxXqRaQEHd-9DuQQM3oECHsQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjTuYfSw_mGAxXqRaQEHd-9DuQQM3oECHsQAA",
  },
  {
    id: "les-sandwichs-americains",
    name: "LES SANDWICHS AMERICAINS",
    image: "",
  },
];

export default function FoodCards() {
  return (
    <div className="flex flex-col items-center justify-center">
      {foodItems.map((item) => (
        <FoodCard key={item.id} data={item} />
      ))}
    </div>
  );
}
