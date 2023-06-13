import { useState } from "react";

export default function NewUserForm(handleNewUser) {
  const [newUserData, setNewUserData] = useState({
    id: Math.floor(Math.random() * 1000000),
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    primary_language: "",
    favorite_color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUserData);
    handleNewUser.handleNewUser(newUserData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name: </label>
      <input
        required
        type="text"
        onChange={(e) =>
          setNewUserData({ ...newUserData, first_name: e.target.value })
        }
      />
      <label>Last Name: </label>
      <input
        required
        type="text"
        onChange={(e) =>
          setNewUserData({ ...newUserData, last_name: e.target.value })
        }
      />
      <label>Email: </label>
      <input
        required
        type="text"
        onChange={(e) =>
          setNewUserData({ ...newUserData, email: e.target.value })
        }
      />
      <label>Gender: </label>
      <select
        onChange={(e) =>
          setNewUserData({ ...newUserData, gender: e.target.value })
        }
      >
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Non-Binary">Non-Binary</option>
        <option value="Two-Spirit">Two-Spirit</option>
        <option value="Other">Other</option>
      </select>
      <label>Primary Language: </label>
      <input
        required
        type="text"
        onChange={(e) =>
          setNewUserData({ ...newUserData, primary_language: e.target.value })
        }
      />
      <label>Favorite Color: </label>
      <select
        onChange={(e) =>
          setNewUserData({ ...newUserData, favorite_color: e.target.value })
        }
      >
        <option value="Maroon">Maroon</option>
        <option value="Chartruse">Chartruse</option>
        <option value="Strawberry">Strawberry</option>
        <option value="Vermillion">Vermillion</option>
        <option value="SteelBlue">Steel Blue</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
