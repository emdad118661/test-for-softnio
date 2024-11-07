import table from "../assets/images/background/book-a-table.png"

const BookingForm = () => {
    return (
        <div className="relative">
            <img className="w-full h-[722px] md:h-[788px] object-cover object-center"
                src={table}
                alt="Book a Table" />
            <div className="absolute inset-0 text-white md:max-w-[1320px] max-w-[330px] my-[120px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                <li className="md:text-[20px] text-[16px] h-[32px] list-square text-[#BD1F17] font-bold">Book Now</li>
                <h1 className="md:text-4xl text-2xl h-[62px] font-bold mt-4">BOOK YOUR TABLE</h1>
                <p className="md:w-[545px] w-[330px] h-[48px] text-[16px]">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

                <form className="md:w-[665px] w-[330px] mt-10 h-[368px]">
                    <div className="md:flex">
                        <input type="text" name="name" placeholder="Your Name *" className="w-[302.5px] mb-4 md:mb-6 h-[46px] bg-transparent border focus:placeholder-transparent placeholder:text-white placeholder:ps-4 border-white" />
                        <input type="email" name="email" placeholder="Your Email" className="w-[302.5px] mb-4 md:mb-6 md:ms-[30px] h-[46px] bg-transparent border focus:placeholder-transparent placeholder:text-white placeholder:ps-4 border-white" />
                    </div>
                    <div className="md:flex">
                        <div className="relative w-[302.5px] mb-4 md:mb-6">
                            <label className="absolute text-sm text-white top-2 left-4" htmlFor="reservation">Reservation Date</label>
                            <input
                                type="date"
                                name="reservation"
                                id="reservation"
                                className="w-full pt-6 h-[46px] bg-transparent border border-white text-white px-4 focus:outline-none"
                            />
                        </div>

                        <input type="number" name="email" placeholder="Total People" className="w-[302.5px] mb-4 md:mb-6 md:ms-[30px] h-[46px] bg-transparent border focus:placeholder-transparent placeholder:text-white placeholder:ps-4 border-white" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default BookingForm;