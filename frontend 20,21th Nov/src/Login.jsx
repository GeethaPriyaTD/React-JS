import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/login", form);

     
      localStorage.setItem("token", res.data.token);

     
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <style>{`
        .login-container {
          width: 350px;
          margin: 80px auto;
          padding: 25px;
          background: #f4f6f9;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .login-container h2 {
          margin-bottom: 20px;
          color: #333;
        }

        .login-container input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #583b8cff;
          border-radius: 8px;
          font-size: 14px;
        }

        .login-container button {
          width: 100%;
          padding: 10px;
          background: #614cafff;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-container button:hover {
          background: #a0454cff;
        }

        .error-msg {
          color: red;
          margin-bottom: 10px;
          font-size: 14px;
        }
      `}</style>

      <div className="login-container">
        <h2>Login</h2>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="mail"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;