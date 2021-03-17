import axios from "axios";
import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [repos, setRepos] = useState(null);

  // useEffect(() => {
  //   console.log("useEffect check");
  // }, [repos]);

  // useEffect(() => {
  //   console.log("WELCOME!!!!");
  // }, []);

  useEffect(() => {
    if (!repos) {
      axios
        .get("https://api.github.com/users/Smiyu-web")
        .then((response) => setRepos(response.data));
    }
  }, []);

  return (
    <>
      <h2>useEffect()</h2>
      <br />
      Hello, {repos && repos.login}
      {/* <button onClick={() => setRepos(false)}>setrepos</button> */}
    </>
  );
};

export default UseEffect;
