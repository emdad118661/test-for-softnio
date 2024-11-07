import { useState } from "react";
import Marquee from "react-fast-marquee";

const Items = () => {
    const food =
        [
            {
                id: 1,
                image: "https://i.ibb.co.com/PG1HJwX/Frame-1707478074.png",
                title: "vegetables burger",
                description: "Barbecue Italian cuisine pizza"
            },
            {
                id: 2,
                image: "https://i.ibb.co.com/2dkWxW0/pizza.png",
                title: "Spacial Pizza",
                description: "Barbecue Italian cuisine pizza"
            },
            {
                id: 3,
                image: "https://i.ibb.co.com/t2xYtVv/french-fry.png",
                title: "Spacial French fries ",
                description: "Barbecue Italian cuisine"
            },
            {
                id: 4,
                image: "https://i.ibb.co.com/5sFQyp4/chicken-fry.png",
                title: "Cuisine Chicken",
                description: "Japanese Cuisine Chicken"
            }
        ]
    const [items, setItems] = useState(food);

    // const [clicked, setClicked] = useState(false);

    const [direction, setDirection] = useState("left"); // New state to track direction

    const rightToLeft = () => {
        setDirection("left");
    };

    const leftToRight = () => {
        setDirection("right");
    };

    return (
        <div className="w-full md:h-[710px] h-[552px] bg-[#FBF7F2]">
            <div className="md:max-w-[1320px] max-w-[330px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                <div className="md:pt-[120px] pt-[32px] md:flex">
                    <div className="md:w-[1168px]">
                        <li className="md:text-[20px] text-[16px] h-[32px] list-square text-[#BD1F17] font-bold">Crispy, Every Bite Taste</li>
                        <h1 className="md:text-4xl text-2xl h-[62px] font-bold">POPULAR FOOD ITEMS</h1>
                    </div>
                    <div onClick={rightToLeft} className="absolute md:top-[2031px] top-[2695px] left-[110px] md:left-[1168px] rounded-full bg-white shadow-2xl w-[60px] h-[60px]">
                        <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9718 18.941C11.2354 18.6773 11.3835 18.3197 11.3835 17.9468C11.3835 17.5739 11.2354 17.2163 10.9718 16.9526L4.01088 9.99161L10.9718 3.03068C11.228 2.76545 11.3697 2.41023 11.3665 2.04152C11.3633 1.6728 11.2154 1.3201 10.9547 1.05937C10.694 0.798637 10.3413 0.650745 9.97254 0.647541C9.60382 0.644337 9.2486 0.786079 8.98338 1.04224L1.02822 8.9974C0.764588 9.26111 0.616488 9.61873 0.616488 9.99161C0.616488 10.3645 0.764588 10.7221 1.02822 10.9858L8.98338 18.941C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.941Z" fill="#0A1425" />
                        </svg>

                    </div>
                    <div onClick={leftToRight} className="absolute md:top-[2031px] top-[2695px] md:left-[1260px] left-[190.33px] rounded-full shadow-2xl bg-white w-[60px] h-[60px]">
                        <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922V1.05922Z" fill="#0A1425" />
                        </svg>


                    </div>
                </div>
                <div>
                    <Marquee direction={direction} pauseOnHover={true}>
                        <div className="md:pt-[60px] pt-[30px] grid grid-cols-4 gap-8">
                            {
                                items.map(item => <div className="h-[300px] bg-white " key={item.id}>
                                    <img className="h-[120px] w-[120px] mt-8 mb-6 mx-[85px]" src={item.image} alt="" />
                                    <hr className="w-[57px] mx-[114.5px] mb-6 border-t-4 border-[#BD1F17]" />
                                    <h1 className="mx-8 text-lg font-bold text-center uppercase h-9">{item.title}</h1>
                                    <p className="text-center text-[16px]">{item.description}</p>
                                </div>)
                            }
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Items;