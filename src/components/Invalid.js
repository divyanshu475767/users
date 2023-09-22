import React from "react";
import "./Invalid.css";
import { useState } from "react";

const Invalid = (props) => {

  const [okay , setOkay] = useState(false);
  const okayHandler = () => {
    setOkay(true);
  };



  return (
    

    <div className="invalid">
      <header className="head">Invalid Input</header>
      <div className="suggestion">
        <p>Please enter a Valid name and age(non-empty values)</p>
         <button onClick={okayHandler}>Okay</button> 
      </div>

    </div>
   
    
  );
};

export default Invalid;
