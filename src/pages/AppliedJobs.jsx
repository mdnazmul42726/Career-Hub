import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";
import AppliedJob from "../components/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayAppliedJobs, setDisplayAppliedJobs] = useState([]);

    const handleFilter = (filter) => {

        if (filter === 'all') {
            setDisplayAppliedJobs(jobsApplied);
        } else if (filter === 'remote') {
            const remotJob = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayAppliedJobs(remotJob);
        } else if (filter === 'onside') {
            const onsidejob = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayAppliedJobs(onsidejob);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();

        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);

                if (job) {
                    jobApplied.push(job);
                }
            }
            setJobsApplied(jobApplied);
            setDisplayAppliedJobs(jobApplied);
        }
    }, [])

    console.log(jobsApplied);

    return (
        <div className=" mx-32 mt-20 my-10">
            <h1 className="text-3xl text-center font-bold">Applied Jobs</h1>
            <div className="">
                <div className="flex justify-end">

                    <div className="dropdown mb-10">
                        <label tabIndex={0} className=" px-7 py-2 bg-[#eee] m-1">Filter</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleFilter('all')}><Link>All</Link></li>
                            <li onClick={() => handleFilter('remote')}><Link>Remote</Link></li>
                            <li onClick={() => handleFilter('onside')}><Link>Onside</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="">
                {
                    displayAppliedJobs.map(jobApplied => <AppliedJob key={jobApplied.id} jobApplied={jobApplied} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;