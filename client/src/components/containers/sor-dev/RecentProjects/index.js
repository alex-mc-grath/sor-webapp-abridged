import { Project } from './Project'
import { StyledRecentProjects } from './Style'

import { variants1 } from '../../../utils/animationVariants'
import { motion } from 'framer-motion'

// recent projects component: automatically fetches single project folders:
// /projects/project1/screenshots/image.png
// /projects/project1/info (in DB instead? so I should have a form that submits all?)

import image1 from '../../../../media/ss.png'
import image2 from '../../../../media/ss2.png'
import LogoAnimation from '../LogoAnimation'

export const RecentProjects = () => {
  // let projects = ['A'];

  const projects = [
    {
      title: 'Custom Changelog Builder',
      desc: 'for update tickets and issues',
      images: [image1, image2],
      links: ['link1', 'https://github.com/alex-mc-grath/changelog-builder'],
    },
  ]

  // TODO: HOW TO DISPLAY ONE PROJECT AT A TIME? (CAROUSEL? ARROWS? keep it simple)

  return (
    <motion.div
      variants={variants1}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <StyledRecentProjects>
        {projects.map((project, idx) => (
          <Project key={project.title} projectInfo={projects[idx]} />
        ))}
      </StyledRecentProjects>
    </motion.div>
  )
}
