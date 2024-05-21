import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faBars } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'

export default class App extends Component {
  //1. properties
  state = {
    'x' : ''
  }
  //2. constructor
  constructor(){
    super()
  }
  //3. Method
  //alway remember to create only fat arrow function
  handleScroll = ()=>{
    console.log('page loaded'+window.scrollY);
    if(window.scrollY >= 60)
      {
        this.setState({x:'position-fixed start-0 top-0'})
          //we will add 'position-fixed start-0 top-0'
      }
      else
      {
        //we will add 'position-fixed start-0 top-0'
        this.setState({x:''})
      }
  }
  componentDidMount(){
    //this method is called when the page/component is rendered
    window.addEventListener('scroll',this.handleScroll)
  }
  render() {
    return (
      <div>
        <header>
          <div className={'a_header_top p-1 w-100 '+this.state.x}>
            <button className="me-1 btn h-100" style={{ 'width': '10%' }}>
              <img className="img-fluid" src="./logo1.jpg" alt="" style={{ 'height': '45px' }} />
            </button>
            <button className="lh-1 text-white me-1 btn h-100 fs-6" style={{ 'width': '10%' }}>
              Deliver To Swag
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="fw-bold d-block"><span className="a_city">Puri</span><span className="a_zip">752001</span></span>
            </button>
            <form action="" className="h-form bg-white w-50 h-75 d-inline-block">C</form>
            <button className="me-1 btn h-100" style={{ 'width': '6%' }}>D</button>
            <button className="me-1 btn h-100" style={{ 'width': '8%' }}>E</button>
            <button className="me-1 btn h-100" style={{ 'width': '8%' }}>F</button>
            <button className="me-1 btn h-100" style={{ 'width': '8%' }}>G</button>
          </div>
          <div className="a_header_bottom">
            <ul className="nav float-start">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon className="fs-5" icon={faBars} />All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Best Seller</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Electronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Release</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Customer Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Amazon Pay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Computers</a>
              </li>
            </ul>
            <ul className="nav float-start d-none">
              <li className="nav-item">
                <a className="nav-link" href="#">Home & Kitchen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Today's Deal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Toy's & Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Coupons</a>
              </li>

            </ul>
          </div>
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
            <div className="a_main_bottom_1 row">
              <div className=""></div>
            </div>

          </div>
        </div>
        <footer></footer>
      </div>
    )
  }
}

App.propTypes = {};

