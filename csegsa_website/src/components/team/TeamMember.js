import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../media/css/teammember.css';


const TeamMember = ({name, standing, email}) => {
    return (
        <Row className="justify-content-md-center"> 
            <Col lg="3">
                <div className="img-div">
                    <img src="" alt="" ></img>
                </div>
            </Col>
            <Col>
                <div className='name'>{name}</div>                
                <div className='info'>{email}</div>
                <div className='info'>{standing}</div>
            </Col>
        </Row>
      );  
}

export default TeamMember;