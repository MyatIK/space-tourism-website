import Header from "./Header"
import Background_Desktop from '../assets/images/destination/background-destination-desktop.jpg';
import Planets from "./Planets";

function Destination(){

    return(

        <div className="bg-cover h-screen" style={{backgroundImage: `url(${Background_Desktop})`}}>
            <Header/>
            <div className="grid lg:grid-cols-2 items-center h-full">
                <div>
                    <div className="grid justify-center">
                        <h2 className="text-white">PICK YOUR DESTINATION</h2>
                        <img/>

                    </div>

                </div>
                <div>
                    <div className="text-white w-80">
                        <div className="flex space-x-5 ">
                            <h2>MOON</h2>
                            <h2> MARS</h2>
                            <h2>EUROPA</h2>
                            <h2>TITAN</h2>
                        </div>
                        <Planets name="moon" description="See our planet..." distance="384,400 KM" days="3 DAYS"/>
        
                    </div>

                </div>

            </div>
            
        
        </div>
    )
}

export default Destination