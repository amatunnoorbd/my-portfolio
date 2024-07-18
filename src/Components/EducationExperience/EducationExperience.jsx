import Heading from '../Heading/Heading';

const educationData = [
    {
        title: "BACHELOR OF SCIENCE",
        institution: "Islamic University",
        period: "2020 - Present",
        description: "I am currently pursuing a Bachelor of Science degree at Islamic University, focusing on a rigorous academic curriculum."
    },
    {
        title: "Higher School Certificate",
        institution: "Agrani School & College",
        period: "2018-2019",
        description: "I have completed my Higher School Certificate at Agrani School & College, achieving excellence in my academic studies."
    }
];

const experienceData = [
    {
        title: "Complete Web Development Course",
        company: "Programming Hero",
        period: "December 2023 - June 2024",
        description: "I have completed a web development course at Programming Hero, gaining valuable skills in modern web technologies.",
    },

];

const TimelineItem = ({ title, institution, company, period, description }) => (
    <div className="relative mb-8 flex items-start group">
        <div className="absolute left-[10px] top-[20px] h-[85%] border"></div>

        <div className="relative z-10 flex items-center border-[2px] rounded-full p-1 border-white">
            <div className="w-[10px] h-[10px] bg-pink-600 rounded-full"></div>
        </div>

        <div className="ml-8">
            <h3 className="text-lg font-semibold text-white group-hover:text-gray-500">{title}</h3>
            <span className="block text-gray-500 group-hover:text-white">{institution || company} / {period}</span>
            <p className="mt-2 text-gray-400 group-hover:text-white">{description}</p>
        </div>
    </div>
);


const EducationExperience = () => (

    <div className=" text-white mt-16 lg:mt-24 mb-12 lg:mb-20 mx-5 lg:mx-10" >

        <div className="container mx-auto">

            <div className="flex flex-wrap -mx-4">

                <div className="w-full lg:w-1/2 px-4">
                    <Heading title="Education."></Heading>
                    {educationData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            institution={item.institution}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </div>

                <div className="w-full lg:w-1/2 px-4">
                    <Heading title="Experience."></Heading>
                    {experienceData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            title={item.title}
                            company={item.company}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </div>

            </div>

        </div>

    </div>
);

export default EducationExperience;
