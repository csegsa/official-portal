/*eslint-disable*/
import React from "react"

// reactstrap components
import { Row, Col, Container } from "reactstrap"
import Logo from "../../assets/img/csegsa/csegsa_logo_inverted.webp"

function MainFooter() {
  return (
    <footer className='footer footer-black footer-white'>
      <Container>
        <Row>
          <Col md='6'>
            <nav className='footer-nav'>
              <img src={Logo} alt={"csegsa_logo"} style={{ width: 400 }} />
            </nav>
          </Col>
          <Col md='6'>
            <nav className=''>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "700", marginTop: "10px" }}>
                  Follow us
                </div>
                {/* <div>
                                
                                    <span style={{fontSize:"20px", fontWeight:"500", lineHeight: "45px"}}>Follow us</span>
                                </div> */}
                <div>
                  <span style={{ marginRight: "20px" }}>
                    <a href='https://www.creative-tim.com?ref=pkr-footer' target='_blank'>
                      <i className='fa fa-twitter fa-2x' />
                    </a>
                  </span>
                  <span style={{ marginRight: "20px" }}>
                    <a href='https://www.creative-tim.com?ref=pkr-footer' target='_blank'>
                      <i className='fa fa-linkedin fa-2x' />
                    </a>
                  </span>
                  <span>
                    <a href='https://www.creative-tim.com?ref=pkr-footer' target='_blank'>
                      <i className='fa fa-twitter fa-2x' />
                    </a>
                  </span>
                </div>
              </div>
            </nav>
          </Col>
          <Col md='6'>
            {/* <div className="credits ml-auto" style={{}}> */}
            <span className='copyright' style={{ fontSize: "16px", fontWeight: "400" }}>
              © {new Date().getFullYear()}, CSEGSA, all rights reserved.
            </span>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MainFooter
