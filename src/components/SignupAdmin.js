import React from 'react';
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { AdminJson } from '../Inputs/Schema';


import InitialValuesValidators from './InitialValuesValidators';
import FormInputCreator from '../Inputs/FormInputCreator';

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

        localStorage.setItem("id", response.data.id);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("signed", true);
      } 
    }
    postCustomer();
  }

  const {initialValues} = InitialValuesValidators("initialValues", AdminJson)
  const {validators} = InitialValuesValidators("validators", AdminJson)

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: yup.object(validators)
  });

  // const formContent = AdminJson.map(element =>
  // {
  //     if(element.name === "name")
  //     {
  //       return <TextForm formik={formik} json={element} key={element.name}/>
  //     }
  //     else if(element.name === "email")
  //     {
  //       return <TextForm formik={formik} json={element} key={element.name}/>
  //     }
  //     else if(element.name === "password")
  //     {
  //       return <TextForm formik={formik} json={element} key={element.name}/>
  //     }
  //     else if(element.name === "phone")
  //     {
  //       return <TextForm formik={formik} json={element} key={element.name}/>
  //     }
  //     else if(element.name === "conditions")
  //     {
  //       return <CheckboxForm formik={formik} json={element} key={element.name}/>
  //     }
  //     else if(element.name === "button")
  //     {
  //       return (
  //         <div style={{textAlign: "center"}} key={element.name}>
  //           <ButtonForm json={element}/>
  //         </div>
  //       )
  //     }
  //     else return null;
  // })

  const formContent = <FormInputCreator jsonObject={AdminJson} formik={formik}/>;

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
