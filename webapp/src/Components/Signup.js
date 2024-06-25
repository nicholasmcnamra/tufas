import { useState } from "react";
import { Button, Grid, TextField } from '@mui/material';

const SignUp = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = () => {

    }
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="E-mail"
                        name="email"
                        value=''
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value=''
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        value=''
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit" variant="contained">Sign Up</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default SignUp;