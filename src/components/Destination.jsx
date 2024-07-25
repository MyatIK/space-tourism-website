import Header from "./Header"
import Background_Desktop from '../assets/images/destination/background-destination-desktop.jpg';
import Planets from "./Planets";
import Moon from '../assets/images/destination/image-moon.webp';
import Mars from '../assets/images/destination/image-mars.webp';
import Europa from '../assets/images/destination/image-europa.webp';
import Titan from '../assets/images/destination/image-titan.webp';
import data from '../data.json';
import { useState } from "react";



function Destination(){
   
   
    const handleClick=(item)=>{
        setSelectedItem(item)

    }

    const planet=['Moon','Mars', 'Europa', 'Titan'];
    const planetNav=planet.map((item)=>
        <li onClick={()=>handleClick(item)} className='hover:underline hover:underline-offset-8'>{item}</li>
)
    
    const[selectedItem,setSelectedItem]=useState('Moon');

    const PlanetImage=()=>{
        if (selectedItem == "Moon"){
            return (
            <div>
                <img className="w-4/5 mt-2 ml-10"  src={Moon}/>
            </div>
            )

        }
        if (selectedItem == "Mars"){
            return (
            <div>
                <img className="w-4/5 mt-2 ml-10"  src={Mars}/>
            </div>
            )

        }
        if (selectedItem == "Europa"){
            return(
            <div>
                <img className="w-4/5 mt-2 ml-10"  src={Europa}/>
            </div>
            )

        }
        else if (selectedItem == "Titan"){
            return(
            <div>
                <img className="w-4/5 mt-2 ml-10"  src={Titan}/>
            </div>
            )

        }
    }
   
    return(
        <>
       
            <div className="bg-cover h-screen overflow-hidden" style={{backgroundImage: `url(${Background_Desktop})`}}>
                <Header/>
                <div className="ml-20 flex mt-10 space-x-3 text-2xl font-secondary text-white">
                    <h2>01</h2>
                    <h2>PICK YOUR DESTINATION</h2>
                </div>  
                
                <div className="grid lg:grid-cols-2 h-full mt-10 justify-items-center">
                    
                    <div>
                        {PlanetImage()}
                    </div>

                    {data.destinations.filter(planetInfo=>planetInfo.name == selectedItem).map((planetMapped,index)=>{
                        return(
                
                
                        <div >
                            
                            <div className="block text-white w-5/6">
                                
                                <ul className="flex space-x-5 text-base font-secondary text-slate-200">
                                    {planetNav}
                                </ul>
                            </div>

                            
                            <div>
                                <Planets name={planetMapped.name} description={planetMapped.description} distance={planetMapped.distance} days={planetMapped.travel}/>
                            </div>

                        </div>

                    )
                    })}
                    

                </div>
            
        
            </div>

        </>

        
    )
}

export default Destination