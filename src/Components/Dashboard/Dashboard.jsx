import { Link, useNavigate } from 'react-router-dom';
import slideImage from '../../../public/file.png';
import { FaAddressCard, FaFacebookF, FaGithub, FaLinkedin, FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from 'react-icons/io5';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { ImBriefcase } from 'react-icons/im';
import { RiFileDownloadLine } from "react-icons/ri";
import { BiLogoGmail } from 'react-icons/bi';
import { Typewriter } from 'react-simple-typewriter';


const Dashboard = ({ handleCloseSidebar }) => {
    const navigate = useNavigate();

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        handleCloseSidebar(); // Close sidebar after scrolling to section
    };

    return (
        <div className="mt-2 text-lg text-[#00C592]">
            {/* image section */}
            <div data-aos="zoom-in" data-aos-duration="1200" className="h-[180px] w-[190px] mx-auto relative ">
                <p className="bg-[#FF759C] h-[55%] w-full absolute bottom-0 rounded-2xl"></p>
                <img src={slideImage} alt="" className='absolute bottom-0 w-[90%] ml-2 h-[200px]' />
            </div>
            {/* name and title */}
            <div className='text-center mt-4'>
                <h1 data-aos="" data-aos-duration="1200" className='text-white text-2xl animate__animated animate__slideInDown'><span className='font-bold'>Ashikur</span> Rahaman</h1>
                <p className='flex justify-center'>  <div className="text-center" style={{ height: '30px', display: 'flex', alignItems: 'center' }}>
                    <Typewriter
                        words={['Front End Developer', 'React Developer', 'MERN Stack Developer  ']}
                        loop={0}  // Set to 0 for an infinite loop
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div></p>
            </div>

            {/* link social */}
            <div className='flex justify-between mx-10 my-6'>
                <a href='https://www.facebook.com/ashik.iuict.bd' target='_blank' className='bg-black rounded-full p-2 inline-block hover:bg-[#00C592] animate__animated animate__slideInDown'><FaFacebookF className='text-white hover:text-black' /></a>
                <a href='https://github.com/Ashikur07' target='_blank' className='bg-black rounded-full p-2 inline-block hover:bg-[#00C592] animate__animated animate__slideInDown'><FaGithub className='text-white hover:text-black ' /></a>
                <a href='https://www.linkedin.com/in/ashik43' target='_blank' className='bg-black rounded-full p-2 inline-block hover:bg-[#00C592] animate__animated animate__slideInDown'><FaLinkedin className='text-white hover:text-black' /></a>
                <a href="mailto:ashik.ict.iu@gmail.com" target="_blank" className='bg-black rounded-full p-2 inline-block hover:bg-[#00C592] animate__animated animate__slideInDown'><BiLogoGmail className='text-white hover:text-black' /></a>
            </div>

            {/* link or routes */}
            <div className='border-t border-[#7d7575]'>

                <p onClick={() => handleScrollToSection('myhome-section')} className='border-b border-[#7d7575] py-2 pl-8  cursor-pointer group flex items-center gap-2'>
                    <div className='flex items-center gap-2 animate__animated animate__slideInLeft'>
                        <span className='text-white group-hover:text-orange-600'><IoHomeOutline className='group-hover:text-orange-600' /></span>
                        <span className='group-hover:text-orange-600'>Home</span>
                    </div>
                </p>

                <p onClick={() => handleScrollToSection('introduction-section')} className='border-b border-[#7d7575] py-2 pl-8 flex items-center gap-2 cursor-pointer group'>
                    <div className='flex items-center gap-2 animate__animated animate__slideInLeft'>
                        <span className='text-white group-hover:text-orange-600'><FaRegUser className='group-hover:text-orange-600' /></span>
                        <span className='group-hover:text-orange-600'>About</span>
                    </div>

                </p>

                <p onClick={() => handleScrollToSection('skills-section')} className='border-b border-[#7d7575] py-2 pl-8 flex items-center gap-2 cursor-pointer group'>
                    <div className='flex items-center gap-2 animate__animated animate__slideInLeft'>
                        <span className='text-white group-hover:text-orange-600'><VscWorkspaceTrusted className='group-hover:text-orange-600' /></span>
                        <span className='group-hover:text-orange-600'>Skills</span>
                    </div>
                </p>

                <p onClick={() => handleScrollToSection('educationExperience-section')} className='border-b border-[#7d7575] py-2 pl-8 flex items-center gap-2 cursor-pointer group'>
                    <div className='flex items-center gap-2 animate__animated animate__slideInLeft'>
                        <span className='text-white group-hover:text-orange-600'><FaAddressCard className='group-hover:text-orange-600' /></span>
                        <span className='group-hover:text-orange-600'>Resume</span>
                    </div>
                </p>

                <p onClick={() => handleScrollToSection('portfolio-section')} className='border-b border-[#7d7575] py-2 pl-8 flex items-center gap-2 cursor-pointer group'>
                    <div className='flex items-center gap-2 animate__animated animate__slideInLeft'>
                        <span className='text-white group-hover:text-orange-600'><ImBriefcase className='group-hover:text-orange-600' /></span>
                        <span className='group-hover:text-orange-600'>Projects</span>
                    </div>
                </p>

                <p onClick={() => handleScrollToSection('contract-section')} className='border-b border-[#7d7575] py-2 pl-8 flex items-center gap-2 cursor-pointer group'>
                    <div className='flex items-center gap-2 animate__animated animate__slideInLeft'>
                        <span className='text-white text-[22px] font-semibold group-hover:text-orange-600'>@</span>
                        <span className='group-hover:text-orange-600'>Contact</span>
                    </div>
                </p>

            </div>

            {/* download cv */}
            <div className='w-[80%] mx-auto mt-5 text-white'>

                <a href="https://drive.google.com/file/d/1OiGul-PNLgr57yqmmRKZxFp-M6x9efHx/view?usp=sharing" target='_blank'>
                    <button className="relative  overflow-hidden 
                         transition duration-300 ease-out  group bg-[#09111f] w-full h-16 rounded-full">

                        {/* after hover */}
                        <span className="absolute inset-0 w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 bg-[#060c16] flex items-center  justify-end gap-5">
                            <span>Click Here</span>
                            <span className='bg-[#FF759C] p-3 rounded-full mr-1'><RiFileDownloadLine className='text-3xl ' /></span>
                        </span>

                        {/* before hover */}
                        <span className="top-0 absolute w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease flex items-center gap-4">
                            <span className='bg-[#FF759C] p-3 rounded-full ml-1'><RiFileDownloadLine className='text-3xl' /></span>
                            <span>Download CV</span>
                        </span>

                    </button>
                </a>

            </div>


        </div>
    );
};

export default Dashboard;
