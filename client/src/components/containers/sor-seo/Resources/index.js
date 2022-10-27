import React from 'react'
import { ResourceThumbnail } from './ResourceThumbnail'
import {GridRow} from '../../../layout/GridRow'
import { StyledResources, Wrapper } from './Style'
import { Col } from '../../../layout/Col'

export const Resources = () => {
  return (
    <StyledResources>
      <Col>
      <h1>resources & documentation</h1>
      <Wrapper>
          <ResourceThumbnail title='ABM - Guide & Definitions, an amazing long title to discover limits. BM - Guide & Definitions, an amazing long title to discover limits' category="growth" />
          <ResourceThumbnail title='SOR SEO - fundamentals' category="dev" />
          <ResourceThumbnail title='External links - our top picks ' category="app" />

          <ResourceThumbnail title='ABM - Guide & Definitions' category="growth" />
          <ResourceThumbnail title='SOR SEO - fundamentals' category="dev" />
          <ResourceThumbnail title='External links - our top picks' category="app" />
      </Wrapper>
      </Col>
    </StyledResources>
  )
}
