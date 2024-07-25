import Header from "./Header"
import Background_Desktop from '../assets/images/destination/background-destination-desktop.jpg';
import Planets from "./Planets";
import Mars from "../assets/images/destination/image-mars.webp"
import data from '../data.json';
import PlanetNav from "./PlanetNav";


function MarsPlanet(){


    return(

        <div className="bg-cover h-screen" style={{backgroundImage: `url(${Background_Desktop})`}}>
            <Header/>
            <div className="grid lg:grid-cols-2 h-full mt-20 justify-items-center">
                <div>
                    <div className="ml-20">
                        <div className="flex inline space-x-3 text-2xl font-secondary text-white tracking-widest">
                            <h2>01</h2>
                            <h2>PICK YOUR DESTINATION</h2>

                        </div>
                        <img className="w-4/5 mt-16 ml-10"  src={Mars} alt='Mars Planet'/>


                    </div>
                   
                </div>
                <div>
                    <div className="block text-white mt-16 w-5/6">
                        <PlanetNav/>
                        
        
                    </div>

                </div>

            </div>
            
        
        </div>
    )
}

export default MarsPlanet