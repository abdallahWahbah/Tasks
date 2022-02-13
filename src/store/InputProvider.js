import React, {useState} from 'react'

import InputContext from './InputContext'

const InputProvider = (props) => {

    const [input, setInput] = useState("")

    return (
        <InputContext.Provider value={{input: input, modifyInput: setInput}}>
            {props.children}
        </InputContext.Provider>
    )
}

export default InputProvider;