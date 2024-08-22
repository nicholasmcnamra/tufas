import Search from "./SearchForClimbsPaths/Search";
import SignUpModal from "./Authentication/SignUpModal";
import { React, useState, useEffect } from "react";
import SignUp from "./Authentication/Signup";
import TufasLogo from "./Mountain";
import LoginModal from "./Authentication/LoginModal";
import AccountMenu from "./AccountMenu";


const Navbar = ({ onLogout, setOpenLogInModal, openLogInModal }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    useEffect(() => {
        const storedLoggedInStatus = sessionStorage.getItem("loggedIn");
        if (storedLoggedInStatus === "true") {
            setLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("loggedIn", loggedIn);
    }, [loggedIn]);

    const handleSignUpClick = (e) => {
        e.preventDefault();
        setOpenSignUpModal(true);
    };

    const handleLogInClick = (e) => {
        e.preventDefault();
        setOpenLogInModal(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        sessionStorage.removeItem("loggedIn");
        onLogout(); 
    };

    return (  
        <nav className="navbar" data-testid="navbar-1">
            <TufasLogo className="modiv"/>
            <a href="/" className="tufaslogo" data-testid="title-1">Tufas</a>

            {loggedIn ? ( 
            <AccountMenu onLogout={handleLogout}/>
            ) : (
                <>
                <a href="/login" className="login" data-testid="loginButton-1" onClick={handleLogInClick}>Log in</a>
                <a className="signup" data-testid="signupButton-1" onClick={handleSignUpClick}>Sign Up</a>
                </>
            )}

            {openLogInModal && <LoginModal setOpenLogInModal={setOpenLogInModal} setLoggedIn={setLoggedIn}></LoginModal>}
            {openSignUpModal && <SignUpModal setOpenSignUpModal={setOpenSignUpModal}></SignUpModal>}
        </nav>
    );
}
 
export default Navbar;