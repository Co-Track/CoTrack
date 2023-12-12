import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Emergency() {
  const [Emergency, setEmergency] = useState([]);
  const getEmergency = () => {
    const token = localStorage.getItem("authToken");

    axios
      .get(
        "http://localhost:3000/emergency",

        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setEmergency(response.data);
        console.log(response);
        // eslint-disable-next-line no-undef
        navigate("/addEmergency");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");

    axios
      .delete("http://localhost:3000/emergency/" + id, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => {
        const filteredEmergency = Emergency.filter(
          (element) => element._id !== id
        );
        setEmergency(filteredEmergency);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getEmergency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="Emergency">
        <h1>Emergency expenses</h1>
        <Link to={`/addEmergency`}>
          <button> Add new expense</button>
        </Link>

        {Emergency &&
          Emergency.map((item, i) => {
            const date = new Date(item.inDate);
            const dateFormatted = date.toDateString();

            return (
              <div key={i}>
                <h2>{item.title}</h2>
                <p>{item.income}</p>
                <p>{dateFormatted}</p>
                <button className="btn">Edit</button>
                <button className="btn" onClick={() => handleDelete(item._id)}>
                  {" "}
                  Delete{" "}
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Emergency;
