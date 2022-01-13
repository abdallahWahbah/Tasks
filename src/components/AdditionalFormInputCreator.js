import React from 'react'
import FormInputCreator from "../Inputs/FormInputCreator";
import { Page1, Page2, Page3, Page4 } from "../Inputs/Schema";

import Grid from "@mui/material/Grid";

export const AdditionalFormInputCreator1 = (props) => {

    const formContent1 = <FormInputCreator 
                            jsonObject={Page1} 
                            errors={props.errors} 
                            values={props.values}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            setFieldValue={props.setFieldValue}/>;

    return (
        <div>
            <h1>Owner Information</h1>
            <Grid container rowSpacing={3} spacing={2}>
                {formContent1}
            </Grid>
        </div>
        )
}

export const AdditionalFormInputCreator2 = (props) => {

    const formContent2 = <FormInputCreator 
                            jsonObject={Page2} 
                            errors={props.errors} 
                            values={props.values}
                            handleChange={props.handleChange}/>;

    return (
        <div>
            <h1>Center Address</h1>
            <Grid container rowSpacing={3} spacing={2}>
                {formContent2}
            </Grid>
        </div>
    )
}

export const AdditionalFormInputCreator3 = (props) => {

    const formContent3 = <FormInputCreator 
                            jsonObject={Page3} 
                            errors={props.errors} 
                            values={props.values}
                            handleChange={props.handleChange}/>;

    return (
        <div>
            <h1>Center Details</h1>
            <Grid container rowSpacing={3} spacing={2}>
                {formContent3}
            </Grid>
        </div>
    )
}

export const AdditionalFormInputCreator4 = (props) => {

    const formContent4 = <FormInputCreator 
                            jsonObject={Page4} 
                            errors={props.errors} 
                            values={props.values}
                            handleChange={props.handleChange}/>;

    return (
        <div>
            <h1 style={{marginBottom: "40px"}}>Readiness assessment</h1>
            <Grid container rowSpacing={3} spacing={2}>
                {formContent4}
            </Grid>
        </div>
    )
}
