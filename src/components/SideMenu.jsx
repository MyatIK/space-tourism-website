import Closed from '../assets/images/shared/icon-close.svg';
import { Link } from 'react-router-dom';


function SideMenu(){

    return(
        <div className="w-4/5 h-screen sm:hidden background backdrop-blur-sm bg-white/3">
            <img src={Closed} alt='exit button' className='align flex ml-auto'/>
            <div className='text-white font-secondary grid gap-x-4 text-left pl-5'>
                <Link to="/"><h3>00 HOME</h3></Link>
                <Link to="/destination"><h3>01 DESTINATION</h3></Link>
                <Link to="/crew"><h3>02 CREW</h3></Link>
                <Link to="/technology"><h3>03 TECHNOLOGY</h3></Link>
            </div>

        
        </div>
    )
}

export default SideMenu