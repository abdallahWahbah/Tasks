import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

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
    }, [])

    const initialValues=
    {
        type:"",
        subject:"",
        severity:"",
        description:"",
        'radio-buttons-group':"", // for language
        conditions:""
    }
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
    const validationSchema = yup.object(
    {
        type: yup.string().required("Type is required"),
        subject:  yup.string().required("Subject is required"),
        severity: yup.string().required("Severity is required"),
        description:  yup.string().required("Description is required"),
        'radio-buttons-group': yup.string().required("Language is required"),
        conditions:  yup.boolean().required("You have to accept the terms and conditions first"),
    });
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // const isNotCustomer = props.userType === "customer" ? false : true;
    // console.log("create", isNotCustomer, props.userType);

    const complaintContent = (
        <React.Fragment>
            <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
                Create Complaint
            </Typography>

            <hr style={{width: "60%"}}/>
            <hr style={{width: "60%", marginBottom: "20px"}}/>

            <form onSubmit={formik.handleSubmit}>
                
                <FormControl fullWidth sx={{marginBottom: "20px"}}>
                    <InputLabel id="demo-simple-select-label">Complaint Type</InputLabel>
                    <Select sx={{marginBottom: "20px"}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Complaint Type"
                    {...formik.getFieldProps("type")}
                    >
                        <MenuItem value={"type1"}>Type 1</MenuItem>
                        <MenuItem value={"type2"}>Type 2</MenuItem>
                        <MenuItem value={"type3"}>Type 3</MenuItem>
                    </Select>
                    {formik.touched.type && formik.errors.type? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.type}</div> : null}  
                </FormControl>

                <TextField 
                    fullWidth 
                    label="Subject"
                    id="fullWidth"
                    sx={{marginBottom: "20px"}}
                    {...formik.getFieldProps("subject")}/>
                {formik.touched.subject && formik.errors.subject? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.subject}</div> : null}

                <FormControl fullWidth sx={{marginBottom: "20px"}}>
                    <InputLabel id="demo-simple-select-label">Severity</InputLabel>
                    <Select sx={{marginBottom: "20px"}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Severity"
                    {...formik.getFieldProps("severity")}
                    >
                        <MenuItem value={"severity1"}>Severity 1</MenuItem>
                        <MenuItem value={"severity2"}>Severity 2</MenuItem>
                        <MenuItem value={"severity3"}>Severity 3</MenuItem>
                    </Select>
                    {formik.touched.severity && formik.errors.severity? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.severity}</div> : null}
                </FormControl>

                <TextField 
                    fullWidth 
                    label="Description"
                    id="fullWidth"
                    multiline
                    rows={3}
                    sx={{marginBottom: "20px"}}
                    {...formik.getFieldProps("description")}/>
                {formik.touched.description && formik.errors.description? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.description}</div> : null}

                <FormLabel component="legend">Prefered Contact Language</FormLabel>
                <RadioGroup
                    aria-label="Prefered Contact Language"
                    {...formik.getFieldProps("radio-buttons-group")}
                >
                    <FormControlLabel value="arabic" control={<Radio />} label="Arabic" />
                    <FormControlLabel value="english" control={<Radio />} label="English" />
                </RadioGroup>
                {formik.touched['radio-buttons-group'] && formik.errors['radio-buttons-group']? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors['radio-buttons-group']}</div> : null}

                <FormGroup sx={{marginBottom:"20px"}}>
                    <FormControlLabel control={<Checkbox {...formik.getFieldProps("conditions")} />} label="Agree to terms and conditions" />
                    {formik.touched.conditions && formik.errors.conditions? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.conditions}</div> : null}
                </FormGroup>

                <div style={{textAlign: "center"}}>
                    <Button variant="contained" 
                            type="submit" 
                            sx={{width: "70%", textAlign: "center !important"}}
                            // disabled={isNotCustomer}
                            >
                            Register
                    </Button>
                </div>
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