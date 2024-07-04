import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Login from "./Login";

const LoginModal = ({ setOpenLogInModal, setLoggedIn }) => {

    const handleCloseModal = () => {
        setOpenLogInModal(false);
    }

    return (
        <Dialog open={true} onClose={handleCloseModal}>
            <DialogTitle>Log In</DialogTitle>
            <DialogContent className="login-field-container">
                <Login setOpenLogInModal={setOpenLogInModal} setLoggedIn={setLoggedIn}></Login>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal;