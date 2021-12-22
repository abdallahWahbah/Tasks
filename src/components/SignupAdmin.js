import React from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

import { useFormik } from 'formik';
import * as yup from 'yup';

const SignupAdmin = (props) => 
{
  const initialValues=
  {
    name: "",
    email:"",
    password:"",
    phone: "",
    conditions: ""
  }
  const onSubmit =  values =>
  {
    console.log(values);
    const postCustomer = async ()=>
    {
      const response = await axios.post("http://localhost:3000/api/userLogins",
      {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        conditions: values.conditions,
        role: 'admin'
      });
      console.log(response);
      if(response.status === 200)
      {
        props.signed(true);
        props.userType(response.data.role);
      } 
    }
    postCustomer();
  }
  const validationSchema = yup.object(
  {
    name:yup.string().min(7).required("Name can't be empty"),
    email:yup.string().email("email must be valid").required("Email can't be empty"),
    password: yup.string().trim().min(5).max(60).required("Password can't be empty"),
    phone: yup.number().positive().required("Phone Number can't be empty"),
    conditions: yup.boolean().required("You have to accept the terms and conditions first")
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });


  return (
    <Box sx={{ width: '70%', margin: "20px auto"}}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Admin Registration Form
        </Typography>

        <hr style={{width: "60%"}}/>
        <hr style={{width: "60%", marginBottom: "20px"}}/>

        <form onSubmit={formik.handleSubmit}>
          <TextField 
              fullWidth 
              label="Full Name"
              id="fullWidth"
              sx={{marginBottom: "20px"}}
              {...formik.getFieldProps("name")}/>
          {formik.touched.name && formik.errors.name? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.name}</div> : null}

          <TextField 
              fullWidth 
              label="Email"
              id="fullWidth"
              sx={{marginBottom: "20px"}}
              {...formik.getFieldProps("email")}/>
          {formik.touched.email && formik.errors.email? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.email}</div> : null}

          <TextField 
              fullWidth 
              label="Password"
              type="password"
              id="fullWidth"
              sx={{marginBottom: "20px"}}
              {...formik.getFieldProps("password")}/>
          {formik.touched.password && formik.errors.password? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.password}</div> : null}

          <TextField 
              fullWidth 
              label="Phone Number"
              type="number"
              id="fullWidth"
              sx={{marginBottom: "20px"}}
              {...formik.getFieldProps("phone")}/>
          {formik.touched.phone && formik.errors.phone? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.phone}</div> : null}


          <FormGroup sx={{marginBottom:"20px"}}>
            <FormControlLabel control={<Checkbox {...formik.getFieldProps("conditions")} />} label="Agree to terms and conditions" />
            {formik.touched.conditions && formik.errors.conditions? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.conditions}</div> : null}
          </FormGroup>

          <div style={{textAlign: "center"}}>
            <Button variant="contained" 
                    type="submit" 
                    sx={{width: "70%", textAlign: "center !important"}}
                    >
                    Register
            </Button>
          </div>
        </form>
    </Box>
  );
};
export default SignupAdmin;
