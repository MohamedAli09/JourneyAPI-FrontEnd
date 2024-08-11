import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ components/Layout/Layout";
import Home from "./ components/Home/Home";
import Signup from "./ components/Signup/Signup";
import Login from "./ components/Login/Login";
import Card from "./Card/Card";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/tours/:id" element={<Card />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
