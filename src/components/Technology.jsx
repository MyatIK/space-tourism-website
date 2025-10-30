import Header from "./Header";
import BackgroundImage from'/technology/background-technology-desktop.jpg';
import data from '../data.json';
import { useState } from "react";

function Technology(){

    const[info,setInfo]=useState('Launch vehicle');
    const[activeButton,setActiveButton]=useState(null);
    


    
    return(

        <div className="bg-cover h-screen overflow-hidden relative" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <Header/>
            <div className="ml-20 flex mt-10 space-x-3 text-2xl font-secondary text-white">
                    <h2>03</h2>
                    <h2>SPACE LAUNCH 101</h2>

            </div>
         
                {data.technology.filter(technologyName=>technologyName.name == info).map(technologyMapped=>{
                    return(

                        <div className="grid grid-cols-1 md:grid-cols-5 h-fit mt-10">
                            <div className="order-1 object-contain md:hidden flex items-center mt-5 mb-5">
                                <img className="" src={technologyMapped.images.landscape}/>
                                
                            </div>
                            <div className="col-auto md:col-span-1 mx-auto flex items-center order-2 md:order-1 mb-5 md:mb-0">
                                <div className=" grid md:gap-y-4 grid-cols-3 gap-x-4 md:grid-cols-1 flex justify-center">
                                    <div onClick={()=>{setInfo('Launch vehicle');setActiveButton(1);}} className={`h-10 w-10 rounded-full flex justify-center border-slate-400 border-2 items-center focus:text-black hover:border-white ${activeButton === 1 ? "bg-white text-black":"bg-black text-white"}`}>1</div>
                                    <div onClick={()=>{setInfo('Spaceport');setActiveButton(2);}}className={`h-10 w-10 rounded-full flex justify-center items-center border-slate-400 border-2 hover:border-white focus:text-black active:bg-white ${activeButton === 2 ? "bg-white text-black":"bg-black text-white"}`}>2</div>
                                    <div onClick={()=>{setInfo('Space capsule');setActiveButton(3);}} className={`h-10 w-10 rounded-full flex justify-center items-center border-slate-400 border-2 hover:border-white focus:text-black active:bg-white ${activeButton === 3 ? "bg-white text-black":"bg-black text-white"}`}>3</div>

                                </div>

                            </div>
                            
                            <div className="flex justify-center md:col-span-2 text-white order-3 md:order-2">
                                <div className="w-5/6 text-center md:text-left">
                                    <h2 className="text-slate-400">The Terminology</h2>
                                    <h1 className="mt-2 font-primary text-4xl">{technologyMapped.name}</h1>
                                    <p className="mt-5 text-slate-400">{technologyMapped.description}</p>
                                </div>
                                

                            </div>
                            <div className="col-span-2 w-96 absolute object-contain right-0 top-35 invisible md:visible">
                                <img className="" src={technologyMapped.images.portrait}/>
                                
                            </div>
                        

                        </div>

                    )
                })}
            
            

        
        </div>
    )
}

export default Technology