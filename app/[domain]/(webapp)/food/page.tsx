
import FoodCards from "../components/main-food-cards";

export default function Food() {
    return (
      <div className="flex flex-col space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">Notre carte</h1>
        <div>
        <FoodCards />
          {/* <div className="w-30 h-64 bg-red-200">Coucou</div>
          <div className="w-30 h-11 ">Coucou</div>
          <div className="w-30 h-11">Coucou</div>
          <div className="w-30 h-11">Coucou</div>
          <div className="w-30 h-11">Coucou</div>
          <div className="w-30">Coucou</div>
          <div className="w-30">Coucou</div>
          <div className="w-30">Coucou</div> */}
        </div>
      </div>
    );
  }