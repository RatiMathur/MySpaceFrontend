import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return <div>Dashboard</div>;
}
