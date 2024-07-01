import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import SignUp from "./Signup"

const SignUpModal = ({ setOpenSignUpModal }) => {

    const handleClosedModal = () => {
        setOpenSignUpModal(false);
    }

    return (
        <Dialog open={true} onClose={handleClosedModal}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <SignUp setOpenSignUpModal={setOpenSignUpModal}></SignUp>
            </DialogContent>
        </Dialog>
    )
}

export default SignUpModal;