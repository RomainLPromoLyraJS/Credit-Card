import React, { useState } from "react";
import Cards from "react-credit-cards";

// == CSS Card Component
import "react-credit-cards/es/styles-compiled.css";


const App = () => {

const [isNumber, setNumber] = useState("");
const [isName, setName] = useState("");
const [isExpiry, setExpiry] = useState("");
const [isCvc, setCvc] = useState("");
const [isFocus, setFocus] = useState("");

  return (
    <div className="App">
      <Cards 
      number={isNumber} 
      name={isName} 
      expiry={isExpiry}
      cvc={isCvc} 
      focused={isFocus} 
      />
      <form action="">
        <input 
        type="tel" 
        name="number" 
        placeholder="Card Number" 
        value={isNumber} 
        onChange={event => setNumber(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
        <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={isName} 
        onChange={event => setName(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
        <input 
        type="tel" 
        name="expiry" 
        placeholder="MM/YY Expiry" 
        value={isExpiry} 
        onChange={event => setExpiry(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
        <input 
        type="tel" 
        name="cvc" 
        placeholder="CVC" 
        value={isCvc} 
        onChange={event => setCvc(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
      </form>
    </div>
  );
}

export default App;
