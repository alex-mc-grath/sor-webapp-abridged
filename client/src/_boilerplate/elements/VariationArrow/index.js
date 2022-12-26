import styled, { css } from 'styled-components/macro';
import { Row } from '../../layouts/Row';

export const Style = styled.div`
        position:relative;
        border-radius: 50%;
        /* width: 5rem;
        height: 5rem; */
        display:inline-block;
        fill:#00FFAA;

   span{
        color: #00FFAA;
    }


    .circle{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 2.3rem;
        height:2.3rem;
        background:#006744;
        border-radius: 50%;
        
    svg{
        position:relative;
        fill:#00FFAA;
        transform: scale(0.7) rotate(0);
        /* width: 2rem;
        height: 2rem; */
    }


}

    ${props=>props.color = 'red' && css`

        svg{
        transform: scale(0.7) rotate(90deg);
        fill:#ed422e;
        /* background:#4e2827; */
    }
    `}
`;


export const VariationArrow = ({variation, ...props}) => {
  return (
    <Style {...props}>
        <Row margin='0'>
            <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
            </div>

            <span>{variation}%</span>
            
        </Row>
    </Style>
  )
}

