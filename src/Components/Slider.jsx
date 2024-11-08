import "../style/slider.css";
import testimony from "../assets/images/others/Quote.png";
import testimony1 from "../assets/images/others/Video.png"
import testimony2 from "../assets/images/others/meat.png";
import testimony3 from "../assets/images/others/vagitable.png";
import testimony4 from "../assets/images/others/many-food.png";
import tomato from "../assets/images/others/tomato.png";
import pata from "../assets/images/others/pata.png";

const Slider = () => {
    return (
        <div className="w-full md:h-[965.97px] h-[861.95px] bg-[#FFFFFF] relative text-black">
            <div className="md:max-w-[1320px] max-w-[330px] mx-auto px-4 sm:px-6 lg:px-8 xxl:px-[300px]">
                <div className="md:pt-[120px] pt-[32px] md:flex">
                    <div className="md:w-[1168px]">
                        <li className="md:text-[20px] text-[16px] h-[32px] list-square text-[#BD1F17] font-bold">Crispy, Every Bite Taste</li>
                        <h1 className="md:text-4xl text-black text-2xl h-[62px] font-bold uppercase">What Some of my Customers Say</h1>
                    </div>
                </div>
                <div className="mt-[60px] flex flex-col md:flex-row">
                    {/* Carousel - Show first on small devices, right side on medium devices */}
                    <div className="relative md:w-[763.6px] w-full order-1 md:order-2 carousel">
                        {/* Slide 1 */}
                        <div id="slide1" className="w-full carousel-item">
                            <img src={testimony1} alt="Slide 1" />
                            <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 top-1/2">
                                <a href="#slide4" className="btn-nav left">&#10094;</a>
                                <a href="#slide2" className="btn-nav right">&#10095;</a>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div id="slide2" className="w-full carousel-item">
                            <img src={testimony2} alt="Slide 2" />
                            <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 top-1/2">
                                <a href="#slide1" className="btn-nav left">&#10094;</a>
                                <a href="#slide3" className="btn-nav right">&#10095;</a>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div id="slide3" className="w-full carousel-item">
                            <img src={testimony3} alt="Slide 3" />
                            <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 top-1/2">
                                <a href="#slide2" className="btn-nav left">&#10094;</a>
                                <a href="#slide4" className="btn-nav right">&#10095;</a>
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div id="slide4" className="w-full carousel-item">
                            <img src={testimony4} alt="Slide 4" />
                            <div className="absolute flex justify-between w-full px-4 transform -translate-y-1/2 top-1/2">
                                <a href="#slide3" className="btn-nav left">&#10094;</a>
                                <a href="#slide1" className="btn-nav right">&#10095;</a>
                            </div>
                        </div>
                    </div>

                    {/* Testimony Image - Show second on small devices, left side on medium devices */}
                    <div className="md:w-[556.45px] w-full order-2 md:order-1">
                        <img src={testimony} alt="Testimony Quote" />
                    </div>
                </div>

            </div>
            <img className="absolute top-[150px] w-[107px] hidden sm:block" src={tomato} alt="" />
            <img className="absolute w-[256.44px] top-[700px] right-0 hidden sm:block" src={pata} alt="" />
        </div>
    );
};

export default Slider;
