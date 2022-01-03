import React from "react";

import TextField from '@mui/material/TextField';


const TextForm = (props) =>
{
    return (
        <React.Fragment>
            <TextField 
                fullWidth={props.json.fullWidth ? true : false}
                label={props.json.label}
                id={props.json.id}
                multiline={props.json.multiline ? true : false}
                rows={props.json.rows ? props.json.rows : 1}
                type={props.json.type ? props.json.type : "text"} 
                sx={props.json.sx ? props.json.sx : null}
                {...props.formik.getFieldProps(props.json.name)}/>
                {props.formik.touched[props.json.name] && props.formik.errors[props.json.name] ? <div style={{color:"red", marginBottom: "20px", textAlign: "left"}}>{props.formik.errors[props.json.name]}</div> : null}
                {/* {props.touched && props.error ? <div style={{color:"red", marginBottom: "20px", textAlign: "left"}}>{props.errorMessage}</div> : null} */}
        </React.Fragment>
    )
}

export default TextForm;