import './App.css';
import { useState } from 'react';
import Form from './form/Form';
function App() {
  const [inputValue,setInput] = useState("")
  return (
      <>
  <Form setVal = {setInput} inputValue = {inputValue}/>
      </>  );
}

export default App;
