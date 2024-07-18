import { Typewriter } from "react-simple-typewriter";
import Image from "../Image/Image";

const MyHome = () => {

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        handleCloseSidebar(); // Close sidebar after scrolling to section
    };

    return (
        <div className="text-center lg:text-start flex flex-col lg:flex-row justify-between lg:px-6 mt-14 lg:mt-20 mb-32">
            <div className="text-[#848586] text-xl lg:ml-3">
                <h1 data-aos="zoom-in" data-aos-duration="1200" className="text-white text-4xl lg:text-7xl font-semibold lg:leading-[80px]">
                    <span className="font-bold">Ashikur</span> Rahaman
                </h1>

                <div className="py-1 lg:py-4 text-2xl font-semibold flex justify-center lg:justify-start">
                    <div className="text-center" style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                        <Typewriter
                            words={['Front End Developer', 'React Developer', 'MERN Stack Developer  ']}
                            loop={0}  // Set to 0 for an infinite loop
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

                <p className="animate__animated animate__slideInUp max-w-[408px] mx-4 lg:mx-0">
                    We appreciate your interest. As a fresher, I am eager to bring my skills to a dynamic team. I'm actively seeking job opportunities where I can contribute and grow.
                </p>

                <div className="flex flex-col lg:flex-row lg:space-x-4 mt-5 lg:mt-8 items-center gap-3 lg:gap-0 animate__animated animate__slideInUp">
                    <button onClick={() => handleScrollToSection('portfolio-section')} className="bg-[#FF759C] hover:bg-[#ac7182]  text-black px-7 py-4 rounded-[60px] w-40">View Work</button>
                    <button onClick={() => handleScrollToSection('contract-section')}  className="bg-[#FFDB59] text-black px-7 py-4 rounded-[60px] w-44 lg:w-40 hover:bg-[#e8bb18]">Contact Me</button>
                </div>
            </div>

            <div className="mt-14 lg:mt-10 mx-auto">
                <Image />
            </div>
        </div>
    );
};

export default MyHome;
