import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <Row>
            <Col xl={4} md={4} mb={30}>
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Ngong Lane, Nairobi</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} mb={30}>
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>1234567890</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} mb={30}>
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-content pt-5 pb-5">
          <Row>
            <Col xl={4} lg={4} mb={50}>
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="./images/savortastic-logo.png" className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                <p>
                Elevate your cooking skills with detailed recipes and gain insights on top-rated kitchen tools and food items. 
                </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
            </Col>    
            <Col xl={4} lg={4} md={6} mb={50}>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="copyright-area">
        <Container>
          <Row>
            <Col xl={6} lg={6} className="text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023, All Right Reserved{' '}
                  <a href="https://github.com/Muturi-Job/group-5-project-frontend">Group 5</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
