import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import DateTimePicker from 'react-datetime-picker';
import { Container, Input, Row, FormGroup, Label, FormText, Form, Button, Col, Card } from "reactstrap";
import csegsaApi from "api/csegsaApi";

const JobListing = () => {

  const [jobs, setJobs] = useState([]) ;
  const [isLoading, setIsLoading] = useState(true) ;

  useEffect(() => {
    csegsaApi.get("/jobs").then(res => {
      console.log(res.data);
      setJobs(res.data);
      setIsLoading(false) ;
    });
  }, []);


    return (
        <>
          { jobs.map((item,index)=>{
       return (
           <Card className="ml-auto mr-auto">
             <div className="card-body">
             <h3 className="card-title ">{item.company_name}</h3>
             <h6 className="card-subtitle mb-2 text-muted">{item.job_title}</h6>
             <p className='card-text'><b>Location: {item.location}</b></p>
             <p className="card-text">{item.description}</p>
             <p className='card-text'><b>Deadline: {item.deadline}</b></p>
             <a href={item.url} className="btn btn-primary">Website</a>
             </div>
           </Card>)
          })}
        </>

    );
}


export default JobListing;
