import "./Pets.scss";
import pandaImg from "../Images/panda.png";
import watchImg from "../Images/watch.png";
import eagleImg from "../Images/eagle.png";
import gorillaImg from "../Images/gorilla.png";
import aligatoraImg from "../Images/aligator.png";
import elephaImg from "../Images/elepha.png";
import lemoursImg from "../Images/lemours.png";
const Pets = () => {
  return (
    <section className="pets">
      <div className="container">
        <div className="pets__element">
          <h4 className="pets__caption">Pets in zoo</h4>
          <button className="pets__btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="pets__icon"
                d="M19.513 12.5834L12.013 20.0114L4.513 12.5834C4.0183 12.102 3.62864 11.5234 3.36854 10.884C3.10845 10.2447 2.98356 9.55836 3.00173 8.86834C3.01991 8.17832 3.18076 7.49954 3.47415 6.87474C3.76755 6.24994 4.18713 5.69266 4.70648 5.23799C5.22583 4.78331 5.8337 4.4411 6.49181 4.23289C7.14991 4.02468 7.844 3.95499 8.53036 4.02821C9.21673 4.10143 9.8805 4.31596 10.4799 4.65831C11.0792 5.00066 11.6012 5.46341 12.013 6.01741C12.4265 5.46743 12.9491 5.00873 13.5481 4.67001C14.1471 4.3313 14.8095 4.11986 15.4939 4.04893C16.1784 3.978 16.8701 4.04911 17.5258 4.2578C18.1815 4.46649 18.787 4.80828 19.3045 5.26177C19.8221 5.71526 20.2404 6.27069 20.5334 6.8933C20.8264 7.51591 20.9877 8.19229 21.0073 8.88012C21.0269 9.56794 20.9043 10.2524 20.6471 10.8907C20.39 11.5289 20.0039 12.1072 19.513 12.5894"
                stroke="#19707D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Choose your Favorite
          </button>
        </div>
        <div className="pets__card card">
          {/* <!-- 1-card --> */}
          <div className="card__box">
            <div className="element__icon element__icon--active">
              <img src="./img/watch.png" alt="watch" width="23" height="23" />
            </div>
            <img
              className="card__img"
              src={pandaImg}
              alt="panda"
              width="163"
              height="157"
            />

            <hr className="card__line" />
            <div className="card__element element">
              <div className="element__text">
                <h5 className="element__title">Pandas</h5>
                <p className="element__parag">
                  Shenshuping Gengda Panda Center
                </p>
              </div>
              <div className="element__icon">
                <img src={watchImg} alt="watch" width="23" height="23" />
              </div>
            </div>
          </div>
          {/* <!-- 2-card --> */}
          <div className="card__box card__box--onactive">
            <div className="element__icon element__icon--active">
              <img src={watchImg} alt="watch" width="23" height="23" />
            </div>
            <img
              className="card__img"
              src={eagleImg}
              alt="eagle"
              width="163"
              height="157"
            />
            <hr className="card__line" />
            <div className="card__element element">
              <div className="element__text">
                <h5 className="element__title">Eagles</h5>
                <p className="element__parag">Catalina Island</p>
              </div>
              <div className="element__icon">
                <img src={watchImg} alt="watch" width="23" height="23" />
              </div>
            </div>
          </div>
          {/* <!-- 3-card --> */}
          <div className="card__box card__box--active card__box--gorilla">
            <div className="element__icon element__icon--active">
              <img src={watchImg} alt="watch" width="23" height="23" />
            </div>
            <img
              className="card__img"
              src={gorillaImg}
              alt="gorilla"
              width="163"
              height="157"
            />
            <hr className="card__line" />
            <div className="card__element element">
              <div className="element__text">
                <h5 className="element__title">Gorillas</h5>
                <p className="element__parag">GRACE gorillas</p>
              </div>
              <div className="element__icon">
                <img src={watchImg} alt="watch" width="23" height="23" />
              </div>
            </div>
          </div>
          {/* <!-- 4-card --> */}
          <div className="card__box card__box--onactive">
            <div className="element__icon element__icon--active">
              <img src={watchImg} alt="watch" width="23" height="23" />
            </div>
            <img
              className="card__img"
              src={aligatoraImg}
              alt="aligator"
              width="163"
              height="157"
            />
            <hr className="card__line" />
            <div className="card__element element">
              <div className="element__text">
                <h5 className="element__title">Aligators</h5>
                <p className="element__parag">
                  St. Augustine's Alligator Farm Zoological Park
                </p>
              </div>
              <div className="element__icon">
                <img src={watchImg} alt="watch" width="23" height="23" />
              </div>
            </div>
          </div>
          {/* <!-- 5-card --> */}
          <div className="card__box card__box--onactive">
            <div className="element__icon element__icon--active">
              <img src={watchImg} alt="watch" width="23" height="23" />
            </div>
            <img
              className="card__img"
              src={elephaImg}
              alt="elepha"
              width="163"
              height="157"
            />
            <hr className="card__line" />
            <div className="card__element element">
              <div className="element__text">
                <h5 className="element__title">Elephants</h5>
                <p className="element__parag">Tembe Elephant Park</p>
              </div>
              <div className="element__icon">
                <img src={watchImg} alt="watch" width="23" height="23" />
              </div>
            </div>
          </div>
          {/* <!-- 6-card --> */}
          <div className="card__box card__box--active">
            <div className="element__icon element__icon--active">
              <img src={watchImg} alt="watch" width="23" height="23" />
            </div>
            <img
              className="card__img"
              src={lemoursImg}
              alt="lemours"
              width="163"
              height="157"
            />
            <hr className="card__line" />
            <div className="card__element element">
              <div className="element__text">
                <h5 className="element__title">Lemurs</h5>
                <p className="element__parag">Madagascar</p>
              </div>
              <div className="element__icon">
                <img src={watchImg} alt="watch" width="23" height="23" />
              </div>
            </div>
          </div>
        </div>
        <button className="pets__btn pets__btn--active">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="pets__icon"
              d="M19.513 12.5834L12.013 20.0114L4.513 12.5834C4.0183 12.102 3.62864 11.5234 3.36854 10.884C3.10845 10.2447 2.98356 9.55836 3.00173 8.86834C3.01991 8.17832 3.18076 7.49954 3.47415 6.87474C3.76755 6.24994 4.18713 5.69266 4.70648 5.23799C5.22583 4.78331 5.8337 4.4411 6.49181 4.23289C7.14991 4.02468 7.844 3.95499 8.53036 4.02821C9.21673 4.10143 9.8805 4.31596 10.4799 4.65831C11.0792 5.00066 11.6012 5.46341 12.013 6.01741C12.4265 5.46743 12.9491 5.00873 13.5481 4.67001C14.1471 4.3313 14.8095 4.11986 15.4939 4.04893C16.1784 3.978 16.8701 4.04911 17.5258 4.2578C18.1815 4.46649 18.787 4.80828 19.3045 5.26177C19.8221 5.71526 20.2404 6.27069 20.5334 6.8933C20.8264 7.51591 20.9877 8.19229 21.0073 8.88012C21.0269 9.56794 20.9043 10.2524 20.6471 10.8907C20.39 11.5289 20.0039 12.1072 19.513 12.5894"
              stroke="#19707D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Choose your Favorite
        </button>
      </div>
    </section>
  );
};
export default Pets
