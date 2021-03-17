import React, { useState } from "react";

const UseState = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <h2>useState()</h2>
      <br />
      <button className="btn" onClick={() => setIsHidden(!isHidden)}>
        Toggle Practice Hooks Comp
      </button>
      <br />
      {isHidden ? "Im Visible" : "I'm not visible"}
    </>
  );
};

export default UseState;
