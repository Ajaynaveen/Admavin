import { useState } from "react";
import "./App.css"; // Import your CSS file

export default function Box() {
  const [box1, setBox1] = useState(["item1", "item2", "item3", "item4"]);
  const [box2, setBox2] = useState(["item5", "item6", "item7", "item8"]);

  const [selectedBox1, setSelectedBox1] = useState([]);
  const [selectedBox2, setSelectedBox2] = useState([]);

  const handleSelectBox1 = (el, index) => {
    if (selectedBox2.length <= 0) {
      if (selectedBox1.includes(el)) {
        setSelectedBox1(selectedBox1.filter((item) => item !== el));
      } else {
        setSelectedBox1([...selectedBox1, el]);
      }
    } else {
      alert("Please select items only from one box at a time");
      setSelectedBox1([]);
      setSelectedBox2([]);
    }
  };

  const handleSelectBox2 = (el, index) => {
    if (selectedBox1.length <= 0) {
      if (selectedBox2.includes(el)) {
        setSelectedBox2(selectedBox2.filter((item) => item !== el));
      } else {
        setSelectedBox2([...selectedBox2, el]);
      }
    } else {
      alert("Please select items only from one box at a time");
      setSelectedBox1([]);
      setSelectedBox2([]);
    }
  };

  const handleTransfer = () => {
    setBox2([...box2, ...selectedBox1]);
    setBox1(box1.filter((item) => !selectedBox1.includes(item)));
    setSelectedBox1([]);
  };

  const handleTransferBack = () => {
    setBox1([...box1, ...selectedBox2]);
    setBox2(box2.filter((item) => !selectedBox2.includes(item)));
    setSelectedBox2([]);
  };

  const addall = () => {
    setBox2([...box2, ...box1]);
    setBox1([]);
  };

  const removeall = () => {
    setBox1([...box1, ...box2]);
    setBox2([]);
  };

  return (
    <div className="container">
      <div className="box-container">
        <h2>Box 1</h2>
        {box1.map((el, index) => (
          <div key={index}>
            <h4
              className={`box-item ${selectedBox1.includes(el) ? "selected" : ""}`}
              onClick={() => handleSelectBox1(el, index)}
            >
              {el}
            </h4>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button onClick={handleTransfer} disabled={selectedBox1.length === 0}>
          Add
        </button>

        <button
          onClick={handleTransferBack}
          disabled={selectedBox2.length === 0}
        >
          Remove
        </button>

        <button
          onClick={addall}
          disabled={selectedBox1.length > 0 || selectedBox2.length > 0}
        >
          Add all
        </button>

        <button
          onClick={removeall}
          disabled={selectedBox1.length > 0 || selectedBox2.length > 0}
        >
          Remove all
        </button>
      </div>

      <div className="box-container">
        <h2>Box 2</h2>
        {box2.map((el, index) => (
          <div key={index}>
            <h4
              className={`box-item ${selectedBox2.includes(el) ? "selected" : ""}`}
              onClick={() => handleSelectBox2(el, index)}
            >
              {el}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
