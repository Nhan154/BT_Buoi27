import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 return (
    <div
      style={{
        width: "1500px",
        height: "100vh",
        background: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",           
        justifyContent: "center",       
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
        <li className="w-100" style={{ marginBottom: "20px"}}>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>Home</a>
        </li>
        <li className="w-100">
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>Shop</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
