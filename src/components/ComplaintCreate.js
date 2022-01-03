import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { CreateComplaintJson } from '../Inputs/FormInputCreator';

import TextForm from '../Inputs/TextForm';
import SelectForm from '../Inputs/SelectForm';
import RadioForm from '../Inputs/RadioForm';
import CheckboxForm from '../Inputs/CheckboxForm';
import ButtonForm from '../Inputs/ButtonForm';

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

    let initialValues = {};
    let validators = {};
    CreateComplaintJson.map(element =>
    {   
        if(element.hasOwnProperty("initialValue")) 
        {
            initialValues[element.name] = element["initialValue"];
        }
        if(element.hasOwnProperty("validator")) 
        {
            validators[element.name] = element["validator"];
        }
        console.log(initialValues, validators)
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: yup.object(validators)
    })

    // const isNotCustomer = props.userType === "customer" ? false : true;

    const selectContent1 = CreateComplaintJson.map(element =>
    {
        if(element.name === "type")
        {
            return <SelectForm formik={formik} json={element} key={element.name}/>
        }
        else return null;
    })

    const subjectContent = CreateComplaintJson.map(element =>
    {
        if(element.name === "subject")
        {
            return <TextForm formik={formik} json={element} key={element.name}/>
        }
        else return null;
    })

    const selectContent2 = CreateComplaintJson.map(element =>
    {
        if(element.name === "severity")
        {
            return <SelectForm formik={formik} json={element} key={element.name}/>
        }
        else return null;
    })

    const formContent = CreateComplaintJson.map (element =>
    {
        if(element.name === "description")
        {
            return <TextForm formik={formik} json={element} key={element.name}/>
        }  
        else if(element.type === "radio")
        {
            return <RadioForm formik={formik} json={element} key={element.name}/>
        }
        else if(element.type === "checkbox")
        {
            return <CheckboxForm formik={formik} json={element} key={element.name}/>
        }
        else if(element.type === "button")
        {
            return (
                <div style={{textAlign: "center"}} key={element.title}>
                    <ButtonForm json={element}/>
                </div>
            )
        }
        else return null;
    })

    const complaintContent = (
        <React.Fragment>
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
                Create Complaint
            </Typography>

            <hr style={{width: "60%"}}/>
            <hr style={{width: "60%", marginBottom: "20px"}}/>

            <form onSubmit={formik.handleSubmit}>
                
                <FormControl fullWidth sx={{marginBottom: "20px"}}>
                    {selectContent1}
                </FormControl>

                {subjectContent}
                
                <FormControl fullWidth sx={{marginBottom: "20px"}}>
                    {selectContent2}    
                </FormControl>

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