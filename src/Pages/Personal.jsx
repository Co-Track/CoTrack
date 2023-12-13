import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Personal() {
  const [personal, setPersonal] = useState([]);

  const getPersonal = () => {
    const token = localStorage.getItem("authToken");
    axios
      .get(
        "http://localhost:3000/personal",

        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setPersonal(response.data);
        console.log(response);
        // eslint-disable-next-line no-undef
        navigate("/addPersonal");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");

    axios
      .delete("http://localhost:3000/personal/" + id, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => {
        const filteredPersonal = personal.filter(
          (element) => element._id !== id
        );
        setPersonal(filteredPersonal);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPersonal();
  }, []);
  console.log(personal);

  return (
    <>
      <div className="cards">
        <h1>Personal expenses</h1>
        <Link to={`/addPersonal`}>
          <button className="add-btn"> Add new expense</button>
        </Link>
        <br></br>
        <div>
          {personal &&
            personal.map((item, i) => {
              const date = new Date(item.inDate);
              const dateFormatted = date.toDateString();

              return (
                <div className="personal" key={i}>
                  <div className="card-shadow">
                    <h2>{item.title}</h2>
                    <br></br>
                    <p>{item.income}</p>
                    <br></br>
                    <p>{dateFormatted}</p>
                    <div className="end">
                    <button
                      type="submit"
                      className="pers-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                    <Link to={`/editPersonal/${item._id}`}>
                      <button type="submit" className="pers-btn">
                        Edit
                      </button>
                    </Link>
                  </div></div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Personal;
