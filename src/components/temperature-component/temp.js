import {WiSolarEclipse} from "react-icons/wi";
function Temperature(){
    return(
        <div className="temperature-component">
            <WiSolarEclipse className="sun"/>
            <p className="temp">37'F</p>
            <p className="msg">SUNNY IN CHICAGO</p>
        </div>
    )
}
export default Temperature;