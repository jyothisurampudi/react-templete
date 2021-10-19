import {FiArrowLeft} from "react-icons/fi";
import { IoIosAirplane } from "react-icons/io";
function Header(){
    return(
        <div className="header-component">
              < FiArrowLeft className="backarrow"/>
            <button className="button">EDIT</button>
            <p className="from">FROM</p>
            <h1 className="dia">DIA</h1>
            <p className="denver">DENVER,CO</p>
            <IoIosAirplane className="flight"/>
            <p className="to">TO</p>
            <h1 className="ord">ORD</h1>
            <p className="chicago">CHICAGO,IL</p>
        </div>
    )
}
export default Header;