import React from 'react'


import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const CheckboxForm = (props) => {
    return (
        <React.Fragment>
            <FormGroup sx={props.json.sx}>
                <FormControlLabel 
                    control={<Checkbox {...props.formik.getFieldProps(props.json.name)} />} 
                    label={props.json.label} 
                    />
                        {props.formik.touched[props.json.name] && props.formik.errors[props.json.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[props.json.name]}</div> : null}
            </FormGroup>
        </React.Fragment>
    )
}

export default CheckboxForm;
