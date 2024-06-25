import { useState } from "react";
import { Button, Grid, TextField } from '@mui/material';
import CreateUser from "./APICalls/CreateUser";

const SignUp = ( { setOpenModal } ) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const handleChange = (e) => {
        switch(e.target.name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            default:
                break;
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        CreateUser(username, password, email);
        console.log( username, password, email )
        setOpenModal(false);
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
                        value={email}
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
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