import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import AnimatedBackground from "../AnimatedBackground";

const Main = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMenuFixed, setIsMenuFixed] = useState(false);
    const sidebarRef = useRef(null);
    const menuRef = useRef(null);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (menuRef.current) {
                const { top } = menuRef.current.getBoundingClientRect();
                setIsMenuFixed(top <= 0); // Fix menu when it reaches or goes above the top
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <AnimatedBackground />
            <div className="relative z-10 h-[100vh] w-[100vw] lg:flex max-w-7xl mx-auto">

                {/* Sidebar */}
                <div
                    ref={sidebarRef}
                    className={`h-full w-64 lg:w-[330px] bg-[#171B22] fixed lg:relative top-0 left-0 z-20 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:translate-x-0 lg:block`}
                >
                    <Dashboard handleCloseSidebar={handleCloseSidebar} />
                </div>

                {/* Main content area */}
                <div className="bg-gray-900 lg:ml-2 w-full h-full overflow-y-auto hide-scrollbar relative">
                    {/* Menu Icon */}
                    <div
                        ref={menuRef}
                        className={`text-white text-3xl block lg:hidden flex justify-end p-5 fixed w-full top-0 transition-all duration-300 ${isMenuFixed ? 'bg-gray-800' : ''}`}
                    >
                        <button 
                            onClick={handleToggleSidebar} 
                            className="focus:outline-none bg-[#565151] bg-opacity-60 rounded-full p-2 flex items-center justify-center"
                        >
                            {isSidebarOpen ? <AiOutlineClose className="text-white" /> : <GiHamburgerMenu className="text-white" />}
                        </button>
                    </div>

                    {/* Outlet for rendering nested routes */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;
