import React from 'react';

const Job = ({job, removeJob, editJob, editing, viewJob}) => (
    <div className="job">
      <h4>{job.company}</h4>
      <p>{job.position}</p>
      <p>{job.description}</p>

      {/* { editing ? ( null
      ): (
        <button onClick={() => { editJob(job)}}>Edit</button>
      )} */}

      <button onClick={() => removeJob(job.id)}>Remove</button>
      {/* <button onClick={() => viewJob(job.id)}>View</button> */}
     
    </div>
);

export default Job;