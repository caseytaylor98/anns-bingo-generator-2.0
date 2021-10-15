import React, { useState } from 'react';

const defaultItems = []

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
    <div className="list">
      <ul className="list-group">
        {items.map((item,index) => (
          <li key={item,index} className="list-item">
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

function App() {
  const [items, setItems] = useState(defaultItems)
  const [input, setInput] = useState("")

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.value != '') {
      setInput(e.target.value);
    }
  }

  function handleAdd() {
    const newItems = [...items, input];
    setItems(newItems);
    console.log("items:", items)
  }

  function removeItem(item) {
    setItems([...items].filter((x) => x !== item));
  };

  return (
    <div className="App">
      <div className="App-header"> Ann's Bingo Game </div>


      <div className="Items">
      <FormGroup label="Add Item">
        <input type="text" className="add-item-input" defaultValue="" onChange={handleChange}/>
        <button onClick={handleAdd} className="add-item-button"> Add </button>
      </FormGroup>

      <ItemsList items={items} removeItem={removeItem} />
      </div>

    
    </div>
  );
}

export default App;
