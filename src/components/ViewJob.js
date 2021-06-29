import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewJob = props => {
    useEffect(() => {
        viewJob()
    }, []);
          const viewJob = id => {
            axios.get('/api/v1/jobs/' + id)
                .then(response => {
                    setJobs(response.data)
                })
                    .catch(error => console.log(error))
        };
    

          const [job, setJobs] = useState([]);
        
    return(
        <div>
            {job.company} | {job.position} | {job.description}
        </div>
    );
    
}

export default ViewJob