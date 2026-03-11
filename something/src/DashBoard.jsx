import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4 text-center">
        <h1 className="mb-4 text-primary">
          Welcome to Your Dashboard
        </h1>

        <Link to="/reg" className="btn btn-success">
          Click to Register
        </Link>
        <Link to="/log">click to Login</Link>
      </div>
    </div>
  );
}

export default DashBoard;
