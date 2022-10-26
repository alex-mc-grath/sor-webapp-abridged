import React from 'react'
import { StyledPortfolioItem } from './Style'
import {Row} from '../../../layout/Row'

export const PortfolioItem = ({title, client = 'client', budgetRange, timeline, logo, imgs, color}) => {
  return (
    <StyledPortfolioItem
    background={color}
     >
        <div className="logo" style={{backgroundImage:`url(${logo}`}} />
        <img src={imgs[0]} alt="" />
        <h4>{title}</h4>
        <span className="client">{client}</span>
        <Row className='badges'>
            <span className="budgetRange">{budgetRange}</span>
            <span className="timeline">{timeline}</span>
        </Row>
    </StyledPortfolioItem>
  )
}
