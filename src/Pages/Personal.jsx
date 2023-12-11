import { useEffect, useState } from "react";
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
      .then(()=>{
       const filteredPersonal=personal.filter((element)=>element._id !==id)
       setPersonal(filteredPersonal)
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
        {personal &&
          personal.map((item, i) => {
            const date = new Date(item.inDate);
            const dateFormatted = date.toDateString()

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

export default Personal;
