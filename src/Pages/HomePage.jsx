import { Link } from "react-router-dom";
import calc from "../assets/CoTrack1.jpeg";

const HomePage = () => {
  return (
    <div className="home-title">
      <br></br>
      <h1 className="p-name"> Empowering Family Finances </h1>
      <br></br>
      <Link to="/Signup">
        <button className="view"> Start your free trial</button>{" "}
      </Link>
      <br></br>
      <br></br>
      <p>
        People highly appreciate effective management of family expenditures,
        covering various aspects such as daily living, personal needs, and
        unforeseen emergencies.{" "}
      </p>
      <br></br>
      <p>
        CoTrack, harnessing advanced technology, simplifies and optimizes the
        tracking and handling of these crucial financial components, empowering
        individuals and families to make the most of their time and resources.
      </p>
      <br></br>
      <p>
        Traditionally, tools designed for personal finance have often lacked
        comprehensive solutions for overseeing diverse family expenses,
        resulting in unnecessary intricacies and financial strain.{" "}
      </p>
      <br></br>
      <p>
        {" "}
        At CoTrack, our dedication lies in fostering a lifestyle where managing
        family finances is hassle-free, allowing our users to concentrate on
        their priorities without the burden of financial worries.
      </p>
      <div class="calc-container">
        <div class="calc">
          <img src={calc} />
        </div>
        <div class="text-content">
          <h3 className="h3">Nothing is more precious than time</h3>
          <div className="page-style">
            <p>
              Nobody wants to waste time and it’s frustrating to do things that
              machines can do better. Expense filing is exactly that:
              Time-consuming and nerve-wracking. About time to change this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
