import { Col } from "../../../_boilerplate/layouts/Col"
import { GridRow } from "../../../_boilerplate/layouts/GridRow"
import { Row } from "../../../_boilerplate/layouts/Row"
import { Logo } from "../../../_boilerplate/elements/Logo"

import { Badge, Container, Label, List, Section, TextContainer } from "../Style"
import { WhistLawLongLogo } from "../../../app/assets/icons/whistlawLongLogo"

export const PortfolioItem = ({name, overview, highlights, description, logo, imgs, financials, timeline, color}) => {
    return (
    	<Section>
                <Container>
                    <GridRow col='2' colTemplate='4fr 5fr' gridGap='0' margin='0'>
                        <TextContainer>
                            <Label>Client name:</Label>
                            {/* {console.log(logo)} */}
                            {logo ? <img src={logo} className='logo' alt="logo" style={{width:"30%", marginTop:'1rem'}} /> : <p>{name}</p> }
                            {/* <Logo src={logo} />  */}
                            {/* {name} */}
                            {/* <WhistLawLongLogo width='20rem' height='100px' /> */}
                            


                            <Col margin='0.5rem 0'  marginTop="2rem">
                                <Label>Project overview:</Label>
                                
                                <Row justify='flex-start' margin='1rem 0'>
                                    {overview.map((item, idx)=>
                                    <Badge
                                     color={color}
                                     >
                                        {item || '$10 K - $15 K'}
                                    </Badge>)}
                                </Row>
                            </Col>

                            <Col margin='0.5rem 0'  marginTop="2rem">
                                <Label>Project description:</Label>
                                <p className="description">{description ||'Modern reporting whistleblowing system under EU Law'}</p>
                            </Col>

                            <Col margin='0rem 0' marginTop="2rem">
                                <Label>Key highlights:</Label>
                                <GridRow col='2' gridGap='0rem 2rem' width='100%' padding='0 2rem' margin='0' justify='space-between'>
                                    {highlights.map((highlight)=>
                                        <List>
                                            {highlight.map((i)=><li>{i}</li>)}
                                        </List>
                                    )}
                                </GridRow>
                            </Col>
                         
                        </TextContainer>

                        <img src={imgs[0]} alt="" className="test-img" />
                    </GridRow>
                    

                    <GridRow col='3'>
                        {/* <Img src={sorappDashboard}  />
                        <Img src={sorappDashboard}  />
                        <Img src={sorappDashboard}  /> */}

                        <img src={imgs[1]} alt="" className="test-img" />
                        <img src={imgs[2]} alt="" className="test-img" />
                        <img src={imgs[3]} alt="" className="test-img" />
                    </GridRow>

                </Container>
         </Section>
    )
}
    