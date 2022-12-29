import styled, { css } from 'styled-components'
import { StatsCard } from '../../../components/layouts/StatsCard';
import { Col } from '../../../_boilerplate/layouts/Col';
import { GridRow } from '../../../_boilerplate/layouts/GridRow';
import { Row } from '../../../_boilerplate/layouts/Row';

export const Layout = styled.div`

&:hover{
    .name{
       color:${props=>props.theme.colors.secondary};
    }
}

`;
export const ColoredTag = styled.span`

        content:'${props=>props.text}';
        width:auto;
        height: 2rem;
        
        &::before{
            content:'${props=>props.text}';
            background: #505050;
            color: ${props=>props.theme.colors.secondaryShade2};
            border-radius: 5rem;
            text-transform:uppercase;
            font-size: 1.05rem;
            font-weight:bold;
            padding: 0.08rem 0.9rem;
        }

        ${props=>props.active && css`

        &::before{
                background: ${props=>props.theme.colors.secondaryShade1};
                color: ${props=>props.theme.colors.secondary};
                box-shadow: .0px 0px 3px 0.5px ${props=>props.theme.colors.secondary};
        }
        `}
      
`;

export const Card = styled(StatsCard)`
    .name{
        line-height: 1.2rem;
    }
    .stats-number{
        font-size: 2rem !important;
    }

    .variation-arrow{
        display:flex;
        align-items:center;
        justify-content:center;
        .circle{
           transform:scale(0.7);
           background: ${props=>props.theme.colors.secondary};
        }
        span{
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            color:${props=>props.theme.colors.secondary};
        }
        svg{
            fill: white;
        }
    }

`
    
export const GeoPenetration = () => {
    return (
    	<Layout>
            <Row margin='0 0' marginLeft='auto' width='40%' align='flex-start' justify='flex-start'>
                <Col width='50%' justify='flex-start' margin='0'>
                    <ColoredTag text='wave 1' />
                    <ColoredTag text='wave 2' active />
                    <ColoredTag text='wave 3' />
                </Col>
                
                <Card name="Unlocked" statsNumber={31} />
            </Row>
    	</Layout>
    )
}
