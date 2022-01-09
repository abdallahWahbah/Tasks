import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const FormInputCreator = (props) => {

    const formContent = props.jsonObject.map(element =>
    {
        if( element.name === "name" ||
            element.name === "email" || 
            element.name === "password" || 
            element.name === "phone" ||
            element.name === "address" ||
            element.name === "description" ||
            element.name === "subject")
            
        {
            return (
                <React.Fragment key={element.name}>
                    <TextField 
                        fullWidth={element.fullWidth ? true : false}
                        label={element.label}
                        id={element.id}
                        multiline={element.multiline ? true : false}
                        rows={element.rows ? element.rows : 1}
                        type={element.type ? element.type : "text"} 
                        sx={element.sx ? element.sx : null}
                        {...props.formik.getFieldProps(element.name)}/>

                        {props.formik.touched[element.name] && props.formik.errors[element.name] ? <div style={{color:"red", marginBottom: "20px", textAlign: "left"}}>{props.formik.errors[element.name]}</div> : null}
                </React.Fragment>
            )
        }
        if(element.name === "button")
        {
            return (
                <Button 
                    key={element.name}
                    type="submit" 
                    variant="contained" 
                    fullWidth={element.fullWidth ? true : false}
                    sx={element.sx}>{element.title}</Button>
            )
        }
        if(element.name === "buttonWide")
        {
            return (
                <div style={{textAlign: "center"}} key={element.name}>
                    <Button 
                        key={element.name}
                        type="submit" 
                        variant="contained" 
                        fullWidth={element.fullWidth ? true : false}
                        sx={element.sx}>{element.title}</Button>
                </div>
            )
        }
        if( element.name === "edu" || 
            element.name === "type" || 
            element.name === "severity")
        {
            return (
                <React.Fragment>
                    <FormControl fullWidth sx={{marginBottom: "20px"}}>
                        <InputLabel id={element.labelId}>{element.label}</InputLabel>
                        <Select sx={element.sx}
                            labelId={element.labelId}
                            id={element.selectId}
                            label={element.label}
                            {...props.formik.getFieldProps(element.name)}
                            >
                                {element.options.map(option =>
                                (
                                <MenuItem value={option.value}>{option.title}</MenuItem> 
                                ))}
                            </Select>
                        {props.formik.touched[element.name] && props.formik.errors[element.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[element.name]}</div> : null}
                    </FormControl>
                </React.Fragment>
            )
        }
        if(element.name === "radio-buttons-group")
        {
            return (
                <FormControl component="fieldset">
                    <FormLabel component="legend">{element.label}</FormLabel>
                    <RadioGroup
                    aria-label={element.ariaLabel}
                    defaultValue={element.defaultValue ? element.defaultValue : null}
                    {...props.formik.getFieldProps(element.name)}
                    >
                        {element.options.map(option =>
                        (
                            <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
                        ))}
                    </RadioGroup>
                    {props.formik.touched[element.name] && props.formik.errors[element.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[element.name]}</div> : null}
                
                </FormControl>
            )
        }
        if(element.name === "conditions")
        {
            return(
                <FormGroup sx={element.sx}>
                    <FormControlLabel 
                        control={<Checkbox {...props.formik.getFieldProps(element.name)} />} 
                        label={element.label} 
                        />
                            {props.formik.touched[element.name] && props.formik.errors[element.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[element.name]}</div> : null}
                </FormGroup>
            )
        }
        else return null;
    });




    return (
        <React.Fragment>
            {formContent}
        </React.Fragment>
    )
}

export default FormInputCreator;