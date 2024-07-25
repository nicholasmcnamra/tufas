import { useState } from "react";
import { Button, Grid, TextField } from '@mui/material';
import Request from "../APICalls/Request";

const SignUp = ( { setOpenSignUpModal } ) => {
    const [body, setBody] = useState({
        userName: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        switch(e.target.name) {
            case "username":
                setBody({...body, userName: e.target.value});
                break;
            case "password":
                setBody({...body, password: e.target.value});
                break;
            case "email":
                setBody({...body, email: e.target.value});
                break;
            case "firstname":
                setBody({...body, firstName: e.target.value});
                break;
            case "lastname":
                setBody({...body, lastName: e.target.value});
                break;
            default:
                break;
    }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        Request(body, 'POST', "http://localhost:8080/api/users");
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
                        value={body.firstName}
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Last Name"
                        name="lastname"
                        value={body.lastName}
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="E-mail"
                        name="email"
                        value={body.email}
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={body.userName}
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={body.password}
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