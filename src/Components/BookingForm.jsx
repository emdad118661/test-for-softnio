import { useEffect, useState } from "react";
import table from "../assets/images/background/book-a-table.png"

const BookingForm = () => {
    const [minDate, setMinDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
        const day = String(today.getDate()).padStart(2, '0');
        setMinDate(`${year}-${month}-${day}`);
    }, []);


    const handleBooking = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const reservation = form.get("reservation");
        const people = form.get("people");
        const message = form.get("message");
        console.log(name, email, reservation, people, message);
    }

    return (
        <div id="table-book" className="relative">
            <img className="w-full h-[722px] md:h-[788px] object-cover object-center"
                src={table}
                alt="Book a Table" />
            <div className="absolute inset-0 text-white md:max-w-[1320px] max-w-[330px] md:my-[120px] my-[30px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                <li className="md:text-[20px] text-[16px] h-[32px] list-square text-[#BD1F17] font-bold">Book Now</li>
                <h1 className="md:text-4xl text-2xl h-[62px] font-bold mt-4">BOOK YOUR TABLE</h1>
                <p className="md:w-[545px] w-[330px] h-[48px] text-[16px]">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

                <form onSubmit={handleBooking} className="md:w-[665px] w-[330px] mt-10 h-[368px]">
                    <div className="md:flex">
                        <input type="text" name="name" placeholder="Your Name *" className="w-[302.5px] mb-4 md:mb-6 h-[46px] bg-transparent border focus:placeholder-transparent placeholder:text-white placeholder:ps-4 border-white" />
                        <input type="email" name="email" placeholder="Your Email" className="w-[302.5px] mb-4 md:mb-6 md:ms-[30px] h-[46px] bg-transparent border focus:placeholder-transparent placeholder:text-white placeholder:ps-4 border-white" />
                    </div>
                    <div className="md:flex">
                        <div className="relative w-[302.5px] mb-4 md:mb-6">
                            <label
                                className="absolute text-sm text-white transition-all duration-200 transform pointer-events-none top-1 left-4"
                                htmlFor="reservation"
                            >
                                Reservation Date
                            </label>
                            <input
                                type="date"
                                name="reservation"
                                id="reservation"
                                min={minDate}
                                className="w-full pt-6 h-[46px] bg-transparent border border-white text-white px-4 focus:outline-none"
                                onFocus={(e) => e.target.previousSibling.classList.add('text-xs', 'top-0', 'pt-1')}
                                onBlur={(e) => !e.target.value && e.target.previousSibling.classList.remove('text-xs', 'top-0', 'pt-1')}
                            />
                        </div>


                        <input type="number" name="people" placeholder="Total People" className="w-[302.5px] mb-4 md:mb-6 md:ms-[30px] h-[46px] bg-transparent border focus:placeholder-transparent placeholder:text-white placeholder:ps-4 border-white" />
                    </div>
                    <textarea type="text" name="message" placeholder="Message" className="md:w-[635px] h-[140px] mb-4 md:mb-6 w-[302.5px] bg-transparent border focus:placeholder-transparent placeholder:text-white placeholder:ps-4 placeholder:pt-4 border-white" />
                    <input className="w-[142px] h-[56px] bg-[#FEBF00] text-black font-bold text-[18px]" type="submit" value="BOOK NOW" />
                </form>
            </div>

        </div>
    );
};

export default BookingForm;