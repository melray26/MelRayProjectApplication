import React from 'react';

function Example(props) {
  console.log(props);
  return (
    <div className="Example">
      <h3>Hello example component!</h3>
      <button onClick={() => {
        // little () lance talked about calls function at props.cw so then the counsle --> be present 
        props.cw()
      }}>Start</button>
    </div>
    
  );
}

export default Example;
