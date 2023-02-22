import "./Pay.scss";
import donate from "../Images/donate.png";
import bttn from "../Images/Bttn.png";
import vactor from "../Images/vactor.png";
import vector from "../Images/vector.png";
import trust2 from "../Images/trust2.png";
import monkey from "../Images/monkey.png";

const Pay = () => {
  return (
    <section class="pay">
      <div class="container">
        <div class="pay__element">
          <h4 class="pay__caption">Pay and feed</h4>
          <button class="pay__btn">
            <div class="bg">
              <span> Donate to volunteers</span>
            </div>
          </button>
        </div>
        <div class="pay__card">
          {/* <!-- 1-box --> */}
          <div class="pay__box box">
            <div class="box__circle">
              <img src={donate} alt="donate" width="64" height="64" />
            </div>
            <p class="box__text">You donate to your favourite animals</p>
            <img class="box__img" src={bttn} alt="" width="52" height="52" />
          </div>
          <div class="pay__vector">
            <img src={vactor} alt="" width="204" height="52" />
          </div>
          <div class="pay__vector pay__vector--active">
            <img src={vector} alt="" width="17" height="24" />
          </div>
          {/* <!-- 2-box --> */}
          <div class="pay__box box">
            <div class="box__circle">
              <img src={trust2} alt="donate" width="64" height="64" />
            </div>
            <p class="box__text">
              Zoo Keepers feed animals with their favourite food
            </p>
            <img class="box__img" src={bttn} alt="" width="52" height="52" />
          </div>
          <div class="pay__vector">
            <img src={vactor} alt="" width="204" height="52" />
          </div>
          <div class="pay__vector pay__vector--active">
            <img src={vector} alt="" width="17" height="24" />
          </div>
          {/* <!-- 3-box --> */}
          <div class="pay__box box">
            <div class="box__circle">
              <img src={monkey} alt="donate" width="64" height="64" />
            </div>
            <p class="box__text">Animals are healthy and happy</p>
          </div>
          <button class="pay__btn pay__btn--active">
            <div class="bg">
              <span> Donate to volunteers</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Pay;
