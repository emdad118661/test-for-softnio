import bg from "../assets/images/background/Rectangle 4.png"
import logo from "../assets/images/others/Frame.png"
import cuisinePic from "../assets/images/others/image 1.png"


const Top = () => {
    return (
        <div className="bg-gradient-to-r from-[#BD1F17] to-[#A51D13] w-full h-[1047px] relative">
            <div>
                <img className="w-full h-[1047px] object-cover" src={bg} alt="" />
            </div>
            <div className="absolute inset-0 flex">
                <div className="w-full text-white">
                    {/* ***Navigation Bar*** */}
                    <nav className="my-[32px] sticky flex w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                        <div className="flex">
                            <div className="flex">
                                <img className="w-[36.99px] h-[37px] mt-1" src={logo} alt="" />
                                <h1 className="text-[28.44px] ms-[6px]"><b>Restau</b>rant</h1>
                            </div>
                            <div className="my-[9.5px] hidden md:block">
                                <ul className="ms-[60px] md:grid md:grid-cols-6 md:gap-10">
                                    <li className="">Home</li>
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
                                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28 19.5H8C7.448 19.5 7 19.052 7 18.5C7 17.948 7.448 17.5 8 17.5H28C28.552 17.5 29 17.948 29 18.5C29 19.052 28.552 19.5 28 19.5ZM29 11.5C29 10.948 28.552 10.5 28 10.5H8C7.448 10.5 7 10.948 7 11.5C7 12.052 7.448 12.5 8 12.5H28C28.552 12.5 29 12.052 29 11.5ZM29 25.5C29 24.948 28.552 24.5 28 24.5H8C7.448 24.5 7 24.948 7 25.5C7 26.052 7.448 26.5 8 26.5H28C28.552 26.5 29 26.052 29 25.5Z" fill="white" />
                                        </svg>

                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content m-4 bg-gradient-to-r from-[#BD1F17] to-[#A51D13] z-[1] mt-3 w-52 p-2 shadow-lg">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Portfolio</li>
                                        <li>Clients</li>
                                        <li>Blog</li>
                                        <li>Contact</li>
                                        <li><button className="w-[157px] bg-[#FEBF00] text-[#0A1425] font-bold h-[44px]">BOOK A TABLE</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="ms-[417.01px] hidden md:block">
                            <button className="w-[157px] bg-[#FEBF00] text-[#0A1425] font-bold h-[44px]">BOOK A TABLE</button>
                        </div>
                    </nav>

                    {/* ***Frame 2080*** */}
                    <div className="w-full md:mt-[130px] max-w-[1373.5px] mx-auto md:flex px-4 sm:px-6 lg:px-8 xxl:px-[300px] md:relative">
                        <div className="md:absolute md:inset-0 md:flex md:top-10">
                            <h1 className="md:absolute text-white md:top-[140px] uppercase text-7xl ms-11 md:bg-[#BD1F17] md:pe-5 md:py-5 md:bg-opacity-[33%]">taste the authentic <br /> saudi cuisine</h1>
                            <p className="md:top-[290px] mt-9 md:absolute ms-11">Among the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>
                            <button className="md:absolute mt-8 md:top-[370px] ms-11 uppercase text-[#0A1425] font-bold bg-[#FEBF00] w-[180px] h-[56px]">explore menu</button>
                        </div>
                        <div className="md:ms-[584px] md:me-8">
                            <img className="md:w-[700px] mt-5 md:h-[649px]" src={cuisinePic} alt="" />
                        </div>
                    </div>

                    <svg className="absolute md:mt-7 top-40 md:left-[1362px] hidden sm:block" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z" stroke="white" />
                    </svg>


                </div>
            </div>
        </div>
    );
};

export default Top;