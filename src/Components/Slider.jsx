import testimony1 from "../assets/images/others/Quote.png"
import testimony2 from "../assets/images/others/meat.png"
import testimony3 from "../assets/images/others/vagitable.png"
import testimony4 from "../assets/images/others/many-food.png"
const Slider = () => {
    return (
        <div className="w-full md:h-[965.97px] h-[552px] bg-[#FFFFFF] relative">
            <div className="md:max-w-[1320px] max-w-[330px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                <div className="md:pt-[120px] pt-[32px] md:flex">
                    <div className="md:w-[1168px]">
                        <li className="md:text-[20px] text-[16px] h-[32px] list-square text-[#BD1F17] font-bold">Crispy, Every Bite Taste</li>
                        <h1 className="md:text-4xl text-2xl h-[62px] font-bold uppercase">What Some of my Customers Say</h1>
                    </div>
                </div>
                <div className="mt-[60px]">
                    <div className="w-full carousel">
                        <div id="slide1" className="w-full carousel-item">
                            <img
                                src={testimony1}
                                className="w-full" />
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-[150px] top-[145px]">
                                <a href="#slide4" className="rounded-full shadow-2xl bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9718 18.9409C11.2354 18.6772 11.3835 18.3196 11.3835 17.9467C11.3835 17.5738 11.2354 17.2162 10.9718 16.9525L4.01088 9.99155L10.9718 3.03061C11.228 2.76539 11.3697 2.41017 11.3665 2.04146C11.3633 1.67274 11.2154 1.32004 10.9547 1.05931C10.694 0.798576 10.3413 0.650684 9.97254 0.64748C9.60382 0.644276 9.2486 0.786018 8.98338 1.04218L1.02822 8.99733C0.764588 9.26104 0.616488 9.61867 0.616488 9.99155C0.616488 10.3644 0.764588 10.7221 1.02822 10.9858L8.98338 18.9409C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.9409Z" fill="#0A1425" />
                                    </svg>
                                </a>
                                <a href="#slide2" className="rounded-full shadow-2xl ms-8 bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922V1.05922Z" fill="#0A1425" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div id="slide2" className="w-full carousel-item">
                            <img
                                src={testimony2}
                                className="w-full" />
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-[150px] top-[145px]">
                                <a href="#slide1" className="rounded-full shadow-2xl bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9718 18.9409C11.2354 18.6772 11.3835 18.3196 11.3835 17.9467C11.3835 17.5738 11.2354 17.2162 10.9718 16.9525L4.01088 9.99155L10.9718 3.03061C11.228 2.76539 11.3697 2.41017 11.3665 2.04146C11.3633 1.67274 11.2154 1.32004 10.9547 1.05931C10.694 0.798576 10.3413 0.650684 9.97254 0.64748C9.60382 0.644276 9.2486 0.786018 8.98338 1.04218L1.02822 8.99733C0.764588 9.26104 0.616488 9.61867 0.616488 9.99155C0.616488 10.3644 0.764588 10.7221 1.02822 10.9858L8.98338 18.9409C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.9409Z" fill="#0A1425" />
                                    </svg>
                                </a>
                                <a href="#slide3" className="rounded-full shadow-2xl ms-8 bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922V1.05922Z" fill="#0A1425" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div id="slide3" className="w-full carousel-item">
                            <img
                                src={testimony3}
                                className="w-full" />
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-[150px] top-[145px]">
                                <a href="#slide2" className="rounded-full shadow-2xl bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9718 18.9409C11.2354 18.6772 11.3835 18.3196 11.3835 17.9467C11.3835 17.5738 11.2354 17.2162 10.9718 16.9525L4.01088 9.99155L10.9718 3.03061C11.228 2.76539 11.3697 2.41017 11.3665 2.04146C11.3633 1.67274 11.2154 1.32004 10.9547 1.05931C10.694 0.798576 10.3413 0.650684 9.97254 0.64748C9.60382 0.644276 9.2486 0.786018 8.98338 1.04218L1.02822 8.99733C0.764588 9.26104 0.616488 9.61867 0.616488 9.99155C0.616488 10.3644 0.764588 10.7221 1.02822 10.9858L8.98338 18.9409C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.9409Z" fill="#0A1425" />
                                    </svg>
                                </a>
                                <a href="#slide4" className="rounded-full shadow-2xl ms-8 bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922V1.05922Z" fill="#0A1425" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div id="slide4" className="w-full carousel-item">
                            <img
                                src={testimony4}
                                className="w-full" />
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-[150px] top-[145px]">
                                <a href="#slide3" className="rounded-full shadow-2xl bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9718 18.9409C11.2354 18.6772 11.3835 18.3196 11.3835 17.9467C11.3835 17.5738 11.2354 17.2162 10.9718 16.9525L4.01088 9.99155L10.9718 3.03061C11.228 2.76539 11.3697 2.41017 11.3665 2.04146C11.3633 1.67274 11.2154 1.32004 10.9547 1.05931C10.694 0.798576 10.3413 0.650684 9.97254 0.64748C9.60382 0.644276 9.2486 0.786018 8.98338 1.04218L1.02822 8.99733C0.764588 9.26104 0.616488 9.61867 0.616488 9.99155C0.616488 10.3644 0.764588 10.7221 1.02822 10.9858L8.98338 18.9409C9.24709 19.2046 9.60471 19.3527 9.9776 19.3527C10.3505 19.3527 10.7081 19.2046 10.9718 18.9409Z" fill="#0A1425" />
                                    </svg>
                                </a>
                                <a href="#slide1" className="rounded-full shadow-2xl ms-8 bg-white w-[60px] h-[60px]">
                                    <svg className="mt-5 ms-6" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.02819 1.05922C0.764555 1.32293 0.616455 1.68055 0.616455 2.05344C0.616455 2.42633 0.764555 2.78395 1.02819 3.04766L7.98912 10.0086L1.02819 16.9695C0.772026 17.2348 0.630284 17.59 0.633488 17.9587C0.636692 18.3274 0.784586 18.6801 1.04532 18.9408C1.30605 19.2016 1.65875 19.3495 2.02747 19.3527C2.39618 19.3559 2.7514 19.2141 3.01662 18.958L10.9718 11.0028C11.2354 10.7391 11.3835 10.3815 11.3835 10.0086C11.3835 9.63571 11.2354 9.27809 10.9718 9.01438L3.01662 1.05922C2.75291 0.795591 2.39529 0.647491 2.0224 0.647491C1.64952 0.647491 1.2919 0.795591 1.02819 1.05922V1.05922Z" fill="#0A1425" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;