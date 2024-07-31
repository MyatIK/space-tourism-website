import Logo from '../assets/images/shared/logo.svg';
import Menu from '../assets/images/shared/icon-hamburger.svg';
import Closed from '../assets/images/shared/icon-close.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header(){

    const[isOpen,setIsOpen]=useState(false);

    const ToggleSide =() =>{
        isOpen === true ? setIsOpen(false): setIsOpen(true);
    }

    return(
        

        <div className="flex ml-10 inline justify-between pt-10 relative">
            <img src={Logo} alt='Logo' className='mr-5 w-8 h-8'/>
            
            <div className='md:48 border-t border-gray-300 mt-6 hidden sm:visible'></div>

           
            <div className="p-3  md:backdrop-blur-sm md:bg-white/30 invisible sm:visible">
                <ul className='flex inline mr-10 space-x-8 font-secondary text-base text-slate-200'>
                    <Link to="/"><li className='hover:underline hover:underline-offset-8'>00 HOME</li></Link>
                    <Link to="/destination"><li className='hover:underline hover:underline-offset-8'>01 DESTINATION</li></Link>
                    <Link to="/crew"><li className='hover:underline hover:underline-offset-8'>02 CREW</li></Link>
                    <Link to="/technology"><li className='hover:underline hover:underline-offset-8'>03 TECHNOLOGY</li></Link>

                </ul>
            
            </div>
            {isOpen ? 
            <button>
                <img src={Menu} alt='hamburger menu' className='visible md:hidden w-8 h-8 absolute right-10' onClick={ToggleSide}/>
            
            </button>:

            <div className="w-3/4 h-screen backdrop-blur-sm bg-white/10 visible md:invisible absolute right-0 top-0">
                <button className='absolute right-5 top-5'>
                    <img src={Closed} alt="exit button" onClick={ToggleSide}/>

                </button>

                <ul className='mr-10 space-y-10 font-secondary h-screen text-base text-slate-200 text-left'>
                    <Link to="/"><li className='hover:underline hover:underline-offset-8'>00 HOME</li></Link>
                    <Link to="/destination"><li className='hover:underline hover:underline-offset-8'>01 DESTINATION</li></Link>
                    <Link to="/crew"><li className='hover:underline hover:underline-offset-8'>02 CREW</li></Link>
                    <Link to="/technology"><li className='hover:underline hover:underline-offset-8'>03 TECHNOLOGY</li></Link>

                </ul>

            </div>
            
        }
            
        
            
            


        
        </div>
    )
}

export default Header