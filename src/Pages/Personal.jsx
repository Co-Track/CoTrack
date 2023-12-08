import { useEffect , useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Personal() {
  const [personal, setPersonal] = useState([]);
  const navigate = useNavigate();

 const gitPersonal=()=> {
  axios
  .get("http://localhost:3000")
  .then((Response) => {
    gitPersonal(Response.data);
    console.log(Response);
  })
  .catch((error) => {
    console.log(error);
  });
};
useEffect(() => {
  gitPersonal();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <><div className="personal">
      <h1>Personal expenses</h1>;
    </div>
    <div>
      <input className="input">

      </input>
      <Link to="/AddPersonal">
      <button type="submit">submit</button>

      </Link>
    </div>

    <div>
        <section>

        </section>
      </div></>
  );
  
  }
export default Personal;
  