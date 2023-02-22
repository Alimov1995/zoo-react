import "./Animals.scss";
import pandaImg from "../Images/panda.png";
import eagleImg from "../Images/eagle.png";
import gorillaImg from "../Images/gorilla.png";
import aligatoraImg from "../Images/aligator.png";
import elephaImg from "../Images/elepha.png";
import lemoursImg from "../Images/lemours.png";

const Animals = () => {
  return (
    <section className="animals">
      <div className="container">
        <div className="animals__element">
          <h4 className="animals__caption">Look at this beautiful animals</h4>
          <div className="animals__card">
            <div className="animals__box">
              <img src={pandaImg} alt="panda" width="76" height="73" />
              <p className="animals__name">Pandas</p>
            </div>
            <div className="animals__box">
              <img src={gorillaImg} alt="gorilla" width="76" height="73" />
              <p className="animals__name">Gorillas</p>
            </div>
            <div className="animals__box">
              <img src={eagleImg} alt="eagle" width="76" height="73" />
              <p className="animals__name">Eagles</p>
            </div>
            <div className="animals__box">
              <img src={aligatoraImg} alt="aligator" width="76" height="73" />
              <p className="animals__name">Aligators</p>
            </div>
            <div className="animals__box animals__box--active">
              <img src={elephaImg} alt="Elephant" width="76" height="73" />
              <p className="animals__name">elephants</p>
            </div>
            <div className="animals__box animals__box--active">
              <img src={lemoursImg} alt="Lemurs" width="76" height="73" />
              <p className="animals__name">LEMURS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Animals;
