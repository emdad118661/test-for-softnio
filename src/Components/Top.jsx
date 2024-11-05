

import cuisinePic from "../assets/images/others/image 1.png"


const Top = () => {
    return (
        <div className="w-full md:mt-[130px] md:max-w-[1373.5px] max-w-[330px] mx-auto md:flex px-4 sm:px-6 lg:px-8 xxl:px-[300px] md:relative">
            <div className="md:absolute md:inset-0 md:flex md:top-10">
                <h1 className="md:absolute text-white md:top-[140px] uppercase md:text-7xl text-4xl ms-11 md:bg-[#BD1F17] md:pe-5 md:py-5 md:bg-opacity-[33%]">taste the authentic <br /> saudi cuisine</h1>
                <p className="md:top-[290px] text-[24px] mt-9 md:absolute ms-11">Among the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>
                <button className="md:absolute mt-16 text-[18px] md:top-[370px] ms-11 uppercase text-[#0A1425] font-bold bg-[#FEBF00] w-[180px] h-[56px]">explore menu</button>
            </div>
            <div className="md:ms-[584px] md:me-8">
                <img className="md:w-[700px] mt-5 md:h-[649px]" src={cuisinePic} alt="" />
                <div className="bg-[#FEBF00] absolute bottom-0 right-4 bottom rounded-full h-[120px] w-[120px] shadow-2xl">
                    <div className="w-[100px] h-[100px] absolute top-[10px] justify-center left-[10px] rounded-full border-[#BD1F17] border-dashed border-2">
                        <h1 className="absolute inset-0 top-[18px] text-[#0A1425] text-center text-[20px] font-bold">TODAY <br /> OFFER</h1>
                    </div>
                </div>
                <svg className="absolute md:mt-7 top-[-44px] md:left-[1290px] hidden sm:block" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z" stroke="white" />
                </svg>

            </div>
        </div>

    );
};

export default Top;