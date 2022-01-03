import React from "react";

import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel'

const RadioForm = (props) =>
{
    return (
        <React.Fragment>
            <FormLabel component="legend">{props.json.label}</FormLabel>
            <RadioGroup
            aria-label={props.json.ariaLabel}
            defaultValue={props.json.defaultValue ? props.json.defaultValue : null}
            {...props.formik.getFieldProps(props.json.name)}
            >
                {props.json.options.map(option =>
                (
                    <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                ))}
            </RadioGroup>
            {props.formik.touched[props.json.name] && props.formik.errors[props.json.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[props.json.name]}</div> : null}
        
        </React.Fragment>
    )
}

export default RadioForm;