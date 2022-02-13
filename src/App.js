import React from 'react';
import Form from './Form';
import InputProvider from './store/InputProvider';

const App = () => {

  return (
    <InputProvider>
      <Form/>
    </InputProvider>
  )
}

export default App