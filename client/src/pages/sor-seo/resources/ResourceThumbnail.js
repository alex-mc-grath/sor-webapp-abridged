import React, { useEffect } from 'react'
import { useRef } from 'react'
import { Col, Row } from '../../../_boilerplate/layouts'
// import { Row } from '../../../_boilerplate/layouts/Row'
import { StyledResourceThumbnail } from './Style'

export const ResourceThumbnail = ({ title = "**enter title**", description = "**enter description**", category = "**enter category**", date = "**enter date**", img, ...props }) => {
  const cat = useRef()

  useEffect(() => {
    if (category.length > 3) {
      cat.current.classList.add('small')
    }

  }, [])

  return (
    <StyledResourceThumbnail {...props}>
      {/* <div className="img"></div> */}
      <img src={img} alt="" />
      <Row justify='flex-start' align='flex-start' padding='0 1.5rem'>
        <div className="category" ref={cat}>{category}</div>

        <Col margin='0' padding='0 1.2rem' justify='flex-start' align='flex-start'>
          <p className="title">{title}</p>
          <p className="grey">{description}</p>
          <p className="grey date">{date}</p>
        </Col>
      </Row>
    </StyledResourceThumbnail>
  )
}

