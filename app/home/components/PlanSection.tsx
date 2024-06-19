"use client";
import React, { useState } from "react";
import CardPlan from "./cardPlan";

interface Plan {
  planName: string;
  features: string[];
  price: string;
  style: {
    background: string;
    backgroundFeatures: string;
    textColor: string;
  };
}

const PlanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Annuel");

  const plans: { mensuel: Plan[]; annuel: Plan[] } = {
    mensuel: [
      {
        planName: "Basic",
        price: "30",
        features: [
          "1 création de site",
          "1 service au choix",
          "Customisation de son site",
          "Maintenance du service",
        ],
        style: {
          background: "bg-white",
          backgroundFeatures: "bg-light-background-subtle",
          textColor: "text-black",
        },
      },
      {
        planName: "Premium",
        price: "50",
        features: [
          "2 créations de site",
          "2 services au choix",
          "Customisation avancée",
          "Maintenance premium",
        ],
        style: {
          background: "bg-light-brand-emphasis",
          backgroundFeatures: "bg-light-background-muted",
          textColor: "text-white",
        },
      },
    ],
    annuel: [
      {
        planName: "Basic",
        price: "24",
        features: [
          "1 création de site",
          "1 service au choix",
          "Customisation de son site",
          "Maintenance du service",
        ],
        style: {
          background: "bg-white",
          backgroundFeatures: "bg-light-background-subtle",
          textColor: "text-black",
        },
      },
      {
        planName: "Premium",
        price: "40",
        features: [
          "2 créations de site",
          "2 services au choix",
          "Customisation avancée",
          "Maintenance premium",
        ],
        style: {
          background: "bg-light-brand-emphasis",
          backgroundFeatures: "bg-light-background-muted",
          textColor: "text-white",
        },
      },
    ],
  };

  return (
    <section className="text-center pb-28">
      <div className="flex flex-col px-5">
        <h1 className="text-4xl font-bold  text-black lg:text-5xl">
          Choisissez votre{" "}
          <span className="text-light-brand-emphasis">plan</span> <br />
          Obtenez votre service en un instant
        </h1>
        <p className="py-6 text-light-content-strong">
          Economisez jusqu&apos;à 20% en prenant le forfait annuel.
          <br /> Les 3 premiers mois sont satisfaits ou remboursés !
        </p>
        <div role="tablist" className="tabs-boxed tabs mx-auto md:w-1/4">
          <a
            role="tab"
            className={`tab ${activeTab === "Mensuel" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("Mensuel")}
          >
            Mensuel
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "Annuel" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("Annuel")}
          >
            Annuel
          </a>
        </div>
      </div>
      <div className="items-center justify-center md:flex gap-10 px-5">
        {activeTab === "Mensuel" &&
          plans.mensuel.map((plan, index) => (
            <CardPlan key={index} {...plan} />
          ))}
        {activeTab === "Annuel" &&
          plans.annuel.map((plan, index) => <CardPlan key={index} {...plan} />)}
      </div>
    </section>
  );
};

export default PlanSection;
