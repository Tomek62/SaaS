
import FoodCards from "../components/main-food-cards";
import { Tabs } from "@/components/ui/tabs";

export default function Food() {
  const tabs = [
    {
      title: "Produits",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
        </div>
      ),
    },
    {
      title: "Menus",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
        
        </div>
      ),
    },
    {
      title: "Boissons",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
         
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>

        </div>
      ),
    },
  ];
    return (
      <div className="flex flex-col space-y-2  text-center">
        <h1 className="text-3xl font-bold text-gray-800">Notre carte</h1>
        <p>Découvrez notre carte et régalez vous !</p>
        <div>
        <Tabs tabs={tabs} containerClassName="my-4"/>
        <FoodCards />
        </div>
      </div>
    );
  }