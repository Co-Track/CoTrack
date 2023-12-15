import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmergency() {
  const [income, setIncome] = useState("");
  const [outcome, setOutcome] = useState("");
  const [inDate, setInDate] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      income: income,
      outcome: outcome,
      inDate: inDate,
      title: title,
    };
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(import.meta.env.VITE_API_URL + "/emergency", requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setIncome("");
        setOutcome("");
        setInDate("");
        setTitle("");
        navigate("/emergency");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="inputs-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add a new expense</h1>
          <input
            className="inputs"
            type="text"
            placeholder="enter the title"
            value={title}
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="inputs"
            type="number"
            placeholder="00.00"
            value={income}
            onChange={(e) => {
              setIncome(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="inputs"
            type="number"
            placeholder="00.00"
            value={outcome}
            onChange={(e) => {
              setOutcome(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="inputs"
            type="date"
            value={inDate}
            onChange={(e) => {
              setInDate(e.target.value);
            }}
          />
        </div>
        <div>
          <br></br>
          <button className="addBtn">Add</button>
        </div>
      </form>
    </div>
  );
}
export default AddEmergency;
