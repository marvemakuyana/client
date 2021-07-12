import React, { useState, useEffect } from 'react';
import axios from 'axios';


const EditJobForm = props => {
    useEffect(() => {
        axios.get('/api/v1/jobs/' + props.match.params.id)
        .then(response => {
            setJob(response.data)
            console.log(response.data)
        })
            .catch(error => console.log(error))
    }, []);
    const initialFormState = {
        company:'',
        position:'',
        description:''
    }
    const [job, setJob] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setJob({ ...job, [name]: value })
    };
    const updateJob = (updatedJob) => {
        //setEditing(false);
      
        const qs = require('qs');
        axios.patch('/api/v1/jobs/' + updatedJob.id, qs.stringify(
            {
              job:{
                company: updatedJob.company,
                position: updatedJob.position,
                description: updatedJob.description}
            }))
            .then(
                res=>(
                    console.log(res.data)
                ));
      
        //setJob(job.map(job => (job.id === updatedJob.id ? updatedJob : job)))
      };

    return(
        <form onSubmit={event => {
            event.preventDefault();
            if(!job.company || !job.position || !job.description) return;
            updateJob(job)
            }}>
            <label>Company</label>
            <input type='text' name='company' value={job.company} onChange={handleInputChange} />
            <label>Position</label>
            <input type='text' name='position' value={job.position} onChange={handleInputChange} />
            <label>Description</label>
            <input type='text' name='description' value={job.description} onChange={handleInputChange} />

            <button>Update Job</button>
            <div>
            <h4>{job.company}</h4>
            <p>{job.position}</p>
            <p>{job.description}</p>
            </div>
            {/* <button onClick={() => props.setEditing(false)}>Cancel</button> */}
        </form>
    );
}

export default EditJobForm