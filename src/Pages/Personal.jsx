import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Personal() {
  const [personal, setPersonal] = useState([]);
  const navigate = useNavigate();
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
  useEffect(() => {
    getPersonal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(personal);
  return (
    <>
      <div className="personal">
        <h1>Personal expenses</h1>
        {personal &&
          personal.map((item, i) => {
            
            const date = new Date(item.inDate)
            const dateFormatted = date.toLocaleTimeString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit'});

            return (
            <div key={i}>
              <h2>{item.title}</h2>
              <p>{item.income}</p>
              <p>{dateFormatted}</p>
            </div>
          )})}
      </div>
    </>
  );
}

export default Personal;