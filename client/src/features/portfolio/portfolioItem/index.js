import { Col } from "../../../_boilerplate/layouts/Col"
import { GridRow } from "../../../_boilerplate/layouts/GridRow"
import { Row } from "../../../_boilerplate/layouts/Row"
import { Logo } from "../../../_boilerplate/elements/Logo"

import { Badge, Container, Label, Section, TextContainer } from "../Style"

export const PortfolioItem = ({name, overview, highlights, description, logo, imgs, financials, timeline}) => {
    return (
    	<Section>
                <Container>
                    <GridRow col='2' colTemplate='4fr 5fr' gridGap='0'>
                        <TextContainer>
                            <Label>Client name:</Label>
                            {/* {console.log(logo)} */}
                            {/* {logo ? <Logo src={logo} /> : {name}} */}
                            {name}

                            <Col margin='2rem 0'>
                                <Label>Project overview:</Label>
                                
                                <Row justify='flex-start' margin='2rem 0'>
                                    {overview.map((item, idx)=>
                                    <Badge>
                                        {item || '$10 K - $15 K'}
                                    </Badge>)}
                                </Row>
                            </Col>

                            <Col margin='2rem 0'>
                                <Label>Project description:</Label>
                                <p>{description ||'Modern reporting whistleblowing system under EU Law'}</p>
                            </Col>
                            <Col margin='2rem 0'>
                                <Label>Key highlights:</Label>
                                    {/* {highlights.map((highlight)=>
                                <ul>
                                    <li>{highlight.map((i)=><li>{i}</li>)}</li>
                                    
                                </ul>
                                    )} */}
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
    