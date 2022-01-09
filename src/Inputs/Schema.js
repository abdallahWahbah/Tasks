import * as yup from 'yup';

export const LoginJson = 
[
    {
        type: "email",
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "email",
        initialValue: "",
        validator: yup.string().email("email must be valid").required("Email can't be empty")
    },
    {
        type: "password",
        fullWidth: "fullWidth",
        label: "Password",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "password",
        initialValue: "",
        validator: yup.string().trim().min(5).max(60).required("Password can't be empty")
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {margin: "10px 0"},
        title: "Login",
        name: "button"
    }
]

export const CustomerJson = 
[
    {
        type: "text", // name
        fullWidth: "fullWidth",
        label: "Full Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "name",
        initialValue: "",
        validator: yup.string().min(7).required("Name can't be empty")
    },
    {
        type: "text", // email
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "email",
        initialValue: "",
        validator: yup.string().email("email must be valid").required("Email can't be empty")
    },
    {
        type: "password",
        fullWidth: "fullWidth",
        label: "Password",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "password",
        initialValue: "",
        validator: yup.string().trim().min(5).max(60).required("Password can't be empty")
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "phone",
        initialValue: "",
        validator: yup.number().positive().required("Phone Number can't be empty")
    },
    {
        type: "select", // education
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "Education",
        name: "edu",
        initialValue: "",
        validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "BSC",
                title: "BSC"
            },
            {
                value: "Master",
                title: "Master"
            },
            {
                value: "PHD",
                title: "PHD"
            },
        ]
    },
    {
        type: "radio", // gender
        label: "Gander",
        ariaLabel: "gender",
        defaultValue: "female",
        name: "radio-buttons-group",
        options:
        [
            {
                value: "female",
                label: "Female"
            },
            {
                value: "male",
                label: "Male"
            }
        ]
    },
    {
        type: "text", // address
        fullWidth: "fullWidth",
        label: "Address",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "address",
        initialValue: "",
        validator: yup.string().min(7).required("Address can't be empty")
    },
    {
        type: "checkbox",
        sx: {marginBottom:"20px"},
        name: "conditions",
        initialValue: "",
        validator: yup.boolean().required("You have to accept the terms and conditions first"),
        label: "Agree to terms and conditions"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Register",
        name: "buttonWide"
    }
]

export const AdminJson = 
[
    {
        type: "text", // name
        fullWidth: "fullWidth",
        label: "Full Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "name",
        initialValue: "",
        validator: yup.string().min(7).required("Name can't be empty")
    },
    {
        type: "email",
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "email",
        initialValue: "",
        validator: yup.string().email("email must be valid").required("Email can't be empty")
    },
    {
        type: "password",
        fullWidth: "fullWidth",
        label: "Password",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "password",
        initialValue: "",
        validator: yup.string().trim().min(5).max(60).required("Password can't be empty")
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "phone",
        initialValue: "",
        validator: yup.number().positive().required("Phone Number can't be empty")
    },
    {
        type: "checkbox",
        sx: {marginBottom:"20px"},
        name: "conditions",
        initialValue: "",
        validator: yup.boolean().required("You have to accept the terms and conditions first"),
        label: "Agree to terms and conditions"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Register",
        name: "buttonWide"
    }
]

export const CreateComplaintJson = 
[
    {
        type: "select1", // complaint type
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "Complaint Type",
        name: "type",
        initialValue: "",
        validator: yup.string().required("Type is required"),
        options:
        [
            {
                value: "type1",
                title: "Type 1"
            },
            {
                value: "type2",
                title: "Type 2"
            },
            {
                value: "type3",
                title: "Type 3"
            },
        ]
    },
    {
        type: "text", // complaint subject
        fullWidth: "fullWidth",
        label: "Subject",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "subject",
        initialValue: "",
        validator: yup.string().required("Subject is required")
    },
    {
        type: "select", // complaint severity
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "Severity",
        name: "severity",
        initialValue: "",
        validator: yup.string().required("Severity is required"),
        options: 
        [
            {
                value: "severity1",
                title: "Severity 1"
            },
            {
                value: "severity2",
                title: "Severity 2"
            },
            {
                value: "severity3",
                title: "Severity 3"
            },
        ]
    },
    {
        type: "text", // complaint description
        fullWidth: "fullWidth",
        label: "Description",
        id: "fullWidth",
        multiline: true,
        rows: 3,
        sx: {marginBottom: "20px"},
        name: "description",
        initialValue: "",
        validator: yup.string().required("Description is required"),
    },
    {
        type: "radio", // language
        label: "Prefered Contact Language",
        ariaLabel: "Prefered Contact Language",
        name: "radio-buttons-group",
        options:
        [
            {
                value: "arabic",
                label: "Arabic"
            },
            {
                value: "english",
                label: "English"
            }
        ]
    },
    {
        type: "checkbox",
        sx: {marginBottom:"20px"},
        name: "conditions",
        initialValue: "",
        validator: yup.boolean().required("You have to accept the terms and conditions first"),
        label: "Agree to terms and conditions"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Create Complaint",
        name: "buttonWide"
    }
]

export const UpdateComplaintJson = 
[
    {
        type: "select", // complaint type
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "Complaint Type",
        name: "type",
        initialValue: "",
        validator: yup.string().required("Type is required"),
        options: 
        [
            {
                value: "type1",
                title: "Type 1"
            },
            {
                value: "type2",
                title: "Type 2"
            },
            {
                value: "type3",
                title: "Type 3"
            },
        ]
    },
    {
        type: "text", // complaint description
        fullWidth: "fullWidth",
        label: "Description",
        id: "fullWidth",
        multiline: true,
        rows: 3,
        sx: {marginBottom: "20px"},
        name: "description",
        initialValue: "",
        validator: yup.string().required("Description is required")
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Update Complaint",
        name: "buttonWide"
    }
]