import "./Work.scss";

import binocul from "../Images/binoculars.png";
import dogPaw from "../Images/dog-paw.png";
import trust from "../Images/trust.png";
const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <h4 className="work__title">How it works</h4>
        <div className="work__cards">
          <div className="work__icon">
            <div className="work__circle">
              <img src={binocul} alt="binoculars" width="50" height="50" />
            </div>
            <p className="work__text">
              Keep an eye on your favourite animals online
            </p>
          </div>

          <div className="work__icon">
            <div className="work__circle">
              <img src={dogPaw} alt="dog-paw" width="50" height="50" />
            </div>
            <p className="work__text">Become a part of the communtity</p>
          </div>

          <div className="work__icon">
            <div className="work__circle">
              <img src={trust} alt="trust" width="50" height="50" />
            </div>
            <p className="work__text">Support animals with the donations</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Work;
