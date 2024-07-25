

function PlanetInfo(){
    return(

        <div>
            {data.destinations.map((planetMapped,index)=>{
            return(
                
                
                <div>
                    <div>
                        <img className="w-4/5 mt-16 ml-10"  src={Moon}/>
                    </div>
                    <div>
                        <Planets name={planetMapped.name} description={planetMapped.description} distance={planetMapped.distance} days={planetMapped.travel}/>
            
                    </div>

                </div>

               
            
        
        

            )
        }
              
            
        
            
              )}


        </div>
    )
}

export default PlanetInfo