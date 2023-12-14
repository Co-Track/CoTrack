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
      <div className="flex flex-col items-center p-4 font-bold">
        <h1 className="text-2xl mb-4">Personal expenses</h1>
        <div className="mb-4">
          <br></br>
          <Link to={`/addPersonal`}>
            <button className="add" >
              Add new expense
            </button>
          </Link>
        </div>
        <div className="mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personal &&
              personal.map((item, i) => {
                const date = new Date(item.inDate);
                const dateFormatted = date.toDateString();

                return (
                  <div
                    className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6"
                    key={i}
                  >
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex-container">
                          <h1 className="text-gray-700">
                            {item.title}
                          </h1>
                          <h3>{item.income}</h3>
                          <h6>{dateFormatted}</h6>
                          <button
                           className="btn"
                            type="submit"
                            onClick={() => handleDelete(item._id)}
                          >Delete</button>
                          <br></br>
                          <Link to={`/editPersonal/${item._id}`}>
                            <button  className="btn" type="submit">{""}Edit{""}</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Personal;
