import { useState } from "react";

export default function Holder({ actualAnswer }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const checkAnswer = () => {
    if (value.trim().toLowerCase() === actualAnswer.trim().toLowerCase()) {
      setSuccess(true);
      setError(false);
    } 
    else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor="myInput" style={{ display: "block", marginBottom: "0.5rem" }}>
        Enter text:
      </label>

      <div 
      style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input
          id="myInput"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Type here..."
          style={{ padding: "0.5rem", width: "250px" }}
          className={error ? "red-box" : "green-box"}
        />

        <button 
          onClick={checkAnswer} 
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          Submit Guess
        </button>
      </div>
    </div>
  );
}