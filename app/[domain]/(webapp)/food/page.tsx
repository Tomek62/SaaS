import FoodCard from "../components/food-card";

export default function Food() {
    return (
      <div className="flex flex-col space-y-6">
        <h1>Food</h1>
        <FoodCard />
      </div>
    );
  }