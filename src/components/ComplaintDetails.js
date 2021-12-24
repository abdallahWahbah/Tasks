import React, {useState} from 'react';

import axios from 'axios';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { useFormik } from 'formik';
import * as yup from 'yup';


const ComplaintDetails = ({selectedComplaint, email}) =>
{
    const [comp, setComp] = useState(selectedComplaint);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const initialValues=
    {
        type:"",
        description:""
    }

    const onSubmit = (values)=>
    {
        const updateComplaint = async ()=>
        {
            const response = await axios.patch(`http://localhost:3000/api/complaints/${selectedComplaint.id}`,
            {
                type: values.type,
                description: values.description
            });
            setComp(response.data);
        }
        updateComplaint();
    }

    const validationSchema = yup.object(
    {
        type: yup.string().required("Type is required"),
        description:  yup.string().required("Description is required")
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    // const isNotCustomer = props.userType === "admin" ? false : true;


    return(
        <React.Fragment>
            <div style={{backgroundImage:"linear-gradient(to bottom, rgba(255, 255, 255, .1), rgba(0, 0, 0, .1))", padding: "10px"}}>
                <Typography variant="h6" component="div" gutterBottom>
                    Complaint Details
                </Typography>
                
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                            <h4>
                                Subject
                            </h4>
                            <div style={{fontWeight: "bold", color: "black"}}>{comp.subject}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                            <h4>
                                Preferred Language
                            </h4>
                            <div style={{fontWeight: "bold", color: "black"}}>{comp.language}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                            <h4>
                                Complaint ID
                            </h4>
                            <div style={{fontWeight: "bold", color: "black"}}>{comp.id}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                            <h4>
                                Severity
                            </h4>
                            <div style={{fontWeight: "bold", color: "black"}}>{comp.severity}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                            <h4>
                                Complaint Type
                            </h4>
                            <div style={{fontWeight: "bold", color: "black"}}>{comp.type}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                            <h4>
                                Opened By
                            </h4>
                            <div style={{fontWeight: "bold", color: "black"}}>{email}</div>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                            <h4>
                                Details
                            </h4>
                            <div style={{fontWeight: "bold", color: "black"}}>{comp.description}</div>
                        </Item>
                    </Grid>
                </Grid>
            </div>

            <form style={{marginTop:"20px"}} onSubmit={formik.handleSubmit}>
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
                    label="Description"
                    id="fullWidth"
                    multiline
                    rows={3}
                    sx={{marginBottom: "20px"}}
                    {...formik.getFieldProps("description")}/>
                {formik.touched.description && formik.errors.description? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.description}</div> : null}

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
}

export default ComplaintDetails;