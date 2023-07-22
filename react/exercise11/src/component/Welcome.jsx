import Age from "./Age";
import React from "react";
function Welcome({ name , age }) {
    return (
      <>
        <p>Welcome, {name}</p>
        {< Age age={age} />}
      </>
    );
  }
  
  export default Welcome;