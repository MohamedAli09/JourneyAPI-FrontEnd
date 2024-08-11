import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Card() {
  // Extract the ID from the URL
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://journey-api-kh7i-git-main-mohammed-alis-projects-a5f5bd46.vercel.app/api/v1/tours/${id}`
      )
      .then((res) => {
        setTour(res.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);
  console.log(tour);

  return (
    <>
      {/* <section class="section-header">
        <div class="heading-box">
          <h1 class="heading-primary">
            <span>{tour.name}</span>
          </h1>
          <div class="heading-box__group">
            <div class="heading-box__detail">
              <svg class="heading-box__icon">
                <use xlink:href="img/icons.svg#icon-clock"></use>
              </svg>
              <span class="heading-box__text">10 days</span>
            </div>
            <div class="heading-box__detail">
              <svg class="heading-box__icon">
                <use xlink:href="img/icons.svg#icon-map-pin"></use>
              </svg>
              <span class="heading-box__text">Las Vegas, USA</span>
            </div>
          </div>
        </div>
      </section> */}

      {tour && (
        <>
          <section className="section-header">
            <div className="heading-box">
              <h1 className="heading-primary">
                <span>{tour.name}</span>
              </h1>
              <div className="heading-box__group">
                <div className="heading-box__detail">
                  <svg className="heading-box__icon">
                    <use xlinkHref="img/icons.svg#icon-clock"></use>
                  </svg>
                  <span className="heading-box__text">
                    {tour.duration} days
                  </span>
                </div>
                <div className="heading-box__detail">
                  <svg className="heading-box__icon">
                    <use xlinkHref="img/icons.svg#icon-map-pin"></use>
                  </svg>
                  <span className="heading-box__text">
                    {tour.startLocation.description}
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="section-description">
            <div className="overview-box">
              <div>
                <div className="overview-box__group">
                  <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                  <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                      <use xlinkHref="img/icons.svg#icon-calendar"></use>
                    </svg>
                    <span className="overview-box__label">Next date</span>
                    <span className="overview-box__text">August 2021</span>
                  </div>
                  <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                      <use xlinkHref="img/icons.svg#icon-trending-up"></use>
                    </svg>
                    <span className="overview-box__label">Difficulty</span>
                    <span className="overview-box__text">Medium</span>
                  </div>
                  <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                      <use xlinkHref="img/icons.svg#icon-user"></use>
                    </svg>
                    <span className="overview-box__label">Participants</span>
                    <span className="overview-box__text">10 people</span>
                  </div>
                  <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                      <use xlinkHref="img/icons.svg#icon-star"></use>
                    </svg>
                    <span className="overview-box__label">Rating</span>
                    <span className="overview-box__text">4.9 / 5</span>
                  </div>
                </div>

                <div className="overview-box__group">
                  <h2 className="heading-secondary ma-bt-lg">
                    Your tour guides
                  </h2>

                  <div className="overview-box__detail">
                    <img
                      src={`/img/users/${tour.guides[1].photo}`}
                      alt="Lead guide"
                      className="overview-box__img"
                    />
                    <span className="overview-box__label">Lead guide</span>
                    <span className="overview-box__text">Steven Miller</span>
                  </div>
                  <div className="overview-box__detail">
                    <img
                      src="/img/users/user-19.jpg"
                      alt="Lead guide"
                      className="overview-box__img"
                    />

                    <span className="overview-box__label">Tour guide</span>
                    <span className="overview-box__text">Lisa Brown</span>
                  </div>
                  <div className="overview-box__detail">
                    <img
                      src={`/img/users/${tour.guides[1].photo}`}
                      alt="Intern"
                      className="overview-box__img"
                    />
                    <span className="overview-box__label">Intern</span>
                    <span className="overview-box__text">Max Smith</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="description-box">
              <h2 className="heading-secondary ma-bt-lg">
                About the park camper tour
              </h2>
              <p className="description__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="description__text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum!
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
