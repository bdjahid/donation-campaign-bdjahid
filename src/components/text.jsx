import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [dataLength, setDataLength] = useState(4)
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    })
    return (
        <div className="mt-5">
            <h2 className='text-6xl text-center'>Featured Jobs : {jobs.length}</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-10 mt-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>
        </div >
    );
}