import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <div className="p-2">
      <div className="container-sm header">
        <h1>STRONG</h1>
        <Link to="/">
          <button className="btn btn-primary">home</button>
        </Link>
      </div>
    </div>
  );
}
