// Header.jsx
import { Link } from "react-scroll";
import logo from "../assets/images/others/Frame.png";
import classNames from 'classnames';

const Header = ({ isSticky }) => {
    return (
        <div className={classNames(
            'fixed top-0 left-0 w-full z-50 transition-all duration-300',
            {
                'text-gray-500': isSticky,
                'text-white': !isSticky,
            }
        )}>
            <nav className="mt-[32px] flex w-full md:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                <div className="flex">
                    <div className="flex">
                        <img className="w-[36.99px] h-[37px] mt-1" src={logo} alt="Restaurant Logo" />
                        <h1 className="text-[28.44px] ms-[6px]"><b>Restau</b>rant</h1>
                    </div>
                    <div className="my-[9.5px] hidden md:block">
                        <ul className="ms-[60px] text-[15px] md:grid md:grid-cols-6 md:gap-10">
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li className="ms-2">Clients</li>
                            <li className="ms-3">Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="ms-[100px]">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 13.5H2C1.448 13.5 1 13.052 1 12.5C1 11.948 1.448 11.5 2 11.5H22C22.552 11.5 23 11.948 23 12.5C23 13.052 22.552 13.5 22 13.5ZM23 5.5C23 4.948 22.552 4.5 22 4.5H2C1.448 4.5 1 4.948 1 5.5C1 6.052 1.448 6.5 2 6.5H22C22.552 6.5 23 6.052 23 5.5ZM23 19.5C23 18.948 22.552 18.5 22 18.5H2C1.448 18.5 1 18.948 1 19.5C1 20.052 1.448 20.5 2 20.5H22C22.552 20.5 23 20.052 23 19.5Z" fill="white" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content m-4 bg-gradient-to-r from-[#BD1F17] to-[#A51D13] z-[1] mt-3 w-52 p-2 shadow-lg">
                                <li>Home</li>
                                <li>About</li>
                                <li>Portfolio</li>
                                <li>Clients</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>
                                    <Link to="table-book" smooth={true} duration={500}>
                                        <button className="w-[157px] bg-[#FEBF00] text-[#0A1425] font-bold h-[44px]">
                                            BOOK A TABLE
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ms-[417.01px] hidden md:block">
                    <Link to="table-book" smooth={true} duration={500}>
                        <button className="w-[157px] bg-[#FEBF00] text-[#0A1425] font-bold h-[44px]">
                            BOOK A TABLE
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;