

function Planets(props){

    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>

            <div className='w-48 border-t border-gray-300 mt-6'></div>
                <div className="flex inline justify-between">
                    <div>
                        <h2>AVG. DISTANCE</h2>
                        <h2>{props.distance}</h2>
                    </div>
                    <div>
                        <h2>EST. TRAVEL TIME</h2>
                        <h2>{props.days}</h2>
                    </div>
            </div>

                        
        
                  


           
        </div>
    )
}

export default Planets
