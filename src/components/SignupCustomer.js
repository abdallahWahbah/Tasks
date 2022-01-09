import React from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { CustomerJson } from '../Inputs/Schema';

import InitialValuesValidators from './InitialValuesValidators';
import FormInputCreator from '../Inputs/FormInputCreator';

const SignupCustomer = (props) => 
{  
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
        edu: values.edu,
        gender: values['radio-buttons-group'],
        address: values.address,
        conditions: values.conditions,
        role: 'customer'
      });
      console.log(response);
      if(response.status === 200)
      {
        props.userID(response.data.id);
        props.signed(true);
        props.userType(response.data.role);

        localStorage.setItem("id", response.data.id);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("signed", true);
      }
    }
    postCustomer();
  }

  const {initialValues} = InitialValuesValidators("initialValues", CustomerJson)
  const {validators} = InitialValuesValidators("validators", CustomerJson)

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema: yup.object(validators)
  });

  const formContent = <FormInputCreator jsonObject={CustomerJson} formik={formik}/>;
  
  return (
    <Box sx={{ width: '70%', margin: "20px auto"}}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Customer Registration Form
        </Typography>

        <hr style={{width: "60%"}}/>
        <hr style={{width: "60%", marginBottom: "20px"}}/>

        <form onSubmit={formik.handleSubmit}>
          {formContent}
        </form>
    </Box>
  );
};
export default SignupCustomer;
