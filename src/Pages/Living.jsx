import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Living() {
  const [living, setLiving] = useState([]);

  const getLiving = () => {
    const token = localStorage.getItem("authToken");

    axios
      .get(
        "http://localhost:3000/living",

        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setLiving(response.data);
        console.log(response);
        navigate("/addLiving");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");

    axios
      .delete("http://localhost:3000/living/" + id, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => {
        const filteredLiving = living.filter(
          (element) => element._id !== id
        );
        setLiving(filteredLiving);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getLiving();
  }, []);
  console.log(living);

  return (
    <>
      <div className="living">
        <h1>Living expenses</h1>
        <Link to={`/addLiving`}>
          <button> Add new expense</button>
        </Link>
        {living &&
          living.map((item, i) => {
            const date = new Date(item.inDate);
            const dateFormatted = date.toDateString();

            return (
              <div key={i}>
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
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Living;
