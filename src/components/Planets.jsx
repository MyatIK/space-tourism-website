

function Planets({name,description,distance,days}){

    return(
        <div className="mt-5 w-screen md:w-96 justify-items-center md:justify-items-start text-center md:text-left">
            <h1 className="font-primary text-6xl md:text-8xl text-white">{name}</h1>
            <p className="mt-5 ml-5 mr-5 md:ml-0 md:mr-0 text-slate-300 text-xs md:text-sm">{description}</p>

            <div className='w-48 border-t border-gray-300 mt-6'></div>
            <div className="flex flex-col md:flex-row md:space-x-16 mt-4">
                <div>
                    <h2 className="mt-10 text-base text-slate-300 font-secondary">AVG. DISTANCE</h2>
                    <h2 className="text-xl text-white font-primary uppercase">{distance}</h2>
                </div>
                <div>
                    <h2 className="mt-10  text-base text-slate-300 font-secondary">EST. TRAVEL TIME</h2>
                    <h2 className="text-xl text-white font-primary uppercase">{days}</h2>
                </div>
            </div>

                        
        
                  


           
        </div>
    )
}

export default Planets
