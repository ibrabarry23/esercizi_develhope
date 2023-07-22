import React from "react";
function Welcome({name}) {
    return <p>Welcome {name}</p>;
  }
  Welcome.defaultProps = {
    name: 'jhon',
  };
  export default Welcome;