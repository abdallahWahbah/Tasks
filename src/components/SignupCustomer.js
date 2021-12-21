import React from 'react';

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


import { useFormik } from 'formik';
import * as yup from 'yup';

const SignupCustomer = () => 
{  

  const initialValues=
  {
    name: "",
    email:"",
    password:"",
    phone: "",
    edu: "",
    'radio-buttons-group':"",
    address:""
  }
  const onSubmit =  values =>
  {
    console.log(values);
  }
  const validationSchema = yup.object(
  {
    name:yup.string().min(7).required("Name can't be empty"),
    email:yup.string().email("email must be valid").required("Email can't be empty"),
    password: yup.string().trim().min(5).max(10).required("Password can't be empty"),
    phone: yup.number().positive().required("Phone Number can't be empty"),
    // edu: yup.string().required("Choose your education"), // can't make validation for select component
    // 'radio-buttons-group': yup.string().required() // can't make validation for radio button component
    address:yup.string().min(7).required("Address can't be empty"),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });


  return (
    <Box sx={{ width: '70%', margin: "20px auto"}}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Customer Registration Form
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


          <FormControl fullWidth sx={{marginBottom: "20px"}}>
            <InputLabel id="demo-simple-select-label">Education</InputLabel>
            <Select sx={{marginBottom: "20px"}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Education"
              {...formik.getFieldProps("edu")}
            >
              <MenuItem value={"BSC"}>BSc</MenuItem>
              <MenuItem value={"Master"}>Master</MenuItem>
              <MenuItem value={"PHD"}>PHD</MenuItem>
            </Select>
            {formik.touched.password && formik.errors.password? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.password}</div> : null}

            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              {...formik.getFieldProps("radio-buttons-group")}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <TextField 
              fullWidth 
              label="Address"
              id="fullWidth"
              sx={{marginBottom: "20px"}}
              {...formik.getFieldProps("address")}/>
          {formik.touched.address && formik.errors.address? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.address}</div> : null}

          <div style={{textAlign: "center"}}>
            <Button variant="contained" 
                    type="submit" 
                    sx={{width: "90%", textAlign: "center !important"}}
                    >
                    Submit
            </Button>
          </div>

        </form>
    </Box>
  );
};
export default SignupCustomer;
