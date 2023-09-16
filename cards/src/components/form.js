import React, { useState } from "react";


function Form() {
    const [name,setName]=useState("");
  return (
    <div>
      <input type={"text"} 
      onChange={(event)=>{
        setName(event.target.value);
    }}
        value = {name}
        ></input>
      <button>Add</button>
    </div>
  );
}

export default Form;
