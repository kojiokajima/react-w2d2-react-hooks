import React, { useState, useEffect } from "react";
import axios from "axios";
import useGetUser from "../hooks/useGetUser";

const CustomHook = () => {
  const [userName, setUserName] = useState("");
  const [repos, getUser] = useGetUser();
  // const [repos, setRepos] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.github.com/users/${userName}`)
  //     .then((response) => setRepos(response.data));
  // }, [userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(userName);
  };

  return (
    <>
      <h2>Custom Hook</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <input type="submit" className="btn" />
      </form>

      {repos && (
        <>
          <br />
          <img className="avatar" src={repos.avatar_url} alt="avatar" />
        </>
      )}
    </>
  );
};

export default CustomHook;
