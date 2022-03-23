import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function JobPostings(props) {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const { username } = useContext(AppContext);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }



}

const JobPostingsWithContext = (props) => {
    return (
        <AppContext.Consumer>
            {context => <JobPostings {...props} context={context} />}
        </AppContext.Consumer>
    )
}
export default JobPostings;