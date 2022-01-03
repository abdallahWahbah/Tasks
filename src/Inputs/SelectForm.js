import React from "react";

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const SelectForm = (props) =>
{
    return (
        <React.Fragment>
            <InputLabel id={props.json.labelId}>{props.json.label}</InputLabel>
            <Select sx={props.json.sx}
                labelId={props.json.labelId}
                id={props.json.selectId}
                label={props.json.label}
                {...props.formik.getFieldProps(props.json.name)}
                >
                    {props.json.options.map(option =>
                    (
                       <MenuItem value={option.value}>{option.title}</MenuItem> 
                    ))}
                </Select>
            {props.formik.touched[props.json.name] && props.formik.errors[props.json.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[props.json.name]}</div> : null}

        </React.Fragment>
    )
}

export default SelectForm;