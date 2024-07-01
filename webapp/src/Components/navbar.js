import Search from "./SearchForClimbsPaths/Search";
import SignUpModal from "./SignUpModal";
import { React, useState } from "react";
import SignUp from "./Signup";
import TufasLogo from "./Mountain";

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleSignUpClick = () => {
        setOpenModal(true);
    };

    return (  
        <nav className="navbar" data-testid="navbar-1">
            <TufasLogo className="modiv"/>
            <a href="/" className="tufaslogo" data-testid="title-1">Tufas</a>
            <a href="/login" className="login" data-testid="loginButton-1">Log in</a>
            <a className="signup" data-testid="signupButton-1" onClick={handleSignUpClick}>Sign Up</a>
            {openModal && <SignUpModal setOpenModal={setOpenModal}></SignUpModal>}
            
        </nav>
    );
}
 
export default Navbar;