"use client";
import { useState } from "react";

export default async function FoodPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<string>("Simple");
  
  return (
    <div className="flex flex-col  mx-auto w-full max-w-sm items-center">
    </div>
  );
}
