import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all icons that show 
import reacticon from "../../assets/react.svg";
import mongodbicon from "../../assets/mongodb.svg";
import nodeicon from "../../assets/node.png";
import firebaseicon from "../../assets/firebase.png";
import jsicon from "../../assets/jslogopng.png";
import htmlicon from "../../assets/htmlLogo.png";
import cssicon from "../../assets/css logo.png";
import tailwindicon from "../../assets/tailwind.png";

const data = [
    { id: 1, icon: htmlicon, name: "html" },
    { id: 2, icon: nodeicon, name: "node" },
    { id: 3, icon: firebaseicon, name: "firebase" },
    { id: 4, icon: mongodbicon, name: "mongodb" },
    { id: 5, icon: reacticon, name: "react" },
    { id: 6, icon: cssicon, name: "css" },
    { id: 7, icon: tailwindicon, name: "tailwind" },
    { id: 8, icon: jsicon, name: "javascript" },
];

const settings = {
    dots: false, // Hide dots if not needed
    infinite: true,
    speed: 3000, // Set to 0 for continuous scrolling
    slidesToShow: 5, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Speed of autoplay, set to 0 for continuous scrolling
    cssEase: 'linear', // Linear transition for smooth effect
    arrows: false, // Hide arrows
    responsive: [
        {
            breakpoint: 1024, // Adjust for tablets
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600, // Adjust for mobile devices
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // Adjust for small mobile devices
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

const SmoothSlider = () => {
    return (
        <div className="container mx-auto my-8">
            <Slider {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="p-2">
                        <div className="bg-slate-800 h-44 rounded-tr-[30px] text-white rounded-md flex flex-col items-center justify-center py-1">
                            <img src={item.icon} alt={`${item.name} icon`} className="mb-4 w-24 h-24" />
                            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SmoothSlider;
