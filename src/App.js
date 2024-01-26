import { useState } from "react";
import "./styles.css";

export default function App() {
  const [add, setAdd] = useState();
  const [item, setItem] = useState([]);

  function Change(e) {
    e.preventDefault();
    const obj = { add, id: Date.now(), packed: false };
    setItem([...item, obj]);
    setAdd("");
  }
  function Delete(id) {
    setItem((item) => item.filter((s) => s.id !== id));
  }
  function Clear(e) {
    e.preventDefault();
    setItem([]);
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form className="form">
        <input
          type="text"
          value={add}
          onChange={(e) => {
            setAdd(e.target.value);
          }}
        />
        <div className="btn">
          <button onClick={Change}>+</button>
          <button onClick={Clear}>clear</button>
        </div>
      </form>
      <div className="itemlist">
        {item.map((e) => {
          return <List add={e.add} id={e.id} Delete={Delete} />;
        })}
      </div>
    </div>
  );
}
function List({ add, id, Delete }) {
  return (
    <div className="list">
      <span>{add}</span>
      <button
        className="delete"
        onClick={() => {
          Delete(id);
        }}
      >
        x
      </button>
    </div>
  );
}
