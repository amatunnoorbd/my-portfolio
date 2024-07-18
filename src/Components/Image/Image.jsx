import reactLogo from '../../assets/react.svg';
import image from '../../../public/file.png';
import circle from '../../../public/circle.png';
import tailwindlogo from '../../assets/tailwind.png';
import jslogo from '../../assets/jslogopng.png';
import htmllogo from '../../assets/htmlLogo.png';
import csslogo from '../../assets/css logo.png';
import nodelogo from '../../assets/node.png';

const Image = () => {
    return (
        <div className='relative'>
            <table data-aos="zoom-in" data-aos-duration="1200" className='relative h-[380px] lg:h-[478px] lg:w-[478px]'>
                <thead className='hidden'>
                    <tr>
                        <th>0</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(9)].map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {[...Array(10)].map((_, colIndex) => (
                                <td key={colIndex} className='text-white'> &nbsp;</td>
                            ))}
                        </tr>
                    ))}
                </tbody>

                <div className='h-[44px] lg:h-[50px] w-6 lg:w-7 green-changing rounded-r-full absolute top-32 lg:top-40'></div>
                <div className='lg:h-52 w-[332px] lg:w-[478px] orange-changing absolute bottom-0 rounded-t-full hidden lg:block'></div>
                <div>
                    <img className='w-[322px] lg:w-[428px] h-[448px] lg:h-[538px] ml-3 lg:ml-5 absolute bottom-0' src={image} alt="" />
                </div>
                <div className='absolute -top-[28px] lg:-top-[30px] -left-[40px] lg:-left-[45px] burning-icon'>
                    <img src={reactLogo} className="logo react w-20 lg:w-24" alt="React logo" />
                </div>
                <div className='absolute top-10 lg:top-14 left-7 lg:left-12'>
                    <img src={circle} className="logo react w-12" alt="React logo" />
                </div>

                <div className='absolute top-[95px] lg:top-[113px] right-[80px] lg:right-[107px] burning-icon'>
                    <img src={htmllogo} className="w-6 lg:w-8" alt="HTML logo" />
                </div>

                <div className='absolute top-[95px] lg:top-[115px] right-[44px] lg:right-[60px] burning-icon'>
                    <img src={jslogo} className="w-6 lg:w-8" alt="JS logo" />
                </div>

                <div className='absolute top-[94px] lg:top-[113px] right-[5px] lg:right-[9px] burning-icon'>
                    <img src={csslogo} className="w-8 lg:w-10" alt="CSS logo" />
                </div>

                <div className='absolute top-[134px] lg:top-[165px] right-10 lg:right-[60px] burning-icon'>
                    <img src={nodelogo} className="w-8" alt="Node.js logo" />
                </div>

                <div className='absolute top-[54px] lg:top-16 right-10 lg:right-14 burning-icon'>
                    <img src={tailwindlogo} className="w-8 lg:w-10" alt="Tailwind logo" />
                </div>

            </table>

            <div className='absolute -bottom-[74px] h-40 w-[280px] lg:w-[330px] left-10 lg:left-[85px] bg-[#171B22] rounded-2xl shadow-2xl text-white p-5'>
                <h1 className='text-xl'>Worked with more than 10 people</h1>

                <div className='flex justify-between items-center'>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse py-2">
                        <div className="avatar custom-avatar-border">
                            <div className="w-12">
                                <img src="https://media.licdn.com/dms/image/D4E03AQG36P6AKYPlVQ/profile-displayphoto-shrink_400_400/0/1685102866054?e=1725494400&v=beta&t=Em8eSMG1NfjKuH8fAUAmMdMOyrVdnivYPaUaNHGOB0I" alt="Avatar 1" />
                            </div>
                        </div>
                        <div className="avatar custom-avatar-border">
                            <div className="w-12">
                                <img src="https://media.licdn.com/dms/image/D5603AQE269BSx0JLcA/profile-displayphoto-shrink_400_400/0/1720079275055?e=1725494400&v=beta&t=weRXG7eavk7NCeElEKcjjieUXJSeHoq3W60Cm14wxms" alt="Avatar 2" />
                            </div>
                        </div>
                        <div className="avatar custom-avatar-border">
                            <div className="w-12">
                                <img src="https://media.licdn.com/dms/image/D5635AQE00RjzKyrOkg/profile-framedphoto-shrink_400_400/0/1683493627591?e=1720843200&v=beta&t=1r-IwRsehTa_N3D7OkT2u0U8INTsdP3-I4Fu-onJRn4" />
                            </div>
                        </div>
                        <div className="avatar custom-avatar-border">
                            <div className="w-12">
                                <img src="https://media.licdn.com/dms/image/D5603AQG30CpjdGxV5g/profile-displayphoto-shrink_400_400/0/1688231750922?e=1725494400&v=beta&t=E1Y0cmlj9ubTZRH55jCnxvROeWhbTPmlQr5mGvp9uuE" alt="Avatar 4" />
                            </div>
                        </div>
                    </div>

                    <div className='border-b-2 w-10'></div>

                    <div className='text-lg'>
                        100+ <br /> connection
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Image;
