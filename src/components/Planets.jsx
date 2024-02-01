

function Planets(props){

    return(
        <div className="mt-5">
            <h1 className="font-primary text-8xl">{props.name}</h1>
            <p className="mt-5 text-slate-300">{props.description}</p>

            <div className='w-48 border-t border-gray-300 mt-6'></div>
                <div className="flex inline space-x-16 mt-4">
                    <div>
                        <h2 className="text-sm font-primary">AVG. DISTANCE</h2>
                        <h2 className="text-lg font-secondary">{props.distance}</h2>
                    </div>
                    <div>
                        <h2 className="text-sm font-primary">EST. TRAVEL TIME</h2>
                        <h2 className="text-lg font-secondary">{props.days}</h2>
                    </div>
            </div>

                        
        
                  


           
        </div>
    )
}

export default Planets
