// // import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import * as yup from "yup";

import { FormikWizard } from "formik-wizard-form";

import {AdditionalFormInputCreator1, 
        AdditionalFormInputCreator2, 
        AdditionalFormInputCreator3, 
        AdditionalFormInputCreator4} from './AdditionalFormInputCreator';
import InitialValuesValidators from "./InitialValuesValidators";
import { Page1, Page2, Page3, Page4 } from "../Inputs/Schema";
import axios from "axios";

const WizardForm = (props) => {
  
  const initialValues1 = InitialValuesValidators("initialValues", Page1).initialValues;
  const initialValues2 = InitialValuesValidators("initialValues", Page2).initialValues;
  const initialValues3 = InitialValuesValidators("initialValues", Page3).initialValues;
  const initialValues4 = InitialValuesValidators("initialValues", Page4).initialValues;
  
  const validator1 = yup.object(InitialValuesValidators("validators", Page1).validators);
  const validator2 = yup.object(InitialValuesValidators("validators", Page2).validators);
  const validator3 = yup.object(InitialValuesValidators("validators", Page3).validators);
  const validator4 = yup.object(InitialValuesValidators("validators", Page4).validators);
  
  const initialValues = {...initialValues1, 
                          ...initialValues2, 
                          ...initialValues3, 
                          ...initialValues4};
  
  const [finalValues, setFinalValues] = React.useState({});
  const [finished, setFinished] = React.useState(false);

  const onSubmit = (values) =>
  {
    setFinalValues(values);
    setFinished(true);

    const postWizardFormData = async () =>
    {
      const data = await axios.post("http://localhost:3000/api/wizard-forms",
      {
        "id-number": values["id-number"],
        "owner-name": values["owner-name"],
        "date-of-birth": values["date-of-birth"],
        "phone-number": values["phone-number"],
        "license-type": values["license-type"],
        "commercial-registeration-number": values["commercial-registeration-number"],
        "entity-name": values["entity-name"],
        "commissioner-phone-number": values["commissioner-phone-number"],
        "building-number": values["building-number"],
        "street-name": values["street-name"],
        "district-number": values["district-number"],
        "city-name": values["city-name"],
        "postal-code": values["postal-code"],
        "extra-number": values["extra-number"],
        "center-name-select-comp": values["center-name-select-comp"],
        "age-group": values["age-group"],
        "radio-buttons-group": values["radio-buttons-group"],
        
      })
      if(data.request.status === 200)
      {
        props.showTable(true);
        props.tableData(data.data);
        console.log(data.data)
      }
    }
    postWizardFormData();
  }

  return (
    <div className="App">
      <FormikWizard
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: AdditionalFormInputCreator1,
            validationSchema: validator1,
          },
          {
            component: AdditionalFormInputCreator2,
            validationSchema: validator2,
          },
          {
            component: AdditionalFormInputCreator3,
            validationSchema: validator3
          },
          {
            component: AdditionalFormInputCreator4,
            validationSchema: null
          },
        ]}
      >
        {({currentStepIndex, renderComponent, handlePrev, handleNext, isNextDisabled, isPrevDisabled}) => {
          return (
            <>
              <Box sx={{ width: "100%", my: "1rem" }}>
                <Stepper activeStep={currentStepIndex}>
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>Owner Information</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 1}>
                    <StepLabel>Center Address</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 2}>
                    <StepLabel>Center Details</StepLabel>
                  </Step>
                  <Step completed={finished}>
                    <StepLabel>Readiness Assessment</StepLabel>
                  </Step>
                </Stepper>
              </Box>
              <Box my="2rem">{renderComponent()}</Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  disabled={isPrevDisabled}
                  type="primary"
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  disabled={isNextDisabled}
                  type="primary"
                  onClick={handleNext}
                >
                  {currentStepIndex === 3 ? "Finish" : "Next"}
                </Button>
              </Box>
              {/* <Box>
                <pre>{JSON.stringify(finalValues, null, 2)}</pre>
              </Box> */}
            </>
          );
        }}
      </FormikWizard>
    </div>
  );

};

export default WizardForm;