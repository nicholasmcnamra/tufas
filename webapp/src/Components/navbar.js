import Search from "./SearchForClimbsPaths/Search";
import SignUpModal from "./SignUpModal";
import { React, useState } from "react";
import SignUp from "./Signup";
import TufasLogo from "./Mountain";
import LoginModal from "./LoginModal";

const Navbar = () => {
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const [openLogInModal, setOpenLogInModal] = useState(false);

    const handleSignUpClick = (e) => {
        e.preventDefault();
        setOpenSignUpModal(true);
    };

    const handleLogInClick = (e) => {
        e.preventDefault();
        setOpenLogInModal(true);
    };

    return (  
        <nav className="navbar" data-testid="navbar-1">
            <TufasLogo className="modiv"/>
            <a href="/" className="tufaslogo" data-testid="title-1">Tufas</a>
            <a href="/login" className="login" data-testid="loginButton-1" onClick={handleLogInClick}>Log in</a>
            {openLogInModal && <LoginModal setOpenLogInModal={setOpenLogInModal}></LoginModal>}
            <a className="signup" data-testid="signupButton-1" onClick={handleSignUpClick}>Sign Up</a>
            {openSignUpModal && <SignUpModal setOpenSignUpModal={setOpenSignUpModal}></SignUpModal>}
            
        </nav>
    );
}
 
export default Navbar;