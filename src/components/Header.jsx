import Logo from '../assets/images/shared/logo.svg';

function Header(){
    return(

        <div className="flex ml-5 inline justify-between">
            <img src={Logo} alt='Logo' className='mr-5 w-8 h-8'/>
            
            <div className='w-48 border-t border-gray-300 mt-6'></div>

           
            <div className="p-3  backdrop-blur-sm bg-white/30">
                <div className='flex inline mr-10 space-x-8'>
                    <h3>00 HOME</h3>
                    <h3>01 DESTINATION</h3>
                    <h3>02 CREW</h3>
                    <h4>03 TECHNOLOGY</h4>

                </div>
                

            </div>
            


        
        </div>
    )
}

export default Header