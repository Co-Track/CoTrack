import { useEffect, useState } from "react";
import axios from "axios";

function Living() {
  const [Living, setLiving] = useState([]);
  
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getLiving();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(Living);
  return (
    <>
      <div className="living">
        <h1>Living expenses</h1>
        {Living &&
          Living.map((item, i) => {
            
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

export default Living;