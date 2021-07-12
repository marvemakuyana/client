import React, { useState, useEffect } from 'react';
import axios from'axios';
import { Link } from 'react-router-dom';
import NewJobForm from './NewJobForm';
import Job from './Job'
import EditJobForm from './EditJobForm';

const JobsList = props => {

    useEffect(()=> {
        axios.get('/api/v1/jobs.json')
            .then(res => setJobs(res.data))
    }, []);

    const [jobs, setJobs] = useState([]);
    
    const initialFormState = {
        company:'',
        position:'',
        description:''
    }
    const [editing, setEditing] = useState(false);
    const [currentJob, setCurrentJob]= useState(initialFormState);

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

            setJobs([...jobs, job]);
    }

    const removeJob = id => {
        axios.delete('/api/v1/jobs/' + id)
            .then(response => {
                setJobs(jobs.filter(job => job.id !== id))
            })
                .catch(error => console.log(error))
    };
    const viewJob = id => {
        axios.get('/api/v1/jobs/' + id)
            .then(response => {
                setJobs(response.data)
            })
                .catch(error => console.log(error))
    };

    const editJob = job => {
        setEditing(true);
        setCurrentJob({
            id: job.id,
            company: job.company,
            position: job.position,
            description: job.description
        })
    };

    const updateJob = (updateJob) => {
        setEditing(false);

        const qs = require('qs');
        axios.patch('/api/v1/jobs/' + updateJob.id, qs.stringify(
            {
                job:{
                    company: updateJob.company,
                    position: updateJob.position,
                    description: updateJob.description
                }
            }
        ))
            .then(res => (
                console.log(res.data)
            ));
        setJobs(jobs.map(job => (job.id === updateJob.id ? updateJob : job)))
    }

    return(
        <div>
            <div className ='jobs-list'>
            <Link to='/create'>Create Job</Link>
            <hr/>
                {jobs.map((job) =>(
                 <div key={job.id}>
                    <Job job={job}  removeJob={removeJob} editJob={editJob} editing={editing} />
                    <Link to={"/jobs/"+job.id}>edit</Link>
                    <hr/>
                </div>
                ))}
                
          </div>
        </div>
    );
};
export default JobsList;
