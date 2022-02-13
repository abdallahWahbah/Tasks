import React from "react";  

const InputContext = React.createContext({
    input: '',
    modifyInput: (text) => {}
})
 
export default InputContext;