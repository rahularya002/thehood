import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import CustomNavbar from "./CustomNavbar"

function Condition(){
    const location = useLocation();

    return location.pathname === '/' ? <Navbar /> : <CustomNavbar />
}
export default Condition