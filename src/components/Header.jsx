import Logo from '../assets/images/shared/logo.svg';
import { Link } from 'react-router-dom';

function Header(){
    return(

        <div className="flex ml-10 inline justify-between pt-10">
            <img src={Logo} alt='Logo' className='mr-5 w-8 h-8'/>
            
            <div className='w-48 border-t border-gray-300 mt-6'></div>

           
            <div className="p-3  backdrop-blur-sm bg-white/30">
                <ul className='flex inline mr-10 space-x-8 font-secondary text-base text-slate-200'>
                    <Link to="/"><li className='hover:underline hover:underline-offset-8'>00 HOME</li></Link>
                    <Link to="/destination"><li className='hover:underline hover:underline-offset-8'>01 DESTINATION</li></Link>
                    <Link to="/crew"><li className='hover:underline hover:underline-offset-8'>02 CREW</li></Link>
                    <Link to="/technology"><li className='hover:underline hover:underline-offset-8'>03 TECHNOLOGY</li></Link>

                </ul>
                

            </div>
            


        
        </div>
    )
}

export default Header