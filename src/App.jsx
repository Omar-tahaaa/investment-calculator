import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

function App() {

  const [inputsValue, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 6,
  });

  function handleInvestment(name , event) {
    setInputValues({
      ...inputsValue,
      [name]: +event,
    });
  }

  const inputDurationValid = inputsValue.duration > 0

  return (
    <>
      <UserInput inputsValue={inputsValue} handleInvestment={handleInvestment}/>
      {!inputDurationValid && <p style={{textAlign : "center"}}>please enter a duration greater than zero</p>}
      {inputDurationValid && <Result inputsValue={inputsValue} /> }
    </>
  );
}

export default App;
