import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FetchGithub = () => {
  const [gitHubData, setGithubData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.github.com/users/josepedrolorenzini/repos?sort=updated&per_page=5",
    );
    const data = await response.json();
    // setGithubData(data)
    // console.log(data);
    return data;
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setGithubData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      FetchGithub
      <ul>
        {gitHubData.map((repository) => {
          return <li>{repository.name}</li>;
        })}
      </ul>
      {}
    </div>
  );
};

export default FetchGithub;
