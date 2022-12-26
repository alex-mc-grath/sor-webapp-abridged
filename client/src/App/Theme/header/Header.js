import React from 'react'
import { ProfileImgThumbnail } from '../../../components/elements/ProfileImgThumbnail'
import { StyledHeader } from './Style'
import logo from '../../assets/imgs/person.png'

export const Header = ({openMenu, ...props}) => {
  return (
    <StyledHeader openMenu={openMenu} {...props}>
      <ProfileImgThumbnail src={logo} openMenu={openMenu} marginLeft='auto' marginRight='2%' width='5.5rem' height='5.5rem' background='lightgrey' />
    </StyledHeader>
    
  )
}
