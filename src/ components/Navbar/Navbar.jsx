//import link
import { Link } from "react-router-dom";
export default function Navbar() {
  //get token from local storage
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("NatoursName");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("NatoursName");
    window.location.href = "/login";
  }
  return (
    <>
      {token ? (
        <header className="header">
          <nav className="nav nav--tours">
            {/* <a href="#" className="nav__el">
            All tours
          </a> */}
            <Link to="/" className="nav__el">
              All tours
            </Link>
            {/* <form className="nav__search">
            <button className="nav__search-btn">
              <svg>
                <use xlinkHref="img/icons.svg#icon-search"></use>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="nav__search-input"
            />
          </form> */}
          </nav>
          <div className="header__logo">
            <img src="img/logo-white.png" alt="Natours logo" />
          </div>
          <nav className="nav nav--user">
            <button onClick={logout} className="nav__el">
              Log out
            </button>
            <a href="#" className="nav__el">
              <img
                src="https://t4.ftcdn.net/jpg/07/68/25/95/360_F_768259595_WKWaLyS1XyOqoKxVmQGJY6ZlnIkGmhxB.jpg"
                alt="User photo"
                className="nav__user-img"
              />
              <span>{name}</span>
            </a>
          </nav>
        </header>
      ) : (
        <header className="header">
          <nav className="nav nav--tours">
            {/* <a href="#" className="nav__el">
            All tours
          </a> */}
            <Link to="/" className="nav__el">
              All tours
            </Link>
            {/* <form className="nav__search">
            <button className="nav__search-btn">
              <svg>
                <use xlinkHref="img/icons.svg#icon-search"></use>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="nav__search-input"
            />
          </form> */}
          </nav>
          <div className="header__logo">
            <img src="img/logo-white.png" alt="Natours logo" />
          </div>
          <nav className="nav nav--user">
            {/* <a href="#" className="nav__el">
            My bookings
          </a>
          <a href="#" className="nav__el">
            <img
              src="img/user.jpg"
              alt="User photo"
              className="nav__user-img"
            />
            <span>Jonas</span>
          </a> */}
            {/* log out here  */}
            <Link to="/login" className="nav__el">
              Log in
            </Link>

            <Link to="/signup" className="nav__el">
              Sign up
            </Link>
          </nav>
        </header>
      )}
    </>
  );
}
