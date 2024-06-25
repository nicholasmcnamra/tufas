import Search from "./SearchForClimbsPaths/Search";
import Mo from "./Mountain";
import SignUpModal from "./SignUpModal";
import { React, useState } from "react";

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleSignUpClick = () => {
        setOpenModal(true);
    };

    return (  
        <nav className="navbar">
            <Mo className="modiv"/>
            <a href="/" className="tufaslogo">Tufas</a>
            <a href="/login" className="login">Log in</a>
            <a className="signup" onClick={handleSignUpClick}>Sign Up</a>
            {openModal && <SignUpModal setOpenModal={setOpenModal}></SignUpModal>}
        </nav>
    );
}
 
export default Navbar;