import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Container from 'react-bootstrap/Container';
import TeamMember from './TeamMember';

const TeamBoard = ({}) => {

    const members = [
        {
            name: "Kiet Nguyen",
            standing: "Master's",
            email: "kiet.nguyen@tamu.edu"
        },
        {
            name: "Kiet Nguyen",
            standing: "Master's",
            email: "kiet.nguyen@tamu.edu"
        },
        {
            name: "Kiet Nguyen",
            standing: "Master's",
            email: "kiet.nguyen@tamu.edu"
        }
    ]

    return (
        <div className="">
            Here are our Core-team Members
            <Container>
                {members.map(member => <TeamMember
                    name={member.name} 
                    standing={member.standing} 
                    email={member.email} 
                />)}
            </Container>
            
        </div>
      );  
}

export default TeamBoard;