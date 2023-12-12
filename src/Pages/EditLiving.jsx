import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function formatDateString(inputDateString) {
  // Create a Date object from the input string
  let inputDate = new Date(inputDateString);

  // Get the components of the date
  let year = inputDate.getUTCFullYear();
  let month = ("0" + (inputDate.getUTCMonth() + 1)).slice(-2);
  let day = ("0" + inputDate.getUTCDate()).slice(-2);

  // Format the date as "yyyy-MM-dd"
  let formattedDate = year + "-" + month + "-" + day;

  return formattedDate;
}

function EditLiving() {
  const [income, setIncome] = useState("");
  const [outcome, setOutcome] = useState("");
  const [inDate, setInDate] = useState("");
  const [title, setTitle] = useState("");

  const { livingId } = useParams();
  console.log(livingId);

  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/living/${livingId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setIncome(response.data.income);
        setInDate(formatDateString(response.data.inDate));
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(storedToken);
    const formData = {
      title,
      inCome: income,
      inDate: inDate,
      outCome: outcome,
    };
    axios
      .put("http://localhost:3000/living/" + livingId, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setIncome("");
        setOutcome("");
        setInDate("");
        setTitle("");
        console.log(response);

        navigate("/living");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="inputs-container">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Edit an existing expense</h1>
          <label>Title</label>
          <input
            className="inputs"
            type="text"
            placeholder="enter the title"
            value={title}
            required={true}
            onChange={(id) => {
              setTitle(id.target.value);
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
            onChange={(id) => {
              setIncome(id.target.value);
            }}
          />
        </div>
        <div>
          <label>Outcome</label>
          <input
            className="inputs"
            type="number"
            value={outcome}
            onChange={(id) => {
              setOutcome(id.target.value);
            }}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            className="inputs"
            type="date"
            value={inDate}
            onChange={(id) => {
              setInDate(id.target.value);
            }}
          />
        </div>
        <div>
          <br></br>
          <button type="submit" className="addBtn">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditLiving;
