import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="p-2">
      <div className="container ">
        <Link to="/Comb1">
          <button className="btn btn-primary">comb1</button>
        </Link>

        <Link to="/Comb2">
          <button className="btn btn-primary">comb2</button>
        </Link>

        <Link to="/Comb3">
          <button className="btn btn-primary">comb3</button>
        </Link>
      </div>
      <div className="container ">
        <Link to="/Comb4">
          <button className="btn btn-primary">comb4</button>
        </Link>

        <Link to="/Comb5">
          <button className="btn btn-primary">comb5</button>
        </Link>

        <Link to="/Comb6">
          <button className="btn btn-primary">comb6</button>
        </Link>
      </div>
    </div>
  );
}
