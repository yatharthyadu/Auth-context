import { useContext } from "react";
import { AuthContext } from "../Context/Auth.Context";

export const Navbar=()=>{
    const {isAuth, toggleAuth, setIsLogin} = useContext(AuthContext);

    const handleLogout =()=>{
        toggleAuth();
        setIsLogin(false);
    }
    <div>
        <button onClick={isAuth ? handleLogout : undefined} >{isAuth ? "Logout" : "Login"}</button>
   </div>
}