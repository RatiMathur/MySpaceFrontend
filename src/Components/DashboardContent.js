import { Link } from "react-router-dom";

export default function DashboardContent() {
  return (
    <div className="container mt-5">
      <h1
        className="display-1 pb-2"
        style={{ color: "brown", fontWeight: "bolder" }}
      >
        My Space
      </h1>
      <h1
        className="display-3 mt-3"
        style={{ color: "grey", fontWeight: "bold" }}
      >
        This is my first app.
      </h1>
      <Link className="btn btn-primary mt-5 ml-3" to="/dashboard/products">
        Explore Products
      </Link>
    </div>
  );
}
