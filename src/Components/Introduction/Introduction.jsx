import Heading from '../Heading/Heading';

const Introduction = () => {

  return (
    <div className="mx-6 lg:mx-10 mb-20 text-justify">
      <Heading title="About Me." />
      <p className="text-[#848586] text-lg" >
        Hi, my name is <span className="text-white font-semibold">Ashikur Rahaman</span> and I recently completed my web development course at Programming Hero. I have begun my journey as a MERN Stack Developer, dedicating most of my waking hours to learning, designing, programming, and operating full stack applications using MongoDB, Express.js, React, and Node.js. Apart from this, I love to explore new technologies, mentor aspiring developers, review code repositories, and read books on everything related to web development. I am passionate about creating innovative and efficient solutions, and you can find most of my projects here.

  
      </p>

      <div className="text-[#848586] text-lg mt-7 space-y-2">

        <div className="flex">
          <p>Name</p>
          <p className="ml-20 lg:ml-36 mr-4 lg:mr-8 text-xl font-bold">:</p>
          <p className="text-white font-semibold text-lg">Ashikur Rahaman</p>
        </div>

        <div className="flex">
          <p>Nationality</p>
          <p className="ml-10 lg:ml-[106px] mr-4 lg:mr-8 text-xl font-bold">:</p>
          <p className="text-white font-semibold text-lg">Bangladeshi</p>
        </div>
        <div className="flex">
          <p>Phone</p>
          <p className="ml-[76px] lg:ml-[142px] mr-4 lg:mr-8 text-xl font-bold">:</p>
          <p className="text-white font-semibold text-lg">(+880)1743439382</p>
        </div>
        <div className="flex">
          <p>Email</p>
          <p className="ml-[84px] lg:ml-[151px] mr-4 lg:mr-8 text-xl font-bold">:</p>
          <p className="text-white font-semibold text-lg">ashik.ict.iu@gmail.com</p>
        </div>
        <div className="flex">
          <p>Experience</p>
          <p className=" ml-[41px] lg:ml-[109px] mr-4 lg:mr-8 text-xl font-bold">:</p>
          <p className="text-white font-semibold text-lg">1 years</p>
        </div>
        <div className="flex">
          <p>Freelance</p>
          <p className=" ml-[51px] lg:ml-[119px] mr-4 lg:mr-8 text-xl font-bold">:</p>
          <p className="text-white font-semibold text-lg">Available</p>
        </div>
        <div className="flex">
          <p>Language</p>
          <p className=" ml-[48px] lg:ml-[118px] mr-4 lg:mr-8 text-xl font-bold">:</p>
          <p className="text-white font-semibold text-lg">English,Bangla,Hindi</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
