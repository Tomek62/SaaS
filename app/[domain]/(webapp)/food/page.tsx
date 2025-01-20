
import FoodCards from "../components/main-food-cards";
import { Tabs } from "@/components/ui/tabs";

export default function Food() {
  const tabs = [
    {
      title: "Burgers",
      value: "burgers",
      content: (
        <FoodCards /> 
      ),
    },
    {
      title: "Sandwichs",
      value: "services",
      content: (
        <FoodCards />
      ),
    },
    {
      title: "Salades",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
         
        </div>
      ),
    },
    {
      title: "Burritos",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
    {
      title: "Boissons",
      value: "boissons",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>

        </div>
      ),
    },
    {
      title: "Sauces",
      value: "sauces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>

        </div>
      ),
    },
  ];
    return (
      <div className="flex flex-col">
        <h1 className="text-xl  font-appPrimary">Faites votre choix !</h1>
        <div>
        <Tabs tabs={tabs} containerClassName="my-4"/>
        </div>
      </div>
    );
  }