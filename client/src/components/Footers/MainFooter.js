/*eslint-disable*/
import React from "react"

// reactstrap components
import { Row, Col, Container } from "reactstrap"
import Logo from "../../assets/img/csegsa/csegsa_logo_inverted.webp"

function MainFooter() {

    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <Col md="4">
                        <nav className="footer-nav">
                            <img src={Logo} alt={"csegsa_logo"} style={{ width: 200 }} />
                        </nav>
                    </Col>
                    <Col md="4">
                        {/* <div className="credits ml-auto" style={{}}> */}
                            <div className="copyright" style={{fontSize:"14px", fontWeight:"400", marginTop:"25px", textAlign:"right"}}>
                                © {new Date().getFullYear()}, CSEGSA, all rights reserved.
                            </div>
                        {/* </div> */}
                    </Col>
                    <Col md="4" style={{textAlign:'right'}}>
                        <nav className="">
                            <div>
                                <div style={{fontSize:"16px", fontWeight:"700", marginTop:"10px"}}>Follow us</div>
                                {/* <div>

                                    <span style={{fontSize:"20px", fontWeight:"500", lineHeight: "45px"}}>Follow us</span>
                                </div> */}
                                <div>
                                    <span style={{marginRight:"20px"}}>
                                        <a
                                            href="https://www.facebook.com/groups/csegsa/"
                                            target="_blank"
                                        >
                                            <i className="fa fa-facebook fa-2x" style={{color:"#500000"}}/>
                                        </a>
                                    </span>
                                    <span style={{marginRight:"20px"}}>
                                        <a
                                            href="https://www.linkedin.com"
                                            target="_blank"
                                        >
                                            <i className="fa fa-linkedin fa-2x" style={{color:"#500000"}} />
                                        </a>
                                    </span>
                                    <span>
                                        <a
                                            href="https://www.twitter.com"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter fa-2x" style={{color:"#500000"}} />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MainFooter;
