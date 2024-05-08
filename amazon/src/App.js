import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="a_header_top"></div>
        <div className="a_header_bottom"></div>
      </header>
      <div className="a_main position-absolute">
        <div className="a_main1 a_main_top">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/slider/slider1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider3.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider4.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider5.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider6.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider7.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/slider/slider8.jpg" className="d-block w-100" alt="..." />
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
          <div className="a_main_bottom_1 row m-0 mb-3">
            <div className="col">A</div>
            <div className="col">B</div>
            <div className="col">C</div>
            <div className="col">D</div>
          </div>
          <div className="a_main_bottom_2 row m-0 mb-3">
            <div className="col-6">A</div>
            <div className="col-3">B</div>
            <div className="col-3">C</div>
          </div>
          <div className="a_main_bottom_3 p-3">
            <div className="">
              <h3 className="float-start">Today's Deals</h3><button className="btn btn-link float-start">see all deals</button>
            </div>
            <div id="carouselExample1" className="carousel slide">
              <div className="carousel-inner text-center">
                <div className="carousel-item active">
                  <div className="imgCont row">
                    <div className="col">1</div>
                    <div className="col">2</div>
                    <div className="col">3</div>
                    <div className="col">4</div>
                    <div className="col">5</div>
                    <div className="col">6</div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="imgCont row">
                    <div className="col">7</div>
                    <div className="col">8</div>
                    <div className="col">9</div>
                    <div className="col">10</div>
                    <div className="col">11</div>
                    <div className="col">12</div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="imgCont row">
                    <div className="col">13</div>
                    <div className="col">14</div>
                    <div className="col">15</div>
                    <div className="col">16</div>
                    <div className="col">17</div>
                    <div className="col">18</div>
                  </div>
                </div>
              </div>
              <button className="s_cc carousel-control-prev rounded-end" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="s_cc carousel-control-next rounded-start" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
