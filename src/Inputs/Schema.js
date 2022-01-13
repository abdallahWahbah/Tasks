import * as yup from 'yup';

// export const LoginJson = 
// [
//     {
//         type: "email",
//         fullWidth: "fullWidth",
//         label: "Email",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "email",
//         initialValue: "",
//         validator: yup.string().email("email must be valid").required("Email can't be empty")
//     },
//     {
//         type: "password",
//         fullWidth: "fullWidth",
//         label: "Password",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "password",
//         initialValue: "",
//         validator: yup.string().trim().min(5).max(60).required("Password can't be empty")
//     },
//     {
//         type: "button",
//         fullWidth: "fullWidth",
//         sx: {margin: "10px 0"},
//         title: "Login",
//         name: "button"
//     }
// ]

// export const CustomerJson = 
// [
//     {
//         type: "text", // name
//         fullWidth: "fullWidth",
//         label: "Full Name",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "name",
//         initialValue: "",
//         validator: yup.string().min(7).required("Name can't be empty")
//     },
//     {
//         type: "text", // email
//         fullWidth: "fullWidth",
//         label: "Email",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "email",
//         initialValue: "",
//         validator: yup.string().email("email must be valid").required("Email can't be empty")
//     },
//     {
//         type: "password",
//         fullWidth: "fullWidth",
//         label: "Password",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "password",
//         initialValue: "",
//         validator: yup.string().trim().min(5).max(60).required("Password can't be empty")
//     },
//     {
//         type: "number",
//         fullWidth: "fullWidth",
//         label: "Phone Number",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "phone",
//         initialValue: "",
//         validator: yup.number().positive().required("Phone Number can't be empty")
//     },
//     {
//         type: "select", // education
//         labelId: "demo-simple-select-label",
//         sx: {marginBottom: "20px"},
//         selectId: "demo-simple-select",
//         label: "Education",
//         name: "edu",
//         initialValue: "",
//         validator: yup.string().required("Choose your education"),
//         options: 
//         [
//             {
//                 value: "BSC",
//                 title: "BSC"
//             },
//             {
//                 value: "Master",
//                 title: "Master"
//             },
//             {
//                 value: "PHD",
//                 title: "PHD"
//             },
//         ]
//     },
//     {
//         type: "radio", // gender
//         label: "Gander",
//         ariaLabel: "gender",
//         defaultValue: "female",
//         name: "radio-buttons-group",
//         options:
//         [
//             {
//                 value: "female",
//                 label: "Female"
//             },
//             {
//                 value: "male",
//                 label: "Male"
//             }
//         ]
//     },
//     {
//         type: "text", // address
//         fullWidth: "fullWidth",
//         label: "Address",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "address",
//         initialValue: "",
//         validator: yup.string().min(7).required("Address can't be empty")
//     },
//     {
//         type: "checkbox",
//         sx: {marginBottom:"20px"},
//         name: "conditions",
//         initialValue: "",
//         validator: yup.boolean().required("You have to accept the terms and conditions first"),
//         label: "Agree to terms and conditions"
//     },
//     {
//         type: "button",
//         fullWidth: "fullWidth",
//         sx: {width: "70%", textAlign: "center !important"},
//         title: "Register",
//         name: "buttonWide"
//     }
// ]

// export const AdminJson = 
// [
//     {
//         type: "text", // name
//         fullWidth: "fullWidth",
//         label: "Full Name",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "name",
//         initialValue: "",
//         validator: yup.string().min(7).required("Name can't be empty")
//     },
//     {
//         type: "email",
//         fullWidth: "fullWidth",
//         label: "Email",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "email",
//         initialValue: "",
//         validator: yup.string().email("email must be valid").required("Email can't be empty")
//     },
//     {
//         type: "password",
//         fullWidth: "fullWidth",
//         label: "Password",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "password",
//         initialValue: "",
//         validator: yup.string().trim().min(5).max(60).required("Password can't be empty")
//     },
//     {
//         type: "number",
//         fullWidth: "fullWidth",
//         label: "Phone Number",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "phone",
//         initialValue: "",
//         validator: yup.number().positive().required("Phone Number can't be empty")
//     },
//     {
//         type: "checkbox",
//         sx: {marginBottom:"20px"},
//         name: "conditions",
//         initialValue: "",
//         validator: yup.boolean().required("You have to accept the terms and conditions first"),
//         label: "Agree to terms and conditions"
//     },
//     {
//         type: "button",
//         fullWidth: "fullWidth",
//         sx: {width: "70%", textAlign: "center !important"},
//         title: "Register",
//         name: "buttonWide"
//     }
// ]

// export const CreateComplaintJson = 
// [
//     {
//         type: "select1", // complaint type
//         labelId: "demo-simple-select-label",
//         sx: {marginBottom: "20px"},
//         selectId: "demo-simple-select",
//         label: "Complaint Type",
//         name: "type",
//         initialValue: "",
//         validator: yup.string().required("Type is required"),
//         options:
//         [
//             {
//                 value: "type1",
//                 title: "Type 1"
//             },
//             {
//                 value: "type2",
//                 title: "Type 2"
//             },
//             {
//                 value: "type3",
//                 title: "Type 3"
//             },
//         ]
//     },
//     {
//         type: "text", // complaint subject
//         fullWidth: "fullWidth",
//         label: "Subject",
//         id: "fullWidth",
//         sx: {marginBottom: "20px"},
//         name: "subject",
//         initialValue: "",
//         validator: yup.string().required("Subject is required")
//     },
//     {
//         type: "select", // complaint severity
//         labelId: "demo-simple-select-label",
//         sx: {marginBottom: "20px"},
//         selectId: "demo-simple-select",
//         label: "Severity",
//         name: "severity",
//         initialValue: "",
//         validator: yup.string().required("Severity is required"),
//         options: 
//         [
//             {
//                 value: "severity1",
//                 title: "Severity 1"
//             },
//             {
//                 value: "severity2",
//                 title: "Severity 2"
//             },
//             {
//                 value: "severity3",
//                 title: "Severity 3"
//             },
//         ]
//     },
//     {
//         type: "text", // complaint description
//         fullWidth: "fullWidth",
//         label: "Description",
//         id: "fullWidth",
//         multiline: true,
//         rows: 3,
//         sx: {marginBottom: "20px"},
//         name: "description",
//         initialValue: "",
//         validator: yup.string().required("Description is required"),
//     },
//     {
//         type: "radio", // language
//         label: "Prefered Contact Language",
//         ariaLabel: "Prefered Contact Language",
//         name: "radio-buttons-group",
//         options:
//         [
//             {
//                 value: "arabic",
//                 label: "Arabic"
//             },
//             {
//                 value: "english",
//                 label: "English"
//             }
//         ]
//     },
//     {
//         type: "checkbox",
//         sx: {marginBottom:"20px"},
//         name: "conditions",
//         initialValue: "",
//         validator: yup.boolean().required("You have to accept the terms and conditions first"),
//         label: "Agree to terms and conditions"
//     },
//     {
//         type: "button",
//         fullWidth: "fullWidth",
//         sx: {width: "70%", textAlign: "center !important"},
//         title: "Create Complaint",
//         name: "buttonWide"
//     }
// ]

// export const UpdateComplaintJson = 
// [
//     {
//         type: "select", // complaint type
//         labelId: "demo-simple-select-label",
//         sx: {marginBottom: "20px"},
//         selectId: "demo-simple-select",
//         label: "Complaint Type",
//         name: "type",
//         initialValue: "",
//         validator: yup.string().required("Type is required"),
//         options: 
//         [
//             {
//                 value: "type1",
//                 title: "Type 1"
//             },
//             {
//                 value: "type2",
//                 title: "Type 2"
//             },
//             {
//                 value: "type3",
//                 title: "Type 3"
//             },
//         ]
//     },
//     {
//         type: "text", // complaint description
//         fullWidth: "fullWidth",
//         label: "Description",
//         id: "fullWidth",
//         multiline: true,
//         rows: 3,
//         sx: {marginBottom: "20px"},
//         name: "description",
//         initialValue: "",
//         validator: yup.string().required("Description is required")
//     },
//     {
//         type: "button",
//         fullWidth: "fullWidth",
//         sx: {width: "70%", textAlign: "center !important"},
//         title: "Update Complaint",
//         name: "buttonWide"
//     }
// ]

export const Page1 = 
[
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "ID Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "id-number",
        initialValue: "",
        // validator: yup.string().length(2, "ID Number must be 2 numbers").required("ID Number can't be empty"),
        // can't mix between length(string) and positive(number)
        // use max and min
        validator: yup.number().min(1, "ID Number must be 1 number").max(1, "ID Number must be 1 number")
    },
    {
        type: "text",
        fullWidth: "fullWidth",
        label: "Center Owner Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "owner-name",
        initialValue: "",
        validator: yup.string().min(2).required("Owner name can't be empty")
    },
    {
        type:"date",
        label: "Date Of Birth",
        sx: {marginBottom: "20px"},
        name: "date-of-birth",
        initialValue: "",
        validator: yup.date()
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "phone-number",// center owner phone number
        initialValue: "",
        validator: yup.number().positive().required("Phone Number can't be empty")
    },
    {
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "License Type",
        name: "license-type",
        initialValue: "",
        validator: yup.string().required("Choose License Type"),
        options: 
        [
            {
                value: "type-1",
                title: "type 1"
            },
            {
                value: "type-2",
                title: "type 2"
            },
            {
                value: "type-3",
                title: "type 3"
            },
        ]
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Commercial Registeration Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name:'commercial-registeration-number',
        initialValue: "",
        validator: yup.string().required("Commercial Number can't be empty")
    },
    {
        type: "text",
        fullWidth: "fullWidth",
        label: "Enityty Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "entity-name",
        initialValue: "",
        validator: yup.string().min(1).required("Entity name can't be empty")
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Commissioner Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "commissioner-phone-number",
        initialValue: "",
        validator: yup.number().positive().required("Commissioner Phone Number can't be empty")
    },
    
];

export const Page2=
[
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Building Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name:'building-number',
        initialValue: "",
        validator: yup.number().required("Building Number can't be empty")
    },
    {
        type: "text",
        fullWidth: "fullWidth",
        label: "Street Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "street-name",
        initialValue: "",
        validator: yup.string().min(1).required("Street name can't be empty")
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "District Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name:'district-number',
        initialValue: "",
        validator: yup.number().required("District Number can't be empty")
    },
    {
        type: "text",
        fullWidth: "fullWidth",
        label: "City",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "city-name",
        initialValue: "",
        validator: yup.string().min(1).required("City can't be empty")
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Postal Code",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name:'postal-code',
        initialValue: "",
        validator: yup.number().required("Postal Code can't be empty")
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Extra Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name:'extra-number',
        initialValue: "",
    },
]

export const Page3=
[
    {
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "Center name",
        name: "center-name-select-comp",
        initialValue: "",
        validator: yup.string().required("Choose center name"),
        options: 
        [
            {
                value: "name-1",
                title: "name 1"
            },
            {
                value: "name-2",
                title: "name 2"
            },
            {
                value: "name-3",
                title: "name 3"
            },
        ]
    },
    {
        type: "text",
        fullWidth: "fullWidth",
        label: "Age Group",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "age-group",
        initialValue: "",
        validator: yup.string().min(1).required("Age Group can't be empty")
    },
    {
        label: "Applicants Gender",
        ariaLabel: "Applicants Gender",
        name: "radio-buttons-group",
        validator: yup.string().required("Choose Gender"),
        options:
        [
            {
                value: "Male",
                label: "Male"
            },
            {
                value: "Female",
                label: "Female"
            },
            {
                value: "Both",
                label: "Both"
            }
        ]
    },
]


export const Page4=
[
    {
        name: "table",
        rows:
        [
            {
                title: "Radio Button 1",
                options:
                [
                    {
                        value: "Male",
                        name: "radio1",
                        inputProps:{ 'aria-label': 'A' }
                    },
                    {
                        value: "Female",
                        name: "radio1",
                        inputProps:{ 'aria-label': 'B' }
                    },
                    {
                        value: "Both",
                        name: "radio1",
                        inputProps:{ 'aria-label': 'C' }
                    }
                ]
            },
            {
                title: "Radio Button 2",
                options:
                [
                    {
                        value: "Male",
                        name: "radio2",
                        inputProps:{ 'aria-label': 'A' }
                    },
                    {
                        value: "Female",
                        name: "radio2",
                        inputProps:{ 'aria-label': 'B' }
                    },
                    {
                        value: "Both",
                        name: "radio2",
                        inputProps:{ 'aria-label': 'C' }
                    }
                ]
            },
            {
                title: "Radio Button 3",
                options:
                [
                    {
                        value: "Male",
                        name: "radio3",
                        inputProps:{ 'aria-label': 'A' }
                    },
                    {
                        value: "Female",
                        name: "radio3",
                        inputProps:{ 'aria-label': 'B' }
                    },
                    {
                        value: "Both",
                        name: "radio3",
                        inputProps:{ 'aria-label': 'C' }
                    }
                ]
            }
        ]
    }
]