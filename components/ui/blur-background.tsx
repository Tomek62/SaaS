const BlurBackground = () => {
    return(
        <div>
            <div className="absolute -left-1/4 top-16 z-[-1] h-1/2 w-full scale-150 rounded-full bg-gradient-to-r from-primary to-white opacity-60 blur-3xl"></div>
          <div className="absolute -right-1/4 bottom-0 z-[-1] h-1/2 w-full scale-150 rounded-full bg-gradient-to-l from-primary to-white opacity-60 blur-3xl"></div>
          <div className="absolute right-1 top-2.5 z-[-1] h-1/3 w-full scale-150 rounded-full bg-gradient-to-bl from-bgHeroPink to-white opacity-40 blur-3xl"></div>
          <div className="absolute right-1/3 top-2/3 z-[-1] h-1/3 w-1/3  scale-150 rounded-full bg-white opacity-70 blur-3xl"></div>
        </div>
    )}
export default BlurBackground;