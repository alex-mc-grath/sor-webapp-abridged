import React from 'react'
import { StyledPortfolioItem } from './Style'
import {Row} from '../../../layout/Row'
import {Col} from '../../../layout/Col'

export const PortfolioItem = ({title, client = 'client', budgetRange, timeline, logo, imgs, color}) => {
  return (
    <StyledPortfolioItem
    background={color}
     >
        <div className="logo" style={{backgroundImage:`url(${logo}`}} />
        <Col align='flex-start'>
          <h4>{title}</h4>
          <p className="client">{client}</p>
          <Row className='badges' width='100%'>
              <span className="budgetRange">{budgetRange}</span>
              <span className="timeline">{timeline}</span>
          </Row>
        </Col>
        <img src={imgs[0]} alt="" />
    </StyledPortfolioItem>
  )
}
