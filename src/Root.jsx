import { NavLink, Outlet } from "react-router-dom";
import { MdEmail } from 'react-icons/md';
import { AiFillCopyrightCircle } from 'react-icons/ai';

const Root = () => {
    return (
        <div>
            {/* navbar start */}
            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <h1 className="text-3xl font-bold">Career <big className="text-[#62a2e3]">Hub</big> </h1>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="flex gap-5">
                        <li className="">
                            <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff0000] underline" : ""
                            }>Home</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/statistics'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff0000] underline" : ""
                            }>Statistics</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/applied-jobs'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff0000] underline" : ""
                            }>Applied Jobs</NavLink>
                        </li>
                        <li className="">
                            <NavLink to={'/blog'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff0000] underline" : ""
                            }>Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn" href="#jobs">Start Applying</a>
                </div>
            </div>
            {/* navbar end */}

            {/* Outlet */}
            <div className="min-h-screen"><Outlet /> </div>

            {/* Footer section start */}
            <footer className="footer p-10 bg-base-200 text-base-content mt-10">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div className="">
                    <div className="flex gap-2">
                    <AiFillCopyrightCircle className="mt-1"/>
                    <p>SHEIKH MOHAMMAD NAZMUL HASAN</p>
                    </div>
                    <div className="flex gap-2">
                        <MdEmail className="mt-1" />
                        <p>nazmulofficial@outlook.com</p>
                    </div>
                </div>
            </footer>
            {/* Footer section end */}
        </div>
    );
};

export default Root;