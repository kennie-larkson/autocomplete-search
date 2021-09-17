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
    setSuggestions(matches);
    setText(text);
  };

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

  return (
    <div className="container">
      <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">KennieAutoSearch</a>
      {/* <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul> */}
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
          }, 100);
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
