

function Planets({name,description,distance,days}){

    return(
        <div className="mt-5 w-96">
            <h1 className="font-primary text-8xl text-white">{name}</h1>
            <p className="mt-5 text-slate-300 text-sm">{description}</p>

            <div className='w-48 border-t border-gray-300 mt-6'></div>
                <div className="text-white flex inline space-x-16 mt-4">
                    <div>
                        <h2 className="text-sm font-secondary">AVG. DISTANCE</h2>
                        <h2 className="text-lg font-primary">{distance}</h2>
                    </div>
                    <div>
                        <h2 className="text-sm font-secondary">EST. TRAVEL TIME</h2>
                        <h2 className="text-lg font-primary">{days}</h2>
                    </div>
            </div>

                        
        
                  


           
        </div>
    )
}

export default Planets
