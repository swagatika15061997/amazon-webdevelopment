import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faBars } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'

export default class App extends Component {
  //1. properties
  state = {
    'x': '',
    'y': 'header-modal l934',
  }
  //2. constructor
  constructor(props) {
    super(props)
  }
  //3. Method
  //alway remember to create only fat arrow function
  handleScroll = () => {
    console.log('page loaded' + window.scrollY);
    if (window.scrollY >= 60) {
      this.setState({ x: 'position-fixed start-0 top-0' })
      //we will add 'position-fixed start-0 top-0'
    }
    else {
      //we will add 'position-fixed start-0 top-0'
      this.setState({ x: '' })
    }
  }
  handleModal = () =>
    {
      this.setState({y:'header-modal l433'})
    }
  componentDidMount() {
    //this method is called when the page/component is rendered
    window.addEventListener('scroll', this.handleScroll)
  }
  render() {
    return (
      <div>
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className={'modal-dialog modal-dialog-scrollable ' +this.state.y}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>This content should appear at the bottom after you scroll.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
        <header>
          <div className={'a_header_top p-1 w-100 ' + this.state.x}>
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
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon className="fs-5" icon={faBars} />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">All</button>
                </a>
              </li> */}
              <button onClick={this.handleModal} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">All</button>

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

