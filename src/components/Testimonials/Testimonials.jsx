import "./Testimonials.scss";

import adam1 from "../Images/adam1.png";
import adam2 from "../Images/adam2.png";
import adam3 from "../Images/adam3.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__element">
          <h4 className="testimonials__caption">Testimonials</h4>

          <button className="testimonials__btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_223_130)">
                <path
                  d="M4 21V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H8L4 21Z"
                  stroke="#19707D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 9H16"
                  stroke="#19707D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 13H14"
                  stroke="#19707D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_223_130">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Leave feedback
          </button>
        </div>
        <div className="testimonials__card">
          <div className="testimonials__box box">
            <span className="box__data">20 Decepmer 2020</span>
            <p className="box__parag">
              Awesome place to observe my favourite aligators at Florida, the
              quality of the video is great.
            </p>
          </div>
          <div className="testimonials__people people testimonials__people--active">
            <img src={adam1} alt="" width="68" height="68" />
            <p className="people__name">Adam, Spain</p>
          </div>

          {/* <!-- 2-box --> */}
          <div className="testimonials__box box">
            <span className="box__data">20 Decepmer 2020</span>
            <p className="box__parag">
              Awesome place to observe my favourite aligators at Florida, the
              quality of the video is great.
            </p>
          </div>
          <div className="testimonials__people people testimonials__people--active">
            <img src={adam2} alt="" width="68" height="68" />
            <p className="people__name">Adam, Spain</p>
          </div>
          {/* <!-- 3-box --> */}
          <div className="testimonials__box box">
            <span className="box__data">20 Decepmer 2020</span>
            <p className="box__parag">
              Awesome place to observe my favourite aligators at Florida, the
              quality of the video is great.
            </p>
          </div>
          <div className="testimonials__people testimonials__people--active people">
            <img src={adam3} alt="" width="68" height="68" />
            <p className="people__name">Adam, Spain</p>
          </div>
        </div>
        <div className="testimonials__designers">
          <div className="testimonials__people people">
            <img src={adam1} alt="" width="68" height="68" />
            <p className="people__name">Adam, Spain</p>
          </div>
          <div className="testimonials__people people">
            <img src={adam2} alt="" width="68" height="68" />
            <p className="people__name">Adam, Spain</p>
          </div>
          <div className="testimonials__people people">
            <img src={adam3} alt="" width="68" height="68" />
            <p className="people__name">Adam, Spain</p>
          </div>
        </div>
        <button className="testimonials__btn testimonials__btn--active">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_223_130)">
              <path
                d="M4 21V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H8L4 21Z"
                stroke="#19707D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 9H16"
                stroke="#19707D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 13H14"
                stroke="#19707D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_223_130">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Leave feedback
        </button>
      </div>
    </section>
  );
};
export default Testimonials;
