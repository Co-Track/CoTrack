import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPersonal() {
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
    axios
      .post("http://localhost:3000/personal", requestBody)
      .then((response) => {
        navigate("/Personal");
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
          <label>Title</label>
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
          <label>income</label>
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
          <label>Outcome</label>
          <input
            className="inputs"
            type="number"
            value={outcome}
            onChange={(e) => {
              setOutcome(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Date</label>
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
export default AddPersonal;
