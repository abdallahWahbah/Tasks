import React, {useState} from 'react';

import axios from 'axios';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { UpdateComplaintJson } from '../Inputs/Schema';

import InitialValuesValidators from './InitialValuesValidators';
import FormInputCreator from '../Inputs/FormInputCreator';

const ComplaintDetails = ({selectedComplaint, email}) =>
{
    const [comp, setComp] = useState(selectedComplaint);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

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

    const {initialValues} = InitialValuesValidators("initialValues", UpdateComplaintJson)
    const {validators} = InitialValuesValidators("validators", UpdateComplaintJson)

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: yup.object(validators)
    });

    // const isNotCustomer = props.userType === "admin" ? false : true;

    // const selectContent = UpdateComplaintJson.map(element =>
    // {
    //     if(element.name === "type")
    //     {
    //         return <SelectForm formik={formik} json={element} key={element.name}/>
    //     }
    //     else return null;
    // })  
    
    // const formContent = UpdateComplaintJson.map(element =>
    // {
    //     if(element.name === "description")
    //     {
    //         return <TextForm formik={formik} json={element} key={element.name}/>
    //     }
    //     else if(element.name === "button")
    //     {
    //         return (
    //             <div style={{textAlign: "center"}} key={element.name}>
    //                 <ButtonForm json={element}/>
    //             </div>
    //         )
    //     }
    //     else return null;
    // })  

    const formContent = <FormInputCreator jsonObject={UpdateComplaintJson} formik={formik}/>;

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
                {/* <FormControl fullWidth sx={{marginBottom: "20px"}}>
                    {selectContent}    
                </FormControl> */}

                {formContent}
            </form>
        </React.Fragment>
    )
}

export default ComplaintDetails;