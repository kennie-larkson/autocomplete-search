import "./App.css";
import "./custom.css";
import Input from "./components/Input.js";
import Suggestions from "./components/Suggestions.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Button from "./components/Button.js"
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
    setText(text.toLowerCase());
  };

  return (
    <div className="container">
      <Navbar title="KennieAutoSearch"/>
      <main>
        <Input
          setsuggestions={setSuggestions}
          changehandler={changeHandler}
          text={text}
        />
        <div>
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <Suggestions
                suggestion={suggestion}
                onsuggesthandler={onSuggestHandler}
                key={i}
              />
            ))}
        </div>
        <Button btnText="Visit profile" text={text} users={users}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
