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
            <nav className="mt-[32px] flex w-full md:max-w-[1320px] max-w-[330px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                <div className="flex">
                    <div className="flex">
                        <img className="w-[36.99px] h-[37px] mt-1" src={logo} alt="" />
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
                                {/* SVG code */}
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content m-4 bg-gradient-to-r from-[#BD1F17] to-[#A51D13] z-[1] mt-3 w-52 p-2 shadow-lg">
                                <li>Home</li>
                                <li>About</li>
                                <li>Portfolio</li>
                                <li>Clients</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>
                                    <button className="w-[157px] bg-[#FEBF00] text-[#0A1425] font-bold h-[44px]">BOOK A TABLE</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ms-[417.01px] hidden md:block">
                    <button className="w-[157px] bg-[#FEBF00] text-[#0A1425] font-bold h-[44px]">BOOK A TABLE</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
