
import FoodCards from "../components/main-food-cards";

export default function Food() {
    return (
      <div className="flex flex-col space-y-6  text-center">
        <h1 className="text-4xl font-bold text-gray-800">Notre carte</h1>
        <p>Découvrez notre carte et régalez vous !</p>
        <div>
        <FoodCards />
        </div>
      </div>
    );
  }