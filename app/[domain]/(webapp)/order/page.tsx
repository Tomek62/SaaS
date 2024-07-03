import CreateOrderButton from "../components/create-order-button";

export default function Order() {
  return (
    
    <div className="flex flex-col space-y-6 text-center">
      <h1>Vous n'avez toujours pas de commandes, <br /> qu'atendez vous ? </h1>
      <CreateOrderButton  />  
    </div>
  );
}