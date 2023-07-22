import React from "react";
import Age from "./Age";
function Welcome({ nome,age }) {
  return (
    <>
      <p>Welcome {nome}</p>
      {age && <Age age={age} />}
    </>
  );
}
export default Welcome;