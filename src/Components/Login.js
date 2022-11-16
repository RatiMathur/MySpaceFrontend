import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { customPOST } from "../utilities";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    const request = {
      userName: userName,
      password: password,
    };
    customPOST("auth/login", request)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        window.alert("Username or Password is incorrect");
      });
  }
  return <div>Login</div>;
}
