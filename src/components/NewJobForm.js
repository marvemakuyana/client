import React, { useState } from 'react';
import axios from 'axios';

const NewJobForm = props => {
    const initialFormState = {
        company:'',
        position:'',
        description:''
    }
  const [job, setJob] = useState(initialFormState);

  const handleInputChange = event => {
      const { name, value } = event.target
      setJob({ ...job, [name]: value})
  };
  const addJob = job => {
    const qs = require('qs');

    axios.post('/api/v1/jobs', qs.stringify(
        {
            job:{
                company: job.company,
                position: job.position,
                description: job.description
            }
        }
    ))
        .then(res=> (console.log(res)))
        .catch(error => console.log(error))
        //window.location = '/';
        //setJob([...job, job]);
}

  return(
      <form onSubmit={event =>{
          event.preventDefault()
          if(!job.company || !job.position || !job.description) return;
          addJob(job)
          setJob(initialFormState)
         }}>
         
             <label>Company</label>
             <input type='text' name='company' value={job.company} onChange={handleInputChange} />
       
             <label>Position</label>
             <input type='text' name='position' value={job.position} onChange={handleInputChange} />
          
             <label>Description</label>
             <input type='text' name='description' value={job.description} onChange={handleInputChange} />
            
            <button>Create Job</button>

            <div>
            <h4>{job.company}</h4>
            <p>{job.position}</p>
            <p>{job.description}</p>
            </div>
          
             

      </form>
  );
};

export default NewJobForm;