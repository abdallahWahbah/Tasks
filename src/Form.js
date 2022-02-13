import React, {useContext} from 'react'

import InputContext from './store/InputContext';

const Form = () => {
    
  const ctx = useContext(InputContext);

  const handleChange = (input) =>
  {
    ctx.modifyInput(input.target.value);
    console.log(ctx.input)
  }

  return (
    <React.Fragment>
        <form>
            <input type="text" value={ctx.input} onChange={val => handleChange(val)}/>
        </form>
        <p>{ctx.input}</p>
    </React.Fragment>
  )
}

export default Form