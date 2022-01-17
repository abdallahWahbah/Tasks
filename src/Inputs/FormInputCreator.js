import React from 'react';

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
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useTranslation } from 'react-i18next';

const FormInputCreator = (props) => {

    const { t } = useTranslation();

    const formContent = props.jsonObject.map(element =>
    {
    
        // if( element.name === "name" ||
        //     element.name === "email" || 
        //     element.name === "password" || 
        //     element.name === "phone" ||
        //     element.name === "address" ||
        //     element.name === "description" ||
        //     element.name === "subject")
            
        // {
        //     return (
        //         <React.Fragment key={element.name}>
        //             <TextField 
        //                 fullWidth={element.fullWidth ? true : false}
        //                 label={element.label}
        //                 id={element.id}
        //                 multiline={element.multiline ? true : false}
        //                 rows={element.rows ? element.rows : 1}
        //                 type={element.type ? element.type : "text"} 
        //                 sx={element.sx ? element.sx : null}
        //                 {...props.formik.getFieldProps(element.name)}/>

        //                 {props.formik.touched[element.name] && props.formik.errors[element.name] ? <div style={{color:"red", marginBottom: "20px", textAlign: "left"}}>{props.formik.errors[element.name]}</div> : null}
        //         </React.Fragment>
        //     )
        // }
        // if(element.name === "button")
        // {
        //     return (
        //         <Button 
        //             key={element.name}
        //             type={element.type} 
        //             variant="contained" 
        //             fullWidth={element.fullWidth ? true : false}
        //             sx={element.sx}>{element.title}</Button>
        //     )
        // }
        // if(element.name === "buttonWide")
        // {
        //     return (
        //         <div style={{textAlign: "center"}} key={element.name}>
        //             <Button 
        //                 key={element.name}
        //                 type={element.type} 
        //                 variant="contained" 
        //                 fullWidth={element.fullWidth ? true : false}
        //                 sx={element.sx}>{element.title}</Button>
        //         </div>
        //     )
        // }
        // if( element.name === "edu" || 
        //     element.name === "type" || 
        //     element.name === "severity")
        // {
        //     return (
        //         <React.Fragment>
        //             <FormControl fullWidth sx={{marginBottom: "20px"}}>
        //                 <InputLabel id={element.labelId}>{element.label}</InputLabel>
        //                 <Select sx={element.sx}
        //                     labelId={element.labelId}
        //                     id={element.selectId}
        //                     label={element.label}
        //                     {...props.formik.getFieldProps(element.name)}
        //                     >
        //                         {element.options.map(option =>
        //                         (
        //                         <MenuItem value={option.value}>{option.title}</MenuItem> 
        //                         ))}
        //                     </Select>
        //                 {props.formik.touched[element.name] && props.formik.errors[element.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[element.name]}</div> : null}
        //             </FormControl>
        //         </React.Fragment>
        //     )
        // }
        // if(element.name === "radio-buttons-group")
        // {
        //     return (
        //         <FormControl component="fieldset">
        //             <FormLabel component="legend">{element.label}</FormLabel>
        //             <RadioGroup
        //             aria-label={element.ariaLabel}
        //             defaultValue={element.defaultValue ? element.defaultValue : null}
        //             {...props.formik.getFieldProps(element.name)}
        //             >
        //                 {element.options.map(option =>
        //                 (
        //                     <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
        //                 ))}
        //             </RadioGroup>
        //             {props.formik.touched[element.name] && props.formik.errors[element.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[element.name]}</div> : null}
                
        //         </FormControl>
        //     )
        // }
        // if(element.name === "conditions")
        // {
        //     return(
        //         <FormGroup sx={element.sx}>
        //             <FormControlLabel 
        //                 control={<Checkbox {...props.formik.getFieldProps(element.name)} />} 
        //                 label={element.label} 
        //                 />
        //                     {props.formik.touched[element.name] && props.formik.errors[element.name]? <div style={{color:"red", marginBottom: "20px"}}>{props.formik.errors[element.name]}</div> : null}
        //         </FormGroup>
        //     )
        // }
        
        if( element?.name === "id-number" ||
            element?.name === "owner-name" || 
            element?.name === "phone-number" || 
            element?.name === "commercial-registeration-number" || 
            element?.name === "entity-name" || 
            element?.name === "commissioner-phone-number" ||
            element.name === "building-number" ||
            element.name === "street-name" || 
            element?.name === "district-number" || 
            element?.name === "city-name" || 
            element?.name === "postal-code" || 
            element?.name === "extra-number" || 
            element?.name === "age-group")
        {
            return (
                <React.Fragment key={element.name}>
                    <Grid item xs={6} md={6} sm={6} lg={6}>
                        <TextField
                            fullWidth
                            name={element.name}
                            type={element.type ? element.type : "text"}
                            label={t(element.label)}
                            value={props.values && props.values[element.name]}
                            // error={props.errors && props.errors[element?.name]}
                            // helperText={props.errors && <div style={{fontSize: "14px"}}>{props.errors[element.name]}</div> }
                            onChange={props.handleChange}
                            />
                        {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                    </Grid>    

                </React.Fragment>
            )
        }
        if(element.name === "date-of-birth")
        {
            return (
                <React.Fragment key={element.name}>
                    <Grid item xs={6} md={6} sm={6} lg={6}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                        >
                            <DesktopDatePicker
                                label={t(element.label)}
                                name={element.name}
                                inputFormat="MM/dd/yyyy"
                                value={props.values[element.name]}
                                onChange={val => props.setFieldValue(element.name, val)}
                                onBlur={props.handleBlur}
                                renderInput={(params) => <TextField {...params} />}
                                // error={props.errors && props.errors[element?.name]}
                                // helperText={props.errors && <div style={{fontSize: "14px"}}>{props.errors[element.name]}</div> }
                            
                            />
                        </LocalizationProvider>
                        {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                    </Grid>

                </React.Fragment>
              );
        }
        if( element.name === "license-type" ||
            element.name === "center-name-select-comp")
        {
            return (
                <React.Fragment  key={element.name}>
                    <Grid item xs={6} md={6} sm={6} lg={6}>
                        <FormControl fullWidth sx={element.sx}>
                            <InputLabel id={element.labelId}>{t(element.label)}</InputLabel>
                            <Select 
                                labelId={element.labelId}
                                id={element.selectId}
                                name={element.name}
                                label={t(element.label)}
                                value={props.values[element.name]}
                                onChange={props.handleChange}
                                >
                                    {element.options.map(option =>
                                    (
                                        <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem> 
                                    ))}
                            </Select>
                            {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                        </FormControl>
                    </Grid>
                </React.Fragment>
            )
        }
        if(element.name === "radio-buttons-group") // Applicant Gender
        {
            return (
                <Grid item xs={12} md={12} sm={12} lg={12}  key={element.name}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">{t(element.label)}</FormLabel>
                        <RadioGroup 
                                row 
                                aria-label={t(element.ariaLabel)} 
                                name={element.name}
                                value={props.values[element.name]}
                                onChange={props.handleChange}
                            >
                                {element.options.map(option =>
                                (
                                    <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={t(option.label)} />
                                ))}
                        </RadioGroup>
                        {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                    </FormControl>
                </Grid>
            )
        }
        if(element.name === "table")
        {
            return (
                <TableContainer component={Paper} key={element.name}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Complete commercial licensing requirements</TableCell>
                                <TableCell align="right">Yes</TableCell>
                                <TableCell align="right">No</TableCell>
                                <TableCell align="right">Does not apply</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {element.rows.map((row) => (
                                <TableRow
                                    key={row.title}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>

                                    {row.options.map (option =>
                                    {
                                        return(
                                            <TableCell align="right" key={option.value}>
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    onChange={props.handleChange}
                                                    value={option.value}
                                                    name={option.name}
                                                    inputProps={option.inputProps}
                                                />
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

    });

    return (
        <React.Fragment>
            {formContent}
        </React.Fragment>
    )
}

export default FormInputCreator;