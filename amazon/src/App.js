import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div>
      <header>
        <div className="a_header_top p-1" data-spy="affix" data-offset-top="197">
          <button className="me-1 btn h-100" style={{'width':'10%'}}>
            <img className="img-fluid" src="./logo1.jpg" alt="" />
          </button>
          <button className="lh-1 text-white me-1 btn h-100 fs-6" style={{'width':'10%'}}>
            Deliver To Swag 
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="fw-bold d-block"><span className="a_city">Puri</span><span className="a_zip">752001</span></span>
          </button>
          <form action="" className="h-form bg-white w-50 h-75 d-inline-block">C</form>
          <button className="me-1 btn h-100" style={{'width':'6%'}}>D</button>
          <button className="me-1 btn h-100" style={{'width':'8%'}}>E</button>
          <button className="me-1 btn h-100" style={{'width':'8%'}}>F</button>
          <button className="me-1 btn h-100" style={{'width':'8%'}}>G</button>
        </div>
        <div className="a_header_bottom"></div>
      </header>
      <div className="a_main position-absolute">
        <div className="a_main1 a_main_top">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/slider/slider1.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider2.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider3.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider4.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider5.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider6.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider7.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider8.jpg" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev h-50" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next h-50" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="ml-1 position-absolute a_main_bottom">
          <div className="a_main_bottom_1 row">
            <div className=""></div>
          </div>

        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
