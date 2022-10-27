import React from 'react'
import { Col } from '../../../layout/Col'
import { Row } from '../../../layout/Row'
import { StyledResourceThumbnail } from './Style'

export const ResourceThumbnail = ({title}) => {
  return (
    <StyledResourceThumbnail>
        <div className="img"></div>
        <Row justify='flex-start' align='flex-start'>
          <div className="category">dev</div>

          <Col margin='0' padding='0 1.2rem' justify='flex-start' align='flex-start'>
            <p className="title">{title}</p> 
            <p className="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, asperiores?</p> 
            <p className="grey date">October 2022</p> 
          </Col>
        </Row>
    </StyledResourceThumbnail>
  )
}

