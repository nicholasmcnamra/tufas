import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import SignUp from "./Signup"

const SignUpModal = ({ setOpenModal }) => {

    const handleClosedModal = () => {
        setOpenModal(false);
    }

    return (
        <Dialog open={true} onClose={handleClosedModal}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <SignUp setOpenModal={setOpenModal}></SignUp>
            </DialogContent>
        </Dialog>
    )
}

export default SignUpModal;