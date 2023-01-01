import { Container, Img, Layout, Name, Section, Slug, StyledNameSignature, Subject } from './Style'
import { PortfolioItem } from './portfolioItem'
import {imgs, projects} from './data'

const NameSignature = ({name, slug, subject}) =>{
    return(
        <StyledNameSignature>
                <Slug>{slug}</Slug>
                <Name>{name}</Name>
                <Subject>{subject}</Subject>
        </StyledNameSignature>

    )
}


export const Portfolio = () => {

    return (
    	<Layout>
            {/* {data.map((project) => <div>{project.name}</div>)} */}
    		<Section>
                <Container>
                    <Img src={imgs[3]} top="7vh" right='44vw'  />
                    <Img src={imgs[1]} bottom='4vh' right='23.5vw' />
                    <Img src={imgs[5]} top='10vh' right='3vw' />
                </Container>
                <NameSignature 
                    name='Alex McGrath'
                    slug='Creative Director'
                    subject='Recent projects portfolio'
                />
            </Section>

    		{projects.map((project) => 
                <PortfolioItem 
                    name={project.name}
                    overview={project.overview}
                    highlights={project.highlights}
                    description={project.description}
                    logo={project.logo}
                    imgs={project.imgs}
                    color={project.color}
                /> )}
    	</Layout>
    )
}
