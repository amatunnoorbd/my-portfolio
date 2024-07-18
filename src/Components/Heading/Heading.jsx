
const Heading = ({title}) => {
    return (
        <div className="flex gap-4 mb-7 lg:mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-white">{title}</h1>
            <h1 className="border-b-[3px] flex-1 mb-1 border-[#383e4a]"></h1>
        </div>
    );
};

export default Heading;