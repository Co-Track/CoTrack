import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Personal() {
  const [personal, setPersonal] = useState([]);

  const getPersonal = () => {
    const token = localStorage.getItem("authToken");
    axios
      .get(
        import.meta.env.VITE_API_URL + "/personal",

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
      .delete(import.meta.env.VITE_API_URL + "/personal/" + id, {
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
      <div className="personal">
        <h1>Personal expenses</h1>
        <Link to={`/addPersonal`}>
          <button className="add">Add new expense</button>
        </Link>
        <div class="gap-5 d-flex flex-wrap justify-content-lg-start gap-5">
          {personal &&
            personal.map((item, i) => {
              const date = new Date(item.inDate);
              const dateFormatted = date.toDateString();

              return (
                <div
                  className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6"
                  key={i}
                >
                  <div className="d-flex flex-row justify-between items-center mb-4 ml-auto">
                    <div className="flex-container">
                      <h2 className="text-gray-700">{item.title}</h2>
                      <p>{item.income}</p>
                      <p>{dateFormatted}</p>
                      <button
                        className="btn"
                        type="submit"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                      <br></br>
                      <Link to={`/editPersonal/${item._id}`}>
                        <button className="btn" type="submit">
                          {""}Edit{""}
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

export default Personal;
