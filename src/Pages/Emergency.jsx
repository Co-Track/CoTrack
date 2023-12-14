import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Emergency() {
  const [emergency, setEmergency] = useState([]);

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
        const filteredEmergency = emergency.filter(
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
  console.log(emergency);

  return (
    <>
      <div className="emergency">
        <h1>Emergency expenses</h1>
        <Link to={`/addEmergency`}>
          <button className="add"> Add new expense</button>
        </Link>

        {emergency &&
          emergency.map((item, i) => {
            const date = new Date(item.inDate);
            const dateFormatted = date.toDateString();

            return (

              <div key={i}>
                              <div className="em-container">

                <h1>{item.title}</h1>
                <h3>{item.income}</h3>
                <h6>{dateFormatted}</h6>
                <button
                  type="submit"
                  className="btn"
                  onClick={() => handleDelete(item._id)}
                >
                  {" "}
                  Delete{" "}
                </button>
                <Link to={`/editEmergency/${item._id}`}>
                  <button type="submit" className="btn">
                    Edit
                  </button>
                </Link>
              </div></div>
            );
          })}
      </div>
    </>
  );
}

export default Emergency;
