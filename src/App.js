import "./App.css";
import "./custom.css";
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
    console.log(matches)
    setSuggestions(matches);
    setText(text);
  };

  const onSuggestHandler = (text) => {
    setText(text.toLowerCase());
    setSuggestions([]);
  };

  return (
    <div className="container">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            KennieAutoSearch
          </a>
        </div>
      </nav>
      <input
        onChange={(e) => changeHandler(e.target.value)}
        value={text}
        type="text"
        className="col-md-12 input"
        style={{ marginTop: 10 }}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 200);
        }}
      />
      <div>
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <div
              onClick={() => onSuggestHandler(suggestion.email)}
              key={i}
              className=" suggestions col-md-12 justify-content-md-center "
            >
              {suggestion.email}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
