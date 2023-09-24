import { useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { CiPhone, CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { saveJobAplication } from "../utility/localStorage";

const JobDtls = () => {

    const jobDtls = useLoaderData();
    const { id } = useParams();
    const idEnt = parseInt(id)
    const job = jobDtls.find(job => job.id == id);
    const { job_title, job_description, job_responsibility, experiences, educational_requirements, salary, contact_information, company_name } = job || {};

    const handleApplyBtn = () => {
        saveJobAplication(idEnt);
        toast("Congratulation! You have successfully applied.");
    }

    return (
        <div className="mx-10">
            <h1 className="text-3xl text-center mt-20 font-bold">{job_title}</h1>
            <h3 className=" text-center mt-2 mb-5">{company_name}</h3> <hr />
            <div className="grid md:grid-cols-4  gap-4 mt-16">
                <div className="border md:col-span-3 p-5">
                    <h3 className="mb-5"><span className="font-bold">Job Description:</span> <br /> {job_description} </h3>
                    <h3 className="mb-5"><span className="font-bold">Job Responsibility:</span> <br /> {job_responsibility} </h3>
                    <h3 className="mb-5"><span className="font-bold">Educational Requirements:</span> <br /> {educational_requirements} </h3>
                    <h3 className="mb-3"><span className="font-bold">Experiences:</span> <br /> {experiences} </h3>
                </div>
                <div className="border p-5 bg-[#FDE5EC]">
                    <h2 className="font-bold mb-2">Job Details</h2> <hr />
                    <div className="flex mt-3">
                        <BsCurrencyDollar className="mt-1 mr-2 text-[#9873FF]" />
                        <p className="font-bold">Salary: <span className="text-[#8b8383] font-light">{salary}</span></p>
                    </div>
                    <div className="flex mt-3">
                        <SlCalender className="mt-1 mr-2 text-[#9873FF]" />
                        <p className="font-bold">Job Title : <span className="text-[#8b8383] font-light">{job_title}</span></p>
                    </div>
                    <h2 className="font-bold mb-2 mt-5">Contact Information</h2> <hr />
                    <div className="flex mt-3">
                        <CiPhone className="mt-1 mr-2 text-[#9873FF]" />
                        <p className="font-bold">Phone : <span className="text-[#8b8383] font-light"> {contact_information.phone}</span></p>
                    </div>
                    <div className="flex mt-3">
                        <AiOutlineMail className="mt-1 mr-2 text-[#9873FF]" />
                        <p className="font-bold">Email: <span className="text-[#8b8383] font-light"> {contact_information.email}</span></p>
                    </div>
                    <div className="flex mt-3">
                        <CiLocationOn className="mt-1 mr-2 text-[#9873FF] text-3xl" />
                        <p className="font-bold">Address: <span className="text-[#8b8383] font-light"> {contact_information.address}</span></p>
                    </div>
                    <div className="text-center mt-16">
                        <button className="py-2 bg-[#62a2e3] hover:bg-[#96C291] focus:bg-[#E19898] transition text-[#fff] w-full font-bold" onClick={handleApplyBtn}>Apply</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDtls;