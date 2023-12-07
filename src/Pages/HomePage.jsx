import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-title">
      <h1 className="p-name">CoTrack</h1>
      <Link to="/MainPage">
        <button className="view"> Start your free trial</button>
      </Link>
    </div>
  );
};
export default HomePage;
