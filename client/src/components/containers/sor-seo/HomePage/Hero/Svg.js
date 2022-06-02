import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import styled, { keyframes } from 'styled-components'

import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    scale: 0,
    rotate: '-60deg',
    x: '-100%',
  },
  visible: (custom) => ({
    opacity: 1,
    pathLength: 1,
    scale: 1,
    rotate: '0deg',
    x: '0%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
      delay: custom * custom * 0.005,
    },
  }),
}

const spin = keyframes`
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    `

const StyledSvg = styled.svg`
    /* fill:white; */
    width: 135px;
    /* width: ${(props) => (props.variant === 'A' ? '' : '')}; */

    .hovered{
        fill: #1f4df1 !important;
    }

    &.clicked{
    animation: ${spin} 4s cubic-bezier(0,1.5,1,1.2);
    /* animation-iteration-count: infinite; */
}

&.clicked:focus {
  -webkit-animation: ${spin} 4s cubic-bezier(0,1.5,1,1.2);;
          animation: ${spin} 4s cubic-bezier(0,1.5,1,1.2);;
}
&.clicked:active {
  -webkit-animation: none;
          animation: none;
}
    /* animation-name: ${spin};
 animation-duration: 8s;
 animation-iteration-count: infinite; */



`

const Path = (props) => {
  // const [state, setState] = useState(null)

  const onHover = (props) => {
    props.target.classList.add('hovered')
    // props.target.classList.add('gradient-color')
    setTimeout(() => props.target.classList.remove('hovered'), 1500)

    props.target.style = 'fill:black'
    props.target.style = 'opacity: 1'
    // setState(props.target.id)
  }

  const onExit = (props) => {
    // props.target.style = "fill:purple";
  }

  const onClick = (props) => {
    // props.target.classList.add('clicked')
  }

  return (
    <motion.path
      variants={variants}
      initial="hidden"
      animate="visible"
      onMouseDown={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onExit}
      {...props}
    />
  )
}

const Svg = () => {
  let navigate = useNavigate()

  const onClick = (props) => {
    props.target.classList.add('clicked')
    ;<Navigate to="/dev" replace />
    navigate('/dev', { replace: true })
    // void props.offsetWidth
    // props.target.classList.remove('clicked')
  }

  return (
    <StyledSvg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180.12 172.78"
    >
      <defs>
        <linearGradient id="gradient1">
          <stop offset="5%" stopColor="#110a2e" />
          <stop offset="95%" stopColor="#0e2967" />
        </linearGradient>
        <linearGradient id="gradient2">
          <stop offset="5%" stopColor="#0e2967" />
          <stop offset="95%" stopColor="#110a2e" />
        </linearGradient>
        <linearGradient id="gradient">
          <stop offset="5%" stopColor="#e14d54" />
          <stop offset="95%" stopColor="#fffab4" />
        </linearGradient>
        <linearGradient id="gradient">
          <stop offset="5%" stopColor="#205b68" />
          <stop offset="95%" stopColor="#15b895" />
        </linearGradient>
      </defs>
      <g className="cls-1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <Path
              custom={1}
              fill="url(#gradient1)"
              id="path1"
              d="M154.81,21.62c6,1.73,9.27,8.45,7.16,14.53-2.73,7.86-9.13,18-16.26,28.48-12.91,21.2-24.56,36.7-33.93,42.13a10.31,10.31,0,0,1-7.94,1.12c-8.59-2.4-13.37-13.88-8.71-30.21,8.9-35.22,21.81-53.1,38.36-55.31a93.89,93.89,0,0,1,19.07-1.1,9.45,9.45,0,0,1,2.11.32Z"
            />
            <Path
              custom={2}
              fill="url(#gradient2)"
              id="path2"
              d="M162.44,16a.6.6,0,0,0,.37-1.06c-1.28-1.09-4.65-2-9.29-2.81-8.68-1.46-27.84-1.41-29.29-1.37-5.5.13-2.27,4.15-1,5.18C125.34,17.79,162.44,16.49,162.44,16Z"
            />
            <Path
              custom={3}
              fill="url(#gradient2)"
              id="path3"
              d="M114.83,13.18c-3.38,3.88-10.06,6.28-19.51,9a.54.54,0,0,1-.37-1c7-3.48,13.85-6.53,19.29-8.83A.54.54,0,0,1,114.83,13.18Z"
            />
            <Path
              custom={4}
              fill="url(#gradient1)"
              id="path4"
              d="M62.42,55.63c.06,10.24,10.08,23.12,16.75,25.53a4.13,4.13,0,0,0,2.69,0c1.68-.55,4.18-1.49,7.5-8.79,2.37-5.22,5.62-16.06,7.75-20.59,4.14-8.78,6.74-16.41,6.45-21.86a4.45,4.45,0,0,0-4.79-4.25c-9.77.9-22,11.91-35.19,26.85A4.69,4.69,0,0,0,62.42,55.63Z"
            />
            <Path
              custom={5}
              fill="url(#gradient2)"
              id="path5"
              d="M71.17,37A45.5,45.5,0,0,1,50.92,48.71a.84.84,0,0,1-.52,0c-5.13-1.9-8.78-4.19-10.45-7a.91.91,0,0,1,.49-1.32,98.45,98.45,0,0,1,30.14-5A.91.91,0,0,1,71.17,37Z"
            />
            <Path
              custom={6}
              fill="url(#gradient2)"
              id="path6"
              d="M37.86,51.32c-12.42.29-24.07.24-33.61-.75A1.44,1.44,0,0,1,4,47.8a82.42,82.42,0,0,1,21.17-3.94h.15c5.44.2,10.06,1.68,13.51,5A1.43,1.43,0,0,1,37.86,51.32Z"
            />
            <Path
              custom={7}
              fill="url(#gradient2)"
              id="path7"
              d="M50.43,64.05c-5,1.43-9.24,2.14-12.43,1.78a1.78,1.78,0,0,1-1.42-1,6.66,6.66,0,0,1,.06-5.07,1.55,1.55,0,0,1,1.52-1,23.37,23.37,0,0,1,12.49,3.91A.83.83,0,0,1,50.43,64.05Z"
            />
            <Path
              custom={8}
              fill="url(#gradient2)"
              id="path8"
              d="M30.81,57.82C26.62,56.19,17.07,56,5.06,56.39a1,1,0,0,0-.36,1.84,59.93,59.93,0,0,0,17.43,5h0a11.35,11.35,0,0,0,9.06-3.33A1.28,1.28,0,0,0,30.81,57.82Z"
            />
            <Path
              custom={9}
              fill="url(#gradient2)"
              id="path9"
              d="M1.76,62.52c17.9,3.08,31.16,16,40.76,36.71a1.52,1.52,0,0,1-2.15,2C30.48,94.76,5.43,73.09.25,64.89A1.54,1.54,0,0,1,1.76,62.52Z"
            />
            <Path
              custom={10}
              fill="url(#gradient2)"
              id="path10"
              d="M39.07,81.46c2.66,9.13,8,17,14.55,24.21a8.07,8.07,0,0,0,5.94,2.68h1.95a8,8,0,0,0,5.34-2.08l4-3.56a8.71,8.71,0,0,0,2.46-9C69.39,81,64.4,73.88,58.85,69.66A7.92,7.92,0,0,0,53,68.08a26.77,26.77,0,0,0-10.14,3.57A8.65,8.65,0,0,0,39.07,81.46Z"
            />
            <Path
              custom={11}
              fill="url(#gradient2)"
              id="path11"
              d="M98.82,113.56a47.28,47.28,0,0,1-8.31,1.64.83.83,0,0,1-.89-1c.7-2.69,2-4.76,4.67-4.77,1.52,0,3.43,1.57,4.79,2.77A.84.84,0,0,1,98.82,113.56Z"
            />
            <Path
              custom={12}
              fill="url(#gradient2)"
              id="path12"
              d="M77.12,109.15a13.16,13.16,0,0,1,.8,5.08,1.3,1.3,0,0,1-1.15,1.26A20.79,20.79,0,0,1,68,114.41a1.33,1.33,0,0,1-.38-2.27c2.88-2.34,5.64-3.72,8.25-3.84A1.27,1.27,0,0,1,77.12,109.15Z"
            />
            <Path
              custom={13}
              fill="url(#gradient2)"
              id="path13"
              d="M89,172.78c-3.68-6.92-2.54-35.2-1-51.43,6-.06,11,2,14.26,7.39C101.44,146.89,96.49,161,89,172.78Z"
            />
            <Path
              custom={14}
              fill="url(#gradient2)"
              id="path14"
              d="M79.17,122.05c2.08,15.22,2,32.45.68,50.73-9.93-16.28-15.08-30.9-13.92-43.33C68.17,124.42,72.64,122,79.17,122.05Z"
            />
          </g>
        </g>
      </g>
    </StyledSvg>
  )
}

export default Svg
