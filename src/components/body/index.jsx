import mainIMG from "../../assets/slider1.png";
import "./body.modular.css";

export function Body(params) {
  return (
    <div id="Home" className="image-container">
 <div id="carouselExampleDark" className="carousel carousel-light slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item" data-bs-interval="10000">
      <img src={mainIMG} className="mainImg d-block w-100" alt="..." />
      <div className="mainn carousel-caption d-block ">
        <h1 className="head text-light display-2 fw-medium">ACHIEVE YOUR</h1>
        <p className="head _heading_bzz6s_3 text-danger display-2  fw-medium">
          "BUSINESS GOALS"
        </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={mainIMG} className="mainImg d-block w-100" alt="..." />
      <div className="mainn carousel-caption d-block ">
        <h1 className="head text-light display-2 fw-medium">ACHIEVE YOUR</h1>
        <p className="head _heading_bzz6s_3 text-danger display-2 fw-medium">
          "BUSINESS Dreems"
        </p>
      </div>
    </div>
    <div className="carousel-item active">
      <img src={mainIMG} className="mainImg d-block w-100" alt="..." />
      <div className="mainn carousel-caption d-block ">
        <h1 className="head text-light display-2 fw-medium">ACHIEVE YOUR</h1>
        <p className="head _heading_bzz6s_3 text-danger  display-2 fw-medium">
          "BUSINESS Success"
        </p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>;
      <button className="overlay-btn">
        <span>Have a Project?</span>
        <br />
        <span className="gray">We can help</span>
      </button>
    </div>
  );
}