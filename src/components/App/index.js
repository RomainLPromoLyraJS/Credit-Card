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
      <div className="card">
        <Cards 
          number={isNumber} 
          name={isName} 
          expiry={isExpiry}
          cvc={isCvc} 
          focused={isFocus} 
        />
      </div>
      <form className="card__form" action="">
        <input 
        type="number" 
        name="number" 
        placeholder="Card Number"
        maxLength="19" 
        value={isNumber} 
        onChange={event => setNumber(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
        <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        maxLength="17" 
        value={isName} 
        onChange={event => setName(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
        <input 
        type="number" 
        name="expiry" 
        placeholder="MM/YY Expiry" 
        value={isExpiry} 
        onChange={event => setExpiry(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
        <input 
        type="number" 
        name="cvc" 
        placeholder="CVC" 
        // maxLength="3" -> doesn't work in this input
        value={isCvc} 
        onChange={event => setCvc(event.target.value)}
        onFocus={event => setFocus(event.target.name)} />
      </form>
    </div>
  );
}

export default App;
