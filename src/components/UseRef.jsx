import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();
  //const inputRef =  React.createRef()

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <h2>useRef()</h2>
      <input type="text" ref={inputRef} />
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </>
  );
};

export default UseRef;
