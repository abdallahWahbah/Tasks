import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

const SignupAdmin = () => 
{
  const initialValues=
  {
    name: "", // these attributes has to be the same as name attribute of the input
    email:"",
  }
  const onSubmit =  values => // values.name, values.email
  {
    console.log(values)
  }
  const validationSchema = yup.object(
  {
    name:yup.string().min(5).required("Can't be empty"),
    email:yup.string().email("email must be valid").required("Can't be empty")
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema
  });

  console.log("errors", formik.errors);
  // touched object gives you information on whether the input field has been visited or not
  console.log("visited", formik.touched);

  return (
    <div style={{margin:"15px 0"}}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Welcome, enter your name</label>
        <input type="text" 
                id="name" 
                name="name" 
                // onChange={formik.handleChange} 
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
                {...formik.getFieldProps("name")}
        >
        </input>
        {formik.touched.name && formik.errors.name? <div style={{color:"red"}}>{formik.errors.name}</div> : null}

        <label htmlFor='email'>Email</label>
        <input type="text" 
                id="email" 
                name="email" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.email}
        >
        </input>
        {formik.touched.email && formik.errors.email? <div style={{color:"red"}}>{formik.errors.email}</div> : null}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default SignupAdmin;
