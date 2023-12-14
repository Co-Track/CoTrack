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
        <div class="gap-5 d-flex flex-wrap justify-content-lg-start gap-5">
          {emergency &&
            emergency.map((item, i) => {
              const date = new Date(item.inDate);
              const dateFormatted = date.toDateString();

              return (
                <div
                  className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6"
                  key={i}
                >
                  {" "}
                  <div className="d-flex flex-row justify-between items-center mb-4 ml-auto">
                    <div className="em-container">
                      <h2>{item.title}</h2>
                      <p>{item.income}</p>
                      <p>{dateFormatted}</p>
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
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Emergency;
