import Header from "./Header";
import Background_Desktop from '../assets/images/home/background-home-desktop.jpg';

function Home(){

    return(
        <div className="bg-cover h-screen overflow-hidden" style={{backgroundImage: `url(${Background_Desktop})`}}>

            <Header/>
            <div className="grid lg:grid-cols-2 items-center h-full">
                <div className="grid justify-center">
                    <div className="w-80 text-white">
                        <h3>SO, YOU WANT TO TRAVEL TO</h3>
                        <h1 className="text-center text-9xl font-primary">SPACE</h1>
                        <p className="text-sm">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>


                    </div>

                </div>
                
                <div className="flex  justify-center">
                    <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center m">
                        <p className="text-center">EXPLORE</p>
                    </div>

                </div>
                

            </div>
            
        </div>
    )
}

export default Home