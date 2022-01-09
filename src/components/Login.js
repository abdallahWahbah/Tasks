import React from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { LoginJson } from '../Inputs/Schema';
import TextForm from '../Inputs/TextForm';
import ButtonForm from '../Inputs/ButtonForm';

import InitialValuesValidators from './InitialValuesValidators';
import FormInputCreator from '../Inputs/FormInputCreator';

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
                        props.userID(user.id)
                        props.userType(user.role);
                        props.signed(true);

                        localStorage.setItem("id", user.id);
                        localStorage.setItem("role", user.role);
                        localStorage.setItem("signed", true);

                        return;
                    }
                }
            }
        }
        login();
    }

    const {initialValues} = InitialValuesValidators("initialValues", LoginJson);
    const {validators} = InitialValuesValidators("validators", LoginJson);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema: yup.object(validators)
    });

    const formContent = <FormInputCreator jsonObject={LoginJson} formik={formik}/>;

    const loginContent = (
        <Card sx={{ maxWidth: 350, marginTop: "100px !important", textAlign: "center", margin: "auto", border: 1}}>
            <CardContent>
                <Typography variant="h6" sx={{fontWeight: "700", mb: "20px"}}>
                    Complaint Management Portal
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    {formContent}
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
            {loginContent}
        </React.Fragment>
    );
}

export default LoginPage;