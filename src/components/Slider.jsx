
import { useState } from 'react';
import data from '../data.json';

function Slider(){
    const[current,setCurrent]=useState(0);

    
    
    return(

        <>
            <div className='flex flex-row overflow-x-scroll w-full snap-x snap-mandatory' style={{paddingBottom: '15px',clipPath: 'inset(0 0 15px 0)'}}>

            
                {data.crew.map(crewMapped=>{
                    return (
                    <div className=" mt-10 w-5/6 grid md:grid-cols-2 gap-3 w-full flex-shrink-0 items-center transition-transform ease-out duration-500" 
                            style={{transform:`translateX(-${current * 100}%)`}}>
                        <div className='w-5/6 mx-auto relative'>
                            <div>

                                <h2 className='text-slate-400 mb-3 font-primary'>{crewMapped.role.toUpperCase()}</h2>
                                <h1 className='text-slate-200 mb-4 font-primary text-4xl'>{crewMapped.name.toUpperCase()}</h1>
                                <p className='text-slate-500 text-sm'>{crewMapped.bio}</p>
                            </div>
                            <div className='absolute -bottom-10 left-0'>
                                <div className='flex gap-4 items-center justify-center'>
                                    {data.crew.map((crewMapped,i)=>{
                                        return(
                                            <div onClick={()=>{setCurrent(i)}} className={`transition-all w-2 h-2 bg-white rounded-full 
                                                            ${current == i? "p-1.5" : "bg-opacity-50"}`}>
                                        
                                            </div>

                                        )
                                    })}


                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <img className='h-96' src={`${crewMapped.images.webp}`} alt='image of crew member'/>

                        </div>
                    

                    </div>
                    
                )})}
            </div> 
            
            
        
        </>
    )
}

export default Slider