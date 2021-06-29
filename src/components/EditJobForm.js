import React, { useState } from 'react';

const EditJobForm = props => {
    const [job, setJob] = useState(props.currentJob);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setJob({ ...job, [name]: value })
    };

    return(
        <form onSubmit={event => {
            event.preventDefault();
            if(!job.company || !job.position || !job.description) return;
            props.updateJob(job)
            }}>
            <label>Company</label>
            <input type='text' name='company' value={job.company} onChange={handleInputChange} />
            <label>Position</label>
            <input type='text' name='position' value={job.position} onChange={handleInputChange} />
            <label>Description</label>
            <input type='text' name='description' value={job.description} onChange={handleInputChange} />

            <button>Update Job</button>
            <button onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    );
}

export default EditJobForm