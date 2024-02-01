import Header from "./Header"
import Background_Desktop from '../assets/images/destination/background-destination-desktop.jpg';
import Planets from "./Planets";
import Moon from '../assets/images/destination/image-moon.webp';


function Destination(){

    return(

        <div className="bg-cover h-screen" style={{backgroundImage: `url(${Background_Desktop})`}}>
            <Header/>
            <div className="grid lg:grid-cols-2 h-full mt-20 justify-items-center">
                <div>
                    <div className="ml-24">
                        <div className="flex inline space-x-3 text-2xl font-secondary text-white tracking-widest">
                            <h2>01</h2>
                            <h2>PICK YOUR DESTINATION</h2>

                        </div>
                        <img className="w-4/5 mt-16 ml-10"  src={Moon}/>


                    </div>
                   
                </div>
                <div>
                    <div className="block text-white mt-16">
                        <div className="flex space-x-5 text-base font-secondary text-slate-200">
                            <h2>MOON</h2>
                            <h2> MARS</h2>
                            <h2>EUROPA</h2>
                            <h2>TITAN</h2>
                        </div>
                        <Planets name="MOON" description="See our planet..." distance="384,400 KM" days="3 DAYS"/>
        
                    </div>

                </div>

            </div>
            
        
        </div>
    )
}

export default Destination