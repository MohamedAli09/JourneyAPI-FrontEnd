import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllCards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://journey-api-kh7i-git-main-mohammed-alis-projects-a5f5bd46.vercel.app/api/v1/tours"
      )
      .then((res) => {
        setData(res.data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const renderPlaceholder = () => (
    <div className="card" key={Math.random()}>
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <div className="placeholder-img" />
        </div>
        <h3 className="heading-tertirary">
          <span>Loading...</span>
        </h3>
      </div>
      <div className="card__details">
        <h4 className="card__sub-heading">Loading...</h4>
        <p className="card__text">Please wait while data is being fetched.</p>
      </div>
    </div>
  );

  return (
    <main className="main">
      <div className="card-container">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map(renderPlaceholder) // Render placeholders while loading
          : data.map((tour) => (
              <div key={tour.id} className="card">
                <div className="card__header">
                  <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img
                      src={`img/tours/${tour.imageCover}`}
                      alt={tour.name}
                      className="card__picture-img"
                    />
                  </div>
                  <h3 className="heading-tertirary">
                    <span>{tour.name}</span>
                  </h3>
                </div>
                <div className="card__details">
                  <h4 className="card__sub-heading">
                    {tour.difficulty} {tour.duration}-day tour
                  </h4>
                  <p className="card__text">{tour.summary}</p>
                </div>
                <div className="card__footer">
                  <p>
                    <span className="card__footer-value">{tour.price}</span>
                    <span className="card__footer-text">per person</span>
                  </p>
                  <p className="card__ratings">
                    <span className="card__footer-value">4.9</span>
                    <span className="card__footer-text">rating (21)</span>
                  </p>
                  {/* <a href="#" className="btn btn--green btn--small"> Details </a> */}
                  <Link
                    to={`/tours/${tour.id}`}
                    className="btn btn--green btn--small"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
}
