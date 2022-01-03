import React from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { CustomerJson } from '../Inputs/FormInputCreator';
import TextForm from '../Inputs/TextForm';
import SelectForm from '../Inputs/SelectForm';
import RadioForm from '../Inputs/RadioForm';
import CheckboxForm from '../Inputs/CheckboxForm';
import ButtonForm from '../Inputs/ButtonForm';

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
  const validationSchema = yup.object(
  {
    name:yup.string().min(7).required("Name can't be empty"),
    email:yup.string().email("email must be valid").required("Email can't be empty"),
    password: yup.string().trim().min(5).max(60).required("Password can't be empty"),
    phone: yup.number().positive().required("Phone Number can't be empty"),
    edu: yup.string().required("Choose your education"),
    // 'radio-buttons-group': yup.string().required() // can't make validation for radio button component
    address:yup.string().min(7).required("Address can't be empty"),
    conditions: yup.boolean().required("You have to accept the terms and conditions first")
  })

  const formik = useFormik({
    initialValues: CustomerJson[CustomerJson.length - 1],
    onSubmit,
    validationSchema
  });

  const formContent = CustomerJson.map(element =>
  {
      if(element.type === "text" && element.label === "Full Name")
      {
        return <TextForm formik={formik} json={element} key={element.name}/>
      }
      else if(element.type === "text" && element.label === "Email")
      {
        return <TextForm formik={formik} json={element} key={element.name}/>
      }
      else if(element.type === "password")
      {
        return <TextForm formik={formik} json={element} key={element.name}/>
      }
      else if(element.type === "number")
      {
        return <TextForm formik={formik} json={element} key={element.name}/>
      }
      else return null;
  })
  
  const formControlContent = CustomerJson.map(element =>
  {
      if(element.type === "select")
      {
        return <SelectForm formik={formik} json={element} key={element.name}/>
      }
      else if(element.type === "radio")
      {
        return <RadioForm formik={formik} json={element} key={element.name}/>
      }
      else return null;
  })

  // after formControlContent 
  const formContent2 = CustomerJson.map(element =>
  {
      if(element.type === "text" && element.label === "Address")
      {
        return <TextForm formik={formik} json={element} key={element.name}/>
      }
      else if(element.type === "checkbox")
      {
        return <CheckboxForm formik={formik} json={element} key={element.name}/>
      }
      else if(element.type === "button")
      {
          return (
            <div style={{textAlign: "center"}} key={element.type}>
                <ButtonForm formik={formik} json={element} key={element.type}/>
            </div>
        )
      }
      else return null;
  })
  

  return (
    <Box sx={{ width: '70%', margin: "20px auto"}}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
            Customer Registration Form
        </Typography>

        <hr style={{width: "60%"}}/>
        <hr style={{width: "60%", marginBottom: "20px"}}/>

        <form onSubmit={formik.handleSubmit}>
          {formContent}
          
          <FormControl fullWidth sx={{marginBottom: "20px"}}>
            {formControlContent}
          </FormControl>

          {formContent2}
        </form>
    </Box>
  );
};
export default SignupCustomer;
