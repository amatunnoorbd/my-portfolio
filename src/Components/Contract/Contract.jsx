import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Heading from '../Heading/Heading';

const Contract = () => {
    return (
        <div className='mx-5 lg:mx-10 mt-16 mb-16 lg:mb-5'>
            <Heading title="Get In Touch." />

            <div className='flex flex-col lg:flex-row gap-5'>
                {/* email */}
                <a href='mailto:ashik.ict.iu@gmail.com' className='flex items-center bg-[#112034] flex-1 p-2 lg:p-3 rounded-2xl gap-4'>
                    <div className='bg-[#6F39FD] h-16 w-16 lg:h-20 lg:w-20 rounded-2xl flex items-center justify-center'>
                        <FaEnvelope color="white" className='text-5xl mx-4' />
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>Email</p>
                        <p className='text-xl lg:text-2xl text-white font-bold'>ashik.ict.iu@gmail.com</p>
                    </div>
                </a>
                {/* phone */}
                <div className='flex items-center bg-[#112034] flex-1 p-3 rounded-2xl gap-4'>
                    <div className='bg-[#6F39FD] h-16 w-16 lg:h-20 lg:w-20 rounded-2xl flex items-center justify-center'>
                        <FaPhone color="white" className='text-5xl' />
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>Phone</p>
                        <p className='text-xl lg:text-2xl text-white font-bold'>+8801743439382</p>
                    </div>
                </div>
            </div>

            {/* form */}
            <form className='mt-10'>
                {/* row1 */}
                <div className='flex flex-col lg:flex-row gap-7 lg:gap-10'>
                    <div className='border-b-2 border-[#5f5959] text-lg flex-1 focus-within:border-white'>
                        <p className='mb-0 pb-0'>Name</p>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-gray-900 pl-0 placeholder-white focus:placeholder-bold focus:outline-none pb-1"
                        />
                    </div>

                    <div className='border-b-2 border-[#5f5959] text-lg flex-1 focus-within:border-white'>
                        <p className='mb-0 pb-0'>Email</p>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-gray-900 pl-0 placeholder-white focus:placeholder-bold focus:outline-none pb-1"
                        />
                    </div>
                </div>

                {/* row2 */}
                <div className='border-b-2 border-[#5f5959] text-lg flex-1 mt-7 focus-within:border-white'>
                    <p className='mb-0 pb-0'>Subject</p>
                    <input
                        type="text"
                        placeholder="Your subject"
                        className="w-full bg-gray-900 pl-0 placeholder-white focus:placeholder-bold focus:outline-none pb-1"
                    />
                </div>

                {/* row3 */}
                <div className='border-b-2 border-[#5f5959] text-lg flex-1 mt-7 focus-within:border-white'>
                    <p className='mb-0 pb-0'>Message</p>
                    <input
                        type="text"
                        placeholder="Write your text..."
                        className="w-full bg-gray-900 pl-0 placeholder-white focus:placeholder-bold focus:outline-none pb-1"
                    />
                </div>

                <button className='btn bg-[#a1969a] text-black text-lg w-40 h-16 rounded-2xl mt-8 hover:bg-[#8a8083]'>Submit Now</button>
            </form>

            {/* all rights reserved */}
            <div className='text-lg text-center mt-20 mb-5'>
                © 2024 | All rights reserved by <span className='text-white font-semibold'>Ashikur_Rahaman</span>
            </div>
        </div>
    );
};

export default Contract;
