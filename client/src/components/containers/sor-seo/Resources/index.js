import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ResourceThumbnail } from './ResourceThumbnail'
import {GridRow} from '../../../layout/GridRow'
import { StyledResources, Wrapper } from './Style'
import { Col } from '../../../layout/Col'
import { AbmGuideDefinitionsPage } from './data'

export const Resources = () => {
  const navigate = useNavigate()

  return (
    <StyledResources>
      <Col>
      <h1 className='gradient-color4'>resources & documentation</h1>
      <Wrapper>
          <ResourceThumbnail
          onClick={()=>navigate('/resources/abm-guide-and-definitions')}
          title='ABM - Guide & Definitions'
          description='A quick start guide with some basics and terminology on Account-based Marketing'
          category="growth"
          date="August 2021"
          pageContent={<AbmGuideDefinitionsPage />}
          />
          <ResourceThumbnail
          onClick={()=>navigate('/resources/abm-guide-and-definitions')}
          title='Why SEO is at the core of every modern strategy'
          description='A quick start guide with some basics and terminology on Account-based Marketing'
          category="seo"
          date="January 2022"
          pageContent={<AbmGuideDefinitionsPage />}
          />
         <ResourceThumbnail
         onClick={()=>navigate('/resources/abm-guide-and-definitions')}
          title='Why "SOR SEO"?'
          description='A quick start guide with some basics and terminology on Account-based Marketing'
          category="app"
          date="September 2022"
          pageContent={<AbmGuideDefinitionsPage />}
          />
          {/*  <ResourceThumbnail
          title='Deep dive in our app'
          description='A quick start guide with some basics and terminology on Account-based Marketing'
          category="app"
          date="August 2021"
          pageContent={<AbmGuideDefinitionsPage />}
          /> */}
         
         
          {/* <ResourceThumbnail title='SOR SEO - fundamentals' category="dev" />
          <ResourceThumbnail title='External links - our top picks ' category="app" /> */}

          {/* <ResourceThumbnail title='ABM - Guide & Definitions' category="growth" />
          <ResourceThumbnail title='SOR SEO - fundamentals' category="dev" />
          <ResourceThumbnail title='External links - our top picks' category="app" /> */}
      </Wrapper>
      </Col>
    </StyledResources>
  )
}

// Account-based Marketing & B2B Growth - a deep-dive (Nov 2021)   category="growth"

