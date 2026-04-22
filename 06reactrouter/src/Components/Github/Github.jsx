import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("https://api.github.com/users/NcryptS")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // });

  return (
    <div className="flex align-center justify-center bg-gray-700 text-white text-3xl p-4">
      Github Username: {data.login}
      <img src={data.avatar_url} width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/NcryptS");
  return response.json();
};
