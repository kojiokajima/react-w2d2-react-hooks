import React, { useState, useMemo, useCallback } from "react";
import axios from "axios";
import MemoChild from "./MemoChild";

const MemoParent = () => {
  const [count, setCount] = useState(0);

  // const fetchData = (user) => {
  //   axios
  //     .get(`https://api.github.com/users/${user}`)
  //     .then((response) => console.log("fetchData: ", response.data));
  // };

  const fetchData = useCallback((user) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => console.log("fetchData: ", response.data));
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="btn" type="button" onClick={() => setCount(count + 1)}>
        ADD
      </button>
      <MemoChild fetchData={fetchData} />
    </>
  );
};

export default MemoParent;
