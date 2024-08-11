// import React from 'react';
import axios from "axios";
import { useState } from "react";
export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("ConfirmPassword").value;
    console.log(name, email, password, passwordConfirm);

    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    if (!name || !email || !password || !passwordConfirm) {
      alert("Please fill all fields");
      return;
    }
    setIsLoading(true);
    await axios
      .post(
        "https://journey-api-kh7i-git-main-mohammed-alis-projects-a5f5bd46.vercel.app/api/v1/users/signup",
        {
          name,
          email,
          password,
          passwordConfirm,
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
        <h2 className="heading-secondary ma-bt-lg">Create your account!</h2>
        <form className="form form--login">
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Your Name
            </label>
            <input
              id="name"
              className="form__input"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
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

          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Confirm Password
            </label>
            <input
              id="ConfirmPassword"
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group">
            <button
              className="btn btn--green"
              type="submit"
              onClick={handleSubmit}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
