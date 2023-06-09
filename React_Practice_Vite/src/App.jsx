import { useState, useEffect } from "react";
import "./App.css";
import { data } from "./State/data.js";

function App() {
  const [userData, setUserData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [update, setUpdate] = useState(false);

  const eliminateDuplicates = (arr) => {
    if (arr.length < 1) return [];
    const reduced = arr.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1;
      return prev;
    }, {});
    return reduced;
  };

  useEffect(() => {
    async function getData() {
      await setUserData(data);
      const first_names = userData.map((user) => user.first_name);
      const sorted_first_names = first_names.sort();
      const reduced = eliminateDuplicates(sorted_first_names);
      // console.log("reduced", Object.keys(reduced));
      setSortedData(Object.keys(reduced));
    }
    getData();
  }, [update]);

  const handleClick = () => {
    return update ? setUpdate(false) : setUpdate(true);
  };

  return (
    <>
      <h1>Hello World</h1>
      {update ? (
        <button onClick={handleClick}>A-z First Name</button>
      ) : (
        <button onClick={handleClick}>First & Last Name</button>
      )}

      {!update
        ? userData.map((user) => (
            <p key={user.id}>
              {" "}
              {user.first_name} {user.last_name}{" "}
            </p>
          ))
        : sortedData.map((user, i) => <p key={user + i}>{user}</p>)}
    </>
  );
}

export default App;
