import { Project } from './Project';
import { StyledRecentProjects } from './Style';

import { variants1 } from '../../../utils/animationVariants';
import { motion } from 'framer-motion';

// recent projects component: automatically fetches single project folders:
// /projects/project1/screenshots/image.png
// /projects/project1/info (in DB instead? so I should have a form that submits all?)

import image1 from '../../../../media/ss.png';
import image2 from '../../../../media/ss2.png';
import LogoAnimation from '../LogoAnimation';

import image3 from '../../../../media/img/parkingsystem1.png';
import image4 from '../../../../media/img/parkingsystem2.png';
import image5 from '../../../../media/img/staystuck1.png';
import image6 from '../../../../media/img/staystuck2.png';
import { useState } from 'react';
// import image7 from '../../../../media/img/staystuck3.png';

export const RecentProjects = () => {
  // let projects = ['A'];

  const projects = [
    {
      title: 'Custom Changelog Builder',
      desc: 'for update tickets and issues',
      images: [image1, image2],
      links: ['link1', 'https://github.com/alex-mc-grath/changelog-builder'],
    },
    {
      title: 'Parking System MVP',
      desc: 'open search and twilio integration for mobile access to DB',
      images: [image3, image4],
      links: [],
    },
    {
      title: 'StayStuck XXL',
      desc: 'cannabis modern UX',
      images: [image5, image6],
      links: [],
    },
  ];

  // TODO: HOW TO DISPLAY ONE PROJECT AT A TIME? (CAROUSEL? ARROWS? keep it simple)

  const [idx, setIdx] = useState(0);
  const current = projects[idx];

  const idxManager = (direction) => {
    if (direction === 'forwards') {
      if (idx < projects.length - 1) {
        setIdx(idx + 1);
      } else if (idx < 1) {
        setIdx(projects.length - 1);
      }
    } else if (direction === 'backwards') {
      if (idx < 1) {
        setIdx(projects.length - 1);
      } else if (idx >= 1) {
        setIdx(idx - 1);
      }
    }
  };

  return (
    <motion.div
      variants={variants1}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <StyledRecentProjects>
        {/* {projects.map((project, idx) => (
          <Project key={project.title} projectInfo={projects[idx]} />
        ))} */}
        <Project key={projects[idx].title} projectInfo={projects[idx]} idxManager={idxManager} />
      </StyledRecentProjects>
    </motion.div>
  );
};
