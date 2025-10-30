import Header from "./Header"
import Slider from "./Slider"
import Background_Desktop from '/crew/background-crew-desktop.jpg'

function Crew(){

    return(
        <div className="bg-cover h-screen text-center md:text-left" style={{backgroundImage: `url(${Background_Desktop})`}}>
            <div>
                <Header/>

            </div>
        
            <div className="ml-20 flex mt-10 space-x-3 text-2xl font-secondary text-white">
                    <h2>02</h2>
                    <h2>MEET YOUR CREW</h2>

            </div>
            <div className="w-full md:max-w-5xl mx-auto">
                <Slider/>   

            </div>
       

        
        
        </div>
    )
}

export default Crew