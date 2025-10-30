import Logo from '../assets/images/shared/logo.svg';
import Menu from '../assets/images/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';
import Closed from '../assets/images/shared/icon-close.svg';
import { useState } from 'react';
import { motion } from 'motion/react';




function Header(){

    const[isOpen,setIsOpen]=useState(false);

    const ToggleSide =() =>{
        isOpen === true ? setIsOpen(false): setIsOpen(true);
    }

    return(
        

        <div className="flex ml-10 sm:pt-10 relative z-5">
            <img src={Logo} alt='Logo' className='mr-5 mt-10 md:mt-5 w-8 h-8'/>
            
            <div className='border-t border-gray-500 flex w-120 mt-8 ml-30 z-1 invisible md:visible'></div>

           
            <div className="p-5 w-1/2  md:backdrop-blur-xs md:bg-white/20 hidden md:block absolute right-0 z-0">
                <ul className='flex mr-10 space-x-8 font-secondary text-base text-slate-200 ml-20'>
                    <Link to="/"><li className='hover:underline hover:underline-offset-8'>00 HOME</li></Link>
                    <Link to="/destination"><li className='hover:underline hover:underline-offset-8'>01 DESTINATION</li></Link>
                    <Link to="/crew"><li className='hover:underline hover:underline-offset-8'>02 CREW</li></Link>
                    <Link to="/technology"><li className='hover:underline hover:underline-offset-8'>03 TECHNOLOGY</li></Link>

                </ul>
                
        
            </div>
            {
                isOpen ?

                 <motion.div
                    initial={{opacity:0 }}
                    animate={{opacity:1 }}
                    transition={{duration: 0.1, ease: 'easeIn'}}
                >
                    <div className='w-3/4 h-screen backdrop-blur-lg bg-white/10 block md:hidden absolute right-0 top-0'>
                        <div className='flex justify-end mr-10 mt-10'>
                            <button>
                                <img src={Closed} alt='exit button' onClick={ToggleSide}/>
                            </button>
                        </div>
                

                        <ul className='flex flex-col space-y-10 font-secondary h-screen text-base text-slate-200 ml-5 mt-20'>
                            <Link to="/"><li className='hover:underline hover:underline-offset-8'>00 HOME</li></Link>
                            <Link to="/destination"><li className='hover:underline hover:underline-offset-8'>01 DESTINATION</li></Link>
                            <Link to="/crew"><li className='hover:underline hover:underline-offset-8'>02 CREW</li></Link>
                            <Link to="/technology"><li className='hover:underline hover:underline-offset-8'>03 TECHNOLOGY</li></Link>

                        </ul>

                
                    </div>


                </motion.div>

                :
                <button onClick={ToggleSide}>
                    <img src={Menu} alt='hamburger menu' className='block md:hidden w-8 h-8 absolute right-10 top-10'/>
        
                </button>

            }
            
            
           

            

        
        </div>
    )
}

export default Header