import { Link } from "react-router-dom"

function PlanetNav(){
    return(
        <div>
            <ul className="flex space-x-5 text-base font-secondary text-slate-200">
                <li >MOON</li>
                <li className='hover:underline hover:underline-offset-4'>MARS</li>
                <li className='hover:underline hover:underline-offset-4'>EUROPA</li>
                <li className='hover:underline hover:underline-offset-4'>TITAN</li>
            </ul>

        </div>

        
    )
}

export default PlanetNav