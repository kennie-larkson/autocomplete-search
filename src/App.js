import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const { data } = response;
      console.log(data);
      setUsers(data);
    }
    loadUsers();
  }, []);

  const changeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regex = new RegExp(`${text}`, "gi"); // gi modifier enforces case-insensitive
        return user.email.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div className="container">
      <input
        onChange={(e) => changeHandler(e.target.value)}
        value={text}
        type="text"
        className="col-md-12 input"
        style={{ marginTop: 10 }}
      />
      <div>
        {suggestions.map((suggestion) => (
          <p key={suggestion.id}>{suggestion.email}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
