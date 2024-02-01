import Logo from '../assets/images/shared/logo.svg';

function Header(){
    return(

        <div className="flex ml-5 inline justify-between">
            <img src={Logo} alt='Logo' className='mr-5 w-8 h-8'/>
            
            <div className='w-48 border-t border-gray-300 mt-6'></div>

           
            <div className="p-3  backdrop-blur-sm bg-white/30">
                <ul className='flex inline mr-10 space-x-8 font-secondary text-base text-slate-200'>
                    <li><a className='hover:border-b hover:pb-3.5 hover:border-slate-300' >00 HOME</a></li>
                    <li><a href='/Home'>01 DESTINATION</a></li>
                    <li>02 CREW</li>
                    <li>03 TECHNOLOGY</li>

                </ul>
                

            </div>
            


        
        </div>
    )
}

export default Header