import Search from "./Search";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <a href="/" className="tufaslogo">Tufas</a>
            <a href="/login" className="login">Log in</a>
            <a href="/climbing_areas" className="signup">Sign Up</a>
        </nav>
    );
}
 
export default Navbar;