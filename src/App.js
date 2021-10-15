import React, { useState } from "react";

const WIDTH = 4;
const HEIGHT = 3;

const MAX_ITEMS = WIDTH * HEIGHT;

const defaultItems = [
  "Blank #0",
  "Blank #1",
  "Blank #2",
  "Blank #3",
  "Blank #4",
  "Blank #5",
  "Blank #6",
  "Blank #7",
  "Blank #8",
  "Blank #9",
  "Blank #10",
  "Blank #11",
  "Blank #12",
  "Blank #13",
  "Blank #14",
];
const FormGroup = ({ label, children }) => {
  return (
    <label className="form-group">
      <div className="form-label">{label}</div>
      <div>{children}</div>
    </label>
  );
};

const ItemsList = ({ items, removeItem }) => {
  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item, index) => (
          <li key={(item, index)} className="list-item">
            <span>{item}</span>
            <button
              className="remove-item-button"
              type="button"
              onClick={() => removeItem(item)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BingoCard = ({ items, seed, width, height }) => {
  return (
    <div className="Card">
      <h1>Bingo Card</h1>
      <div
        className="Grid"
        style={{ gridTemplateColumns: `repeat(${width}, 1fr)` }}
      >
        {items.map((item, index) => (
          <div key={index}>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [items, setItems] = useState(defaultItems);
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function addItem() {
    // TODO: don't allow duplicates?
    if (input == "") {
      setErrorMessage("Field cannot be empty.");
      return;
    } else if (items.length >= MAX_ITEMS) {
      setErrorMessage("Maximum number of items reached.");
      return;
    } else {
      const newItems = [...items, input];
      setItems(newItems);
    }

    setErrorMessage("");
    console.log("items:", items);
  }

  function removeItem(item) {
    setItems([...items].filter((x) => x !== item));
  }

  return (
    <div className="App">
      <div className="App-header"> Ann's Bingo Game </div>

      <div className="Items">
        <FormGroup label="Add Item">
          <input
            type="text"
            className="add-item-input"
            defaultValue=""
            onChange={handleChange}
          />
          <button onClick={addItem} className="add-item-button">
            Add
          </button>
        </FormGroup>

        {errorMessage !== "" ? (
          <div className="error-message"> {errorMessage}</div>
        ) : null}

        <ItemsList items={items} removeItem={removeItem} />
      </div>

      <div className="Cards">
        {[0, 1].map((seed) => (
          <BingoCard items={items} seed={seed} width={4} height={3} />
        ))}
      </div>
    </div>
  );
}

export default App;
