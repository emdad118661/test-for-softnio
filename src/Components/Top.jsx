import bg from "../assets/images/background/Rectangle 4.png"
import logo from "../assets/images/others/Frame.png"


const Top = () => {
    return (
        <div className="bg-gradient-to-r from-[#BD1F17] to-[#A51D13] w-full h-[1047px] relative">
            <div>
                <img className="w-full h-[1047px] object-cover" src={bg} alt="" />
            </div>
            <div className="absolute inset-0 flex">
                <div className="w-full text-white">
                    <nav className="my-[32px] flex w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                        <div className="flex">
                            <div className="flex">
                                <img src={logo} alt="" />
                                <h1 className="text-[28.44px] ms-[6px]"><b>Restau</b>rant</h1>
                            </div>
                            <div className="ms-[60px] my-[9.5px] hidden md:block">
                                <ul className="md:grid md:grid-cols-6 md:gap-10">
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
                                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28 19.5H8C7.448 19.5 7 19.052 7 18.5C7 17.948 7.448 17.5 8 17.5H28C28.552 17.5 29 17.948 29 18.5C29 19.052 28.552 19.5 28 19.5ZM29 11.5C29 10.948 28.552 10.5 28 10.5H8C7.448 10.5 7 10.948 7 11.5C7 12.052 7.448 12.5 8 12.5H28C28.552 12.5 29 12.052 29 11.5ZM29 25.5C29 24.948 28.552 24.5 28 24.5H8C7.448 24.5 7 24.948 7 25.5C7 26.052 7.448 26.5 8 26.5H28C28.552 26.5 29 26.052 29 25.5Z" fill="white" />
                                        </svg>

                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content m-4 bg-gradient-to-r from-[#BD1F17] to-[#A51D13] rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Portfolio</li>
                                        <li>Clients</li>
                                        <li>Blog</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="ms-[417.01px] hidden md:block">
                            <button className="w-[157px] bg-[#FEBF00] text-[#0A1425] font-bold h-[44px]">BOOK A TABLE</button>
                        </div>
                    </nav>
                    <div className="w-full max-w-[1373.5px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                        <h1 className="text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus illum esse, facilis ullam libero iste tempore quam recusandae mollitia animi, dolore incidunt necessitatibus voluptates suscipit! Laudantium autem corrupti eius.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;