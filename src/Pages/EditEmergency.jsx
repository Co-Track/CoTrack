import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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

function EditEmergency() {
  const [income, setIncome] = useState("");
  const [outcome, setOutcome] = useState("");
  const [inDate, setInDate] = useState("");
  const [title, setTitle] = useState("");

  const { emergencyId } = useParams();
  console.log(emergencyId);

  const navigate = useNavigate();
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/emergency/${emergencyId}`, {
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
      income: income,
      inDate: inDate,
      outcome: outcome,
    };

    axios
      .put("http://localhost:3000/emergency/" + emergencyId, formData, {
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

        navigate("/emergency");
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
          <button type="submit" className="addBtn">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmergency;
