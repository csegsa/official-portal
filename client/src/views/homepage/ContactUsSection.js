import React, {useState,useRef} from 'react' ;
import emailjs from '@emailjs/browser';
const validateInput = require('./validateInput.js') ;
// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from 'reactstrap' ;

function ContactUsSection() {

  const form = useRef() ;

  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  const sendEmail = (e) => {
    e.preventDefault();
    console.log(toSend) ;
    console.log(validateInput(toSend)) ;
    if(validateInput(toSend)) {
    emailjs.send("service_4a1ob33", "template_vk3nieo", toSend ,"ShSakye0AbwjRUTNf")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  };

  return (
    <>
      <div id={'contact'} className="main">
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form ref={form} onSubmit={sendEmail} className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" name="from_name" value={toSend.from_name} onChange={handleChange}/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" name="from_email" value={toSend.from_email} onChange={handleChange}/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default ContactUsSection ;
