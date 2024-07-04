import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import SignUp from "./Signup"

const SignUpModal = ({ setOpenSignUpModal }) => {

    const handleClosedModal = () => {
        setOpenSignUpModal(false);
    }

    return (
        <Dialog open={true} onClose={handleClosedModal}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent className="sign-up-field-container">
                <SignUp setOpenSignUpModal={setOpenSignUpModal}></SignUp>
            </DialogContent>
        </Dialog>
    )
}

export default SignUpModal;