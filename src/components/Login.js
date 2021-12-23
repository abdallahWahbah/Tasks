import React from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useFormik } from 'formik';
import * as yup from 'yup';


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

    const initialValues=
    {
        email:"",
        password:"",
    }
    const onSubmit =  values =>
    {
        // console.log(values);
        const login = async ()=>
        {
            const response = await axios.get("http://localhost:3000/api/userLogins");
            for(const user of response.data)
            {
                if(user.email === values.email)
                {
                    if(user.password === values.password)
                    {
                        props.userType(user.role);
                        props.signed(true);
                        return;
                    }
                }
            }
        }
        login();
    }
    const validationSchema = yup.object(
    {
        email:yup.string().email("email must be valid").required("Email can't be empty"),
        password: yup.string().trim().min(5).max(60).required("Password can't be empty")
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    const loginContent = (
        <Card sx={{ maxWidth: 350, marginTop: "100px !important", textAlign: "center", margin: "auto", border: 1}}>
            <CardContent>
                <Typography variant="h6" sx={{fontWeight: "700", mb: "20px"}}>
                    Complaint Management Portal
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    <TextField 
                        fullWidth 
                        label="Email"
                        id="fullWidth"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("email")}/>
                    {formik.touched.email && formik.errors.email ? <div style={{color:"red", marginBottom: "20px", textAlign: "left"}}>{formik.errors.email}</div> : null}

                    <TextField 
                        fullWidth 
                        label="Password"
                        type="password"
                        id="fullWidth"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("password")}/>
                    {formik.touched.password && formik.errors.password ? <div style={{color:"red", marginBottom: "20px", textAlign: "left"}}>{formik.errors.password}</div> : null}

                    <Button type="submit" variant="contained" fullWidth sx={{margin: "10px 0"}}>Login</Button>
                </form>

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