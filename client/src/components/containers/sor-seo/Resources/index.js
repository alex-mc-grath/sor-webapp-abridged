import React from 'react'
import { ResourceThumbnail } from './ResourceThumbnail'
import {GridRow} from '../../../layout/GridRow'
import { StyledResources, Wrapper } from './Style'
import { Col } from '../../../layout/Col'

export const Resources = () => {
  return (
    <StyledResources>
      <Col>
      <h1>All our resources and documentation</h1>
      <Wrapper>
          <ResourceThumbnail title='ABM - Guide & Definitions' category="growth" />
          <ResourceThumbnail title='SOR SEO - fundamentals' category="dev" />
          <ResourceThumbnail title='External links - our top picks' category="app" />

          <ResourceThumbnail title='ABM - Guide & Definitions' category="growth" />
          <ResourceThumbnail title='SOR SEO - fundamentals' category="dev" />
          <ResourceThumbnail title='External links - our top picks' category="app" />
      </Wrapper>
      </Col>
    </StyledResources>
  )
}
