import styles from "./results.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Results() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.datamuse.com/words?rel_rhy=" + params.id.toLocaleLowerCase()
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        if (json.length == 0) {
          setStatus(false);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  let params = useParams();
  return (
    <div className={styles.App}>
      <div className={styles.bg}>
        <header className={styles.header}>
          <p>⏰ RhymeTime</p>
          <p>
            words that rhyme with <b>{params.id.toLocaleLowerCase()}</b>
          </p>
        </header>
        <Link to="/">⏪ back</Link>
        <div className="list">
          {status ? (
            <div>
              {data.map((item) => (
                <p>{item.word}</p>
              ))}
            </div>
          ) : (
            <p>😔 rhymes with nothing</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
