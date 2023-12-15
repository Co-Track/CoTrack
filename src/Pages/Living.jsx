import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Living() {
  const [living, setLiving] = useState([]);

  const getLiving = () => {
    const token = localStorage.getItem("authToken");

    axios
      .get(
        import.meta.env.VITE_API_URL + "/living",

        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setLiving(response.data);
        console.log(response);
        // eslint-disable-next-line no-undef
        navigate("/addLiving");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("authToken");

    axios
      .delete(import.meta.env.VITE_API_URL + "/living/" + id, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => {
        const filteredLiving = living.filter((element) => element._id !== id);
        setLiving(filteredLiving);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getLiving();
  }, []);
  console.log(living);

  return (
    <div>
      <div className="living">
        <h1>Living expenses</h1>
        <Link to={`/addLiving`}>
          <button className="add"> Add new expense</button>
        </Link>
        <div class="gap-5 d-flex flex-wrap justify-content- gap-5">
          {living &&
            living.map((item, i) => {
              const date = new Date(item.inDate);
              const dateFormatted = date.toDateString();

              return (
                <div
                  className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6"
                  key={i}
                >
                  <div className="d-flex flex-row justify-between items-center mb-4 ml-auto">
                    <div className="fl-container">
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
                        <Link to={`/editLiving/${item._id}`}>
                          <button type="submit" className="btn">
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Living;
