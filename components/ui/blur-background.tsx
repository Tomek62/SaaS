const BlurBackground = () => {
    return (
        <div>
            {/* Optimisation des tailles et du flou */}
            <div className="absolute -left-1/4 top-16 z-[-1] h-1/3 w-full scale-125 rounded-full bg-gradient-to-r from-primary to-white opacity-50 blur-xl will-change-transform will-change-opacity"></div>
            <div className="absolute -right-1/4 bottom-0 z-[-1] h-1/3 w-full scale-125 rounded-full bg-gradient-to-l from-primary to-white opacity-50 blur-xl will-change-transform will-change-opacity"></div>
            <div className="absolute right-1 top-2.5 z-[-1] h-1/4 w-full scale-125 rounded-full bg-gradient-to-bl from-bgHeroPink to-white opacity-30 blur-lg will-change-transform will-change-opacity"></div>
        </div>
    );
}

export default BlurBackground;
