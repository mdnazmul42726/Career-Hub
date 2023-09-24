import { Link } from 'react-router-dom';
import loactionIcon from '../assets/icons/location2.png'
import dollerIcon from '../assets/icons/money.png'

const FeaturedJobs = ({ job }) => {
    const {id, salary, job_type, location, remote_or_onsite, company_name, job_title, logo } = job;
    return (
        <div>
            <div className="content border border-[#eee] h-72 ">
                <div className="card-body">
                    <img src={logo} alt="" className="w-[20%]" />
                    <p className="text-black font-bold">{job_title}</p>
                    <p>{company_name}</p>
                    <div className=" flex gap-3">
                        <button className="border px-2 py-1 border-[#BAE6FD]">{remote_or_onsite} </button>
                        <button className="border px-2 py-1 border-[#BAE6FD]">{job_type}</button>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex mt-2 gap-2">
                            <img src={loactionIcon} alt="" />
                            <p>{location}</p>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <img src={dollerIcon} alt="" />
                            <p>Salary: {salary}</p>
                        </div>
                    </div>
                    <div className="justify-start">
                        <Link to={`/job/${id}`}><button className="py-1 px-4 bg-[#62A2E3] hover:bg-[#96C291] focus:bg-[#E19898] transition text-[#fff] rounded-sm mt-4">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;