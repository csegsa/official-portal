import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const JobPostings = (props) => {

    const { username } = useContext(AppContext);

    return (
        <div className="">
            This is the JobPostings Page

            {username !== '' && 
            <div>Hello, {username}</div>}
        </div>
      );  
}

export default JobPostings;