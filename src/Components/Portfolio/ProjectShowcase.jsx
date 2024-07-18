// src/components/Portfolio/ProjectShowcase.js
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectShowcaseContainer = styled.div`
  background-color: #112034;
  padding: 1.3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.3);
  }
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  padding-top: 0.75rem;
  padding-bottom: 0.5rem;
`;

const LinksContainer = styled.div`
  color: #b4a6a6;
  display: flex;
  gap: 1.75rem;
  justify-content: flex-end;
`;

const ProjectShowcase = ({ project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false, // Hide arrows
  };

  return (
    <ProjectShowcaseContainer>
      <Slider {...settings}>
        {project.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-[180px]" />
          </div>
        ))}
      </Slider>
      <Title>{project?.title}</Title>
      <LinksContainer>
        <a className='flex items-center gap-1' href={project?.github} target="_blank" rel="noopener noreferrer"><FaGithub /> <span>Source Code</span></a>
        <a className='flex items-center gap-1' href={project?.livelink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> <span>Livelink</span></a>
      </LinksContainer>
    </ProjectShowcaseContainer>
  );
};

export default ProjectShowcase;
