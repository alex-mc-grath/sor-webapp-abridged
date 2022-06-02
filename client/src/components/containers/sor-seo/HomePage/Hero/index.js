import React from 'react'
import { Navigate } from 'react-router-dom'
import { StyledHero } from './Style'
import heroImage from "../../../../../media/img/hero-header-img-xl.jpg"
import H1 from '../../../../bp-components/H1/'
import Svg from './Svg'

export const Hero = ({content, view}) => {

  return (
    <StyledHero mainImage={heroImage} className={`${view === 'zoomed' ? 'zoomed' : ''}`}>
        <Svg onClick={<Navigate to="/dev"/>} />
        <H1 onClick={<Navigate to="/dev"/>} >{content.h1}</H1>
    </StyledHero>
  )
}
