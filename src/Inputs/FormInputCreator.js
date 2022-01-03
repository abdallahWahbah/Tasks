export const LoginJson = 
[
    {
        type: "email",
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "email",
    },
    {
        type: "password",
        fullWidth: "fullWidth",
        label: "Password",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "password"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {margin: "10px 0"},
        title: "Login"
    },
    { // Initial values(last element)
        email: "",
        passworD: "",
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
        name: "name"
    },
    {
        type: "text", // email
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "email"
    },
    {
        type: "password",
        fullWidth: "fullWidth",
        label: "Password",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "password"
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "phone"
    },
    {
        type: "select", // education
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "Education",
        name: "edu",
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
        name: "address"
    },
    {
        type: "checkbox",
        sx: {marginBottom:"20px"},
        name: "conditions",
        label: "Agree to terms and conditions"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Register"
    },
    { // Initial values(last element)
        name: "",
        email:"",
        password:"",
        phone: "",
        edu: "",
        'radio-buttons-group':"", // for gender
        address:"",
        conditions: ""
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
        name: "name"
    },
    {
        type: "email",
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "email"
    },
    {
        type: "password",
        fullWidth: "fullWidth",
        label: "Password",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "password"
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "phone"
    },
    {
        type: "checkbox",
        sx: {marginBottom:"20px"},
        name: "conditions",
        label: "Agree to terms and conditions"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Register"
    },
    { // Initial values
        name: "",
        email:"",
        password:"",
        phone: "",
        conditions: ""
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
        name: "subject"
    },
    {
        type: "select", // complaint severity
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "Severity",
        name: "severity",
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
        name: "description"
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
        label: "Agree to terms and conditions"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Create Complaint"
    },
    { // initial values
        type:"",
        subject:"",
        severity:"",
        description:"",
        'radio-buttons-group':"", // for language
        conditions:""
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
        name: "description"
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "70%", textAlign: "center !important"},
        title: "Update Complaint"
    }
]