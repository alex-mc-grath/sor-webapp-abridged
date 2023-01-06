import styled from 'styled-components'
import { ClientLogos } from './clientLogos';
import { Hero } from './hero';
import { Why } from './why';
import { Why2 } from './why2';
import { Testimonials } from './testimonials';
import { GetStarted } from './getStarted';

export const Layout = styled.div`

`;
    
export const Home = () => {
    return (
    	<Layout>
    		
            <Hero view={true} content={{h1: 'introText'}} />
 
            <ClientLogos />

            <Why />

            <Why2 />
          
            <Testimonials />

            <GetStarted />
    	</Layout>
    )
}
