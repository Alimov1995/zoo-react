import "./Wrapper.scss";

import wrapperImg from "../Images/wrapper-panda.png";

const Wrapper = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="wrapper__element">
          <div className="wrapper__left left">
            <h1 className="left__title">
              Watch your favorite <span> animals online</span>
            </h1>
            <p className="left__text">
              Observe different animals from around the world online in live
              time. Help vulunteers to take a good care of animals, donate to
              your favorite ones.
            </p>
            <div className="left__submit">
              <button className="left__btn">Watch now</button>
              <button className="left__btn left__btn--active">Donate</button>
            </div>
          </div>
          <div className="wrapper__right">
            <img
              className="wrapper__img"
              src={wrapperImg}
              alt=""
              width="560"
              height="464"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Wrapper;
