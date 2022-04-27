import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import DateTimePicker from 'react-datetime-picker';
import { Container, Input, Row, FormGroup, Label, FormText, Form, Button, Col } from "reactstrap";
import csegsaApi from "api/csegsaApi";

const AddJobs = () => {
    const [deadline, onDeadlineChange] = useState(new Date());
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobUrl, setJobUrl] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        csegsaApi.post("/jobs", {
            company_name: companyName,
            job_title:jobTitle,
            location: jobLocation,
            description: jobDescription,
            url: jobUrl,
            deadline: deadline

        }).then(res => {
            console.log(res);
            history.push("/jobs");

        }).catch(err => {
            console.log(err);
        });
    }

    const testSubmit = (e) => {
      console.log(e) ;
    }

    return (
        <>
          <Container>
            <h3>Jobs Form</h3>
            <br/>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="Company Name">
                        Company
                    </Label>
                    <Input
                        id="company"
                        name="company_name"
                        placeholder="Company Name"
                        type="plaintext"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <br />
                    <Label for="Company Name">
                        Job Title
                    </Label>
                    <Input
                        id="company"
                        name="company_name"
                        placeholder="Job Title"
                        type="plaintext"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                    <br />
                    <Label for="Company Name">
                        URL
                    </Label>
                    <Input
                        id="company"
                        name="company_name"
                        placeholder="URL"
                        type="plaintext"
                        value={jobUrl}
                        onChange={(e) => setJobUrl(e.target.value)}
                    />
                    <br />
                    <Row>
                      <Col md="6">
                      <Label for="Name">
                          Location
                      </Label>
                      <Input
                          id="Name"
                          name="Name"
                          placeholder="Location"
                          type="plaintext"
                          value={jobLocation}
                          onChange={(e) => setJobLocation(e.target.value)}
                      />
                      </Col>
                      <Col md="6">
                          <Label for="StartTime">
                              Deadline
                          </Label>
                          <br></br>
                          <DateTimePicker id="StartTime" onChange={onDeadlineChange} value={deadline} />
                      </Col>
                    </Row>
                    <br />
                    <Label for="description">
                        Description
                    </Label>
                    <Input
                        id="description"
                        name="text"
                        type="textarea"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
          </Container>
        </>

    );
}


export default AddJobs;
