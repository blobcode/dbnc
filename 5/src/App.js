import styles from "./app.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  let navigate = useNavigate();
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleQuery(e) {
    e.preventDefault();

    // go to results page if input isn't empty
    if (text != "") {
      navigate(`/q/${text}`);
    }
  }

  return (
    <div className={styles.App}>
      <div className={styles.bg}>
        <header className={styles.header}>
          <p className>⏰ RhymeTime</p>
          <span>
            <form onSubmit={handleQuery} id="form">
              <input
                type="text"
                value={text}
                onChange={handleChange}
                className={styles.input}
                placeholder="rhymes with orange"
              ></input>
              <button
                type="submit"
                form="form"
                value="Submit"
                className={styles.button}
              >
                Rhyme!
              </button>
            </form>
          </span>
        </header>
        <p className={styles.sub}>All the rhymes, all the time.</p>
      </div>
    </div>
  );
}

export default App;
