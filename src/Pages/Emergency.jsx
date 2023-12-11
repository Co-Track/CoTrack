import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Emergency() {
  const [Emergency, setEmergency] = useState([]);
  const navigate = useNavigate();
  const getEmergency = () => {
    const token = localStorage.getItem("authToken");

    axios
      .get(
        "http://localhost:3000/personal",

        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setEmergency(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getEmergency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(Emergency);
  return (
    <>
      <div className="Emergency">
        <h1>Emergency expenses</h1>
        {Emergency &&
          Emergency.map((item, i) => {
            const date = new Date(item.inDate);
            const dateFormatted = date.toLocaleTimeString(undefined, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });

            return (
              <div key={i}>
                <h2>{item.title}</h2>
                <p>{item.income}</p>
                <p>{dateFormatted}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Emergency;
