import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { CreateComplaintJson } from '../Inputs/Schema';

import InitialValuesValidators from './InitialValuesValidators';
import FormInputCreator from '../Inputs/FormInputCreator';

const ComplaintCreate = (props) =>
{
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>
    {
        const getUserData = async ()=>
        {
            const response = await axios.get(`http://localhost:3000/api/userLogins/${props.userID}`);
            setName(response.data.name);
            setEmail(response.data.email);
        }
        getUserData();
    }, [props.userID])

    const onSubmit = (values)=>
    {
        console.log(values);
        const postComplaint = async ()=>
        {
            const response = await axios.post("http://localhost:3000/api/complaints", 
            {
                type: values.type,
                subject: values.subject,
                severity: values.severity,
                description: values.description,
                language: values['radio-buttons-group'],
                conditions: values.conditions
            });
            console.log(response);
            if(response.status === 200)
            {
                setSubmitted(true);
                formik.resetForm();
            }
        }
        postComplaint();
    }

    const {initialValues} = InitialValuesValidators("initialValues", CreateComplaintJson)
    const {validators} = InitialValuesValidators("validators", CreateComplaintJson)

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: yup.object(validators)
    })

    const formContent = <FormInputCreator jsonObject={CreateComplaintJson} formik={formik}/>;
    // const isNotCustomer = props.userType === "customer" ? false : true;

    
    const complaintContent = (
        <React.Fragment>
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
                Create Complaint
            </Typography>

            <hr style={{width: "60%"}}/>
            <hr style={{width: "60%", marginBottom: "20px"}}/>

            <form onSubmit={formik.handleSubmit}>
                {formContent}
            </form>
        </React.Fragment>
    )

    return(
        <Box sx={{ width: '70%', margin: "20px auto"}}>
            <h2 style={{marginBottom:"20px"}}>Hello {name} ({email})</h2>
            
            {!submitted && complaintContent}

            {submitted && 
            <React.Fragment>
                <p style={{display:"inline-block"}}> Submitted </p> 
                <a href="/"style={{textAlign: "center"}} onClick={e=>e.preventDefault()}>
                    <Button variant="contained" 
                            sx={{width: "50%", textAlign: "center !important", display:"inline-block"}}
                            onClick = {() => setSubmitted(false)}
                            // disabled={isNotCustomer}
                            >
                            Add new Complanit
                    </Button>
                </a>
            </React.Fragment> }
        </Box>
    )
};

export default ComplaintCreate;