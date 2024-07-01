import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Login from "./Login";

const LoginModal = ({ setOpenLogInModal }) => {

    const handleCloseModal = () => {
        setOpenLogInModal(false);
    }

    return (
        <Dialog open={true} onClose={handleCloseModal}>
            <DialogTitle>Log In</DialogTitle>
            <DialogContent>
                <Login setOpenLogInModal={setOpenLogInModal}></Login>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal;