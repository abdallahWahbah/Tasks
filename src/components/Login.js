import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const LoginPage = (props) => {

    const showCustomer = (e)=>
    {
        e.preventDefault();
        props.showSignupAdmin(false);
        props.showSignupCustomer(true);

        // Hide login
        props.showLoginContent(false);
    }
    const showAdmin = (e)=>
    {
        e.preventDefault();
        props.showSignupAdmin(true);
        props.showSignupCustomer(false);

        // Hide login
        props.showLoginContent(false);
    }

    const loginContent = (
        <Card sx={{ maxWidth: 350, marginTop: "100px !important", textAlign: "center", margin: "auto", border: 1}}>
            <CardContent>
                <Typography variant="h6" sx={{fontWeight: "700", mb: "20px"}}>
                    Complaint Management Portal
                </Typography>
                <TextField fullWidth label="Email" id="fullWidth" margin="dense" />
                <TextField fullWidth label="Password" id="fullWidth" margin="dense" />
                <Button type="submit" variant="contained" fullWidth sx={{margin: "10px 0"}}>Login</Button>
                <div>
                    <div style={{margin: "10px 0", display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <p>Not registered? &nbsp;</p>
                        <a href='/' onClick={showCustomer}>Create Customer Account</a>
                    </div>
                    <a href='/' sx={{display:"block"}} onClick={showAdmin}>Create Admin Account</a>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <React.Fragment>
            {/* {props.showLogin && loginContent}
            {showSignupCustomer && <p>Customer Page</p>}
            {showSignupAdmin && <p>Admin Page</p>} */}
            {loginContent}
        </React.Fragment>
    );
}

export default LoginPage;