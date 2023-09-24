import { useEffect, useState } from 'react';
import accountsIcon from '../assets/icons/accounts.png'
import chipIcon from '../assets/icons/chip.png'
import creativeIcon from '../assets/icons/creative.png'
import marketingIcon from '../assets/icons/marketing.png'
import FeaturedJobs from '../components/FeaturedJobs';

const Home = () => {

    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(4)

    useEffect(() => {
        fetch('jobs.json').then(res => res.json()).then(data => setJobs(data))
    }, [])

    return (
        <div>
            {/* banner section start */}
            <div className="">
                <div className="hero h-[522px] bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/vHfD3j0/user.png" className="w-[45%]" />
                        <div className="ml-20">
                            <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-[#62a2e3]">Dream Job</span> </h1>
                            <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className="btn bg-[#62a2e3] text-[#fff] font-bold">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Section end */}

            {/* Job Category section start */}
            <div className="mt-16">
                <h1 className="text-3xl font-bold text-center ">Job Category List</h1>
                <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>

                {/* card */}
                <div className="mx-20 mt-10 flex gap-3  justify-center">

                    {/* card 1 */}
                    <div className="p-10 bg-sky-200">
                        <img src={accountsIcon} alt="" />
                        <p className='mt-2 font-bold'>Account & Finance</p>
                        <p>300 Jobs Available</p>

                    </div>
                    {/* card 2 */}
                    <div className="p-10 bg-sky-200">
                        <img src={creativeIcon} alt="" />
                        <p className='mt-2 font-bold'>Creative Design</p>
                        <p>100+ Jobs Available</p>

                    </div>
                    {/* card 2 */}
                    <div className="p-10 bg-sky-200">
                        <img src={marketingIcon} alt="" />
                        <p className='mt-2 font-bold'>Marketing & Sales</p>
                        <p>50 Jobs Available</p>

                    </div>
                    {/* card 4 */}
                    <div className="p-10 bg-sky-200">
                        <img src={chipIcon} alt="" />
                        <p className='mt-2 font-bold'>Engineering Job</p>
                        <p>224 Jobs Available</p>

                    </div>
                </div>
            </div>
            {/* Job Category section end */}

            {/* Featured Jobs section start */}
            <div className="mt-16" id='jobs'>
                <h1 className='text-3xl text-center font-bold'>Featured Jobs</h1>
                <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 mx-20 gap-5 mt-8">
                    {
                        jobs.slice(0, showAllJobs).map(job => <FeaturedJobs key={job.id} job={job} />)
                    }
                </div>
                <div className={showAllJobs === jobs.length && "hidden"}>
                <div className="flex justify-center mt-10">
                    <button onClick={() => setShowAllJobs(jobs.length)} className="py-2 px-4 mb-10 bg-[#62A2E3] hover:bg-[#96C291] focus:bg-[#E19898] transition text-[#fff] rounded-sm mt-4">See All Jobs</button>
                </div>
                </div>
            </div>

            {/* Featured Jobs section end */}
        </div>
    );
};

export default Home;