interface PlanProps {
    planName: string;
    features: string[];
    price:string;
    style: {
      background: string;
      backgroundFeatures: string;
      textColor:string;
    };
  }
  
  const CardPlan: React.FC<PlanProps> = ({ planName, features, style,price }) => {
    return (
      <div className={`card w-full max-w-sm ${style.background} shadow-xl my-10`}>
        <div className="card-body items-center text-center">
          <h1 className={`text-metric font-bold ${style.textColor}`}>{planName}</h1>
          <p>
            Profitez du plan {planName.includes("Basic") ? "Basic" : "Premium"} pour développer <br /> votre business. 
          </p>
          <h1 className={`lg:text-5xl text-xl font-semibold py-5 ${style.textColor}`}>{price}<span className="text-sm">€/mois</span></h1>
          <div className={`card px-5 pt-6 pb-3 ${style.backgroundFeatures}`}>
            <ul className="text-left space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-black">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#1d4ed8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="card-actions mx-auto mt-8">
              <button className="btn btn-primary btn-sm">Sélectionner</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardPlan;
  