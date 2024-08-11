// import React from 'react';
import axios from "axios";
import { useState } from "react";
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    setIsLoading(true);
    await axios
      .post(
        "https://journey-api-kh7i-git-main-mohammed-alis-projects-a5f5bd46.vercel.app/api/v1/users/login",
        {
          email,
          password,
        }
      )
      .then((res) => {
        console.log(res.data);
        //store token and name in local storage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("NatoursName", res.data.data.user.name);
        window.location.href = "/";
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              className="form__input"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group">
            <button
              onClick={handleSubmit}
              className="btn btn--green"
              type="submit"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
