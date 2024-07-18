// src/components/Portfolio/Portfolio.js
import Heading from '../Heading/Heading';
import ProjectShowcase from './ProjectShowcase';
import learnQuestImage1 from '../../assets/learnquest.png';
import learnQuestImage2 from '../../assets/learnquest2.png';
import learnQuestImage3 from '../../assets/learnquest3.png';
import learnQuestImage4 from '../../assets/learnquest4.png';
import bdjobImage1 from '../../assets/bdjob.png';
import bdjobImage2 from '../../assets/bdjob2.png';
import bdjobImage3 from '../../assets/bdjob3.png';
import bdjobImage4 from '../../assets/bdjob4.png';
import craftHavenImage1 from '../../assets/craftHaven.png';
import craftHavenImage2 from '../../assets/crafthaven2.png';
import craftHavenImage3 from '../../assets/crafthaven3.png';
import craftHavenImage4 from '../../assets/crafthaven4.png';
import staycomfortImage1 from '../../assets/staycomfortlnn.png';
import staycomfortImage2 from '../../assets/staycomfortln2.png';
import staycomfortImage3 from '../../assets/staycomfortln3.png';
import staycomfortImage4 from '../../assets/staycomfortln4.png';

const projects = [
  { 
    title: 'Learn Quest', 
    images: [learnQuestImage1, learnQuestImage2, learnQuestImage3, learnQuestImage4],
    github: "https://github.com/Ashikur07/e-learning-platform", 
    livelink: "https://assignment-12-by-ashik.netlify.app" 
  },
  { 
    title: 'BDJOBS', 
    images: [bdjobImage1, bdjobImage2, bdjobImage3, bdjobImage4],
    github: "https://github.com/Ashikur07/BDJOBS", 
    livelink: "https://assignment-11-by-ashik.netlify.app" 
  },
  { 
    title: 'Craft Haven', 
    images: [craftHavenImage1, craftHavenImage2, craftHavenImage3, craftHavenImage4],
    github: "https://github.com/Ashikur07/Craft_haven", 
    livelink: "https://assignment-10-by-ashik.netlify.app" 
  },
  { 
    title: 'StayComfortInn', 
    images: [staycomfortImage1, staycomfortImage2, staycomfortImage3, staycomfortImage4],
    github: "https://github.com/Ashikur07/StayComfortInn", 
    livelink: "https://assignment-09-by-ashik.netlify.app" 
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white lg:p-10">
      <div className='mx-5 lg:mx-0 pb-4 lg:pb-0'>
        <Heading title="Projects." />
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mx-5">
        {projects.map((project, index) => (
          <ProjectShowcase key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
