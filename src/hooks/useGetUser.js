import { useState } from "react";
import axios from "axios";

export default function useGetUser() {
  const [repos, setRepos] = useState();

  const getUser = (userName) => {
    //fetch data from api
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => setRepos(response.data));
  };

  return [repos, getUser];
}
