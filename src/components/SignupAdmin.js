import React from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { AdminJson } from '../Inputs/FormInputCreator';

import TextForm from '../Inputs/TextForm';
import CheckboxForm from '../Inputs/CheckboxForm';
import ButtonForm from '../Inputs/ButtonForm';

const SignupAdmin = (props) => 
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
        conditions: values.conditions,
        role: 'admin'
      });
      console.log(response.data.id);
      if(response.status === 200)
      {
        props.userID(response.data.id);
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
    initialValues: AdminJson[AdminJson.length - 1],
    onSubmit,
    validationSchema
  });

  const formContent = AdminJson.map(element =>
  {
      if(element.type === "text")
      {
        return <TextForm formik={formik} json={element}/>
      }
      else if(element.type === "email")
      {
        return <TextForm formik={formik} json={element}/>
      }
      else if(element.type === "password")
      {
        return <TextForm formik={formik} json={element}/>
      }
      else if(element.type === "number")
      {
        return <TextForm formik={formik} json={element}/>
      }
      else if(element.type === "checkbox")
      {
        return <CheckboxForm formik={formik} json={element}/>
      }
      else if(element.type === "button")
      {
        return (
          <div style={{textAlign: "center"}}>
            <ButtonForm json={element}/>
          </div>
        )
      }
      else return null;
  })

  return (
    <Box sx={{ width: '70%', margin: "20px auto"}}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Admin Registration Form
        </Typography>

        <hr style={{width: "60%"}}/>
        <hr style={{width: "60%", marginBottom: "20px"}}/>

        <form onSubmit={formik.handleSubmit}>
          {formContent}
        </form>
    </Box>
  );
};
export default SignupAdmin;
