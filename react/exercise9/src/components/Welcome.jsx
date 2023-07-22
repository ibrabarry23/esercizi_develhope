import React from "react";
import Age from "./Age";
function Welcome({ nome, age }) {
  return (
    <>
      <p>Welcome {nome}</p>
      {age > 18 && age < 65 && <Age age={age} />}
    </>
  );
}
export default Welcome;