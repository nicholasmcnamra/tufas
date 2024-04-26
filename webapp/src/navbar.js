import Search from "./Search";
import Mo from "./Mountain";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Mo className="modiv"/>
            <a href="/" className="tufaslogo">Tufas</a>
            <a href="/login" className="login">Log in</a>
            <a href="/climbing_areas" className="signup">Sign Up</a>
        </nav>
    );
}
 
export default Navbar;