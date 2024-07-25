import Header from "./Header";
import BackgroundImage from'/technology/background-technology-desktop.jpg';
import data from '../data.json';
import { useState } from "react";

function Technology(){

    const[info,setInfo]=useState('Launch vehicle');
  
    


    
    return(

        <div className="bg-cover h-screen absolute" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <Header/>
            <div className="ml-20 flex mt-10 space-x-3 text-2xl font-secondary text-white">
                    <h2>02</h2>
                    <h2>SPACE LAUNCH 101</h2>

            </div>
         
                {data.technology.filter(technologyName=>technologyName.name == info).map(technologyMapped=>{
                    return(

                        <div className="grid grid-cols-5 h-fit mt-10">
                            <div className="col-span-1 mx-auto flex items-center">
                                <div className=" grid gap-y-4 ">
                                    <div onClick={()=>setInfo('Launch vehicle')} className="h-10 w-10 rounded-full flex justify-center border-slate-400 border-2 items-center hover:bg-white focus:bg-white active:bg-white">1</div>
                                    <div onClick={()=>setInfo('Spaceport')}className="h-10 w-10 rounded-full flex justify-center items-center bg-white">2</div>
                                    <div onClick={()=>setInfo('Space capsule')} className="h-10 w-10 rounded-full flex justify-center items-center bg-white">3</div>

                                </div>

                            </div>
                            
                            <div className="flex justify-center col-span-2 text-white">
                                <div className="w-5/6 ">
                                    <h2 className="text-slate-400">The Terminology</h2>
                                    <h1 className="mt-2 font-primary text-4xl">{technologyMapped.name}</h1>
                                    <p className="mt-5 text-slate-400">{technologyMapped.description}</p>
                                </div>
                                

                            </div>
                            <div className="col-span-2 w-full max-w-sm absolute right-0">
                                <img className="" src={technologyMapped.images.portrait}/>
                                
                            </div>

                        </div>

                    )
                })}
            
            

        
        </div>
    )
}

export default Technology