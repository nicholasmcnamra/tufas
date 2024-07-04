import { useState } from "react";
import { Button, Grid, TextField } from '@mui/material';
import CreateUser from "../APICalls/CreateUser";

const SignUp = ( { setOpenSignUpModal } ) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

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
            case "firstname":
                setFirstName(e.target.value);
                break;
            case "lastname":
                setLastName(e.target.value);
                break;
            default:
                break;
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        CreateUser(username, password, email, firstName, lastName);
        console.log( username, password, email )
        setOpenSignUpModal(false);
    }
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={5}>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="First Name"
                        name="firstname"
                        value={firstName}
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Last Name"
                        name="lastname"
                        value={lastName}
                        onChange={handleChange}
                        />
                    </Grid>

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