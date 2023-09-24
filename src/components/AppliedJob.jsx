import { Link } from "react-router-dom";
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
// import { CiLocationOn } from 'react-icons/ci';
import { IoLocation } from 'react-icons/io5';

const AppliedJob = ({ jobApplied }) => {
    const { id, salary, job_type, location, remote_or_onsite, company_name, job_title, logo } = jobApplied;

    return (
        <div>
            <div className="bg-base-100 mb-5 border">
                <div className="card-body">
                    <div className="flex gap-4">
                        <img src={logo} alt="" className="border py-10 px-2 bg-[#eee] w-[10%]" />
                        <div className="">
                            <h3 className="font-bold">{job_title}</h3>
                            <h2 className="text-sm">{company_name}</h2>
                            <div className="mt-3 flex gap-3">
                                <button className="border px-2 py-1 border-[#BAE6FD]">{remote_or_onsite} </button>
                                <button className="border px-2 py-1 border-[#BAE6FD]">{job_type}</button>
                            </div>
                            <div className="flex mt-3 gap-5">
                                <div className="flex gap-2">
                                    <HiOutlineCurrencyDollar className="mt-1" />
                                    <p>{location}</p>
                                </div>
                                <div className="flex gap-2">
                                    <IoLocation className="mt-1" />
                                    <p>{location}</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="card-actions justify-end">
                        <Link to={`/job/${id}`}><button className="py-1 px-4 bg-[#62A2E3] hover:bg-[#96C291] focus:bg-[#E19898] transition text-[#fff] rounded-sm mt-4">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;