import styled from 'styled-components';
import { VariationArrow } from '../../../_boilerplate/elements/VariationArrow';

export const Style = styled.div`
    position:relative;
    /* display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    text-align:center; */
    display:flex;
    flex-direction:column;
    align-items:center;


   

    &::after{
        display:flex;
        content:'';
        position:absolute;
        right: -33%;
        top:50%;
        transform: translate(-50%,-50%);
        height:80%;
        width: .1rem;
        background: #505050; 
       
    }

    &:last-child::after{
        display:none;
    }
    

    span{
        &.name{
            color:#505050;
            font-size: 1.3rem;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &.stats-number{
            font-size: 3rem;
        }
    }
    
`;


export const StatsCard = ({name, statsNumber, variation = -10}) => {
  return (
    <Style>
        <span className='name'>{name}</span>
        <span className='stats-number'>{statsNumber}</span>
        <VariationArrow variation={variation} color={variation >= 0 ? '' : 'red'} />
    </Style>
  )
}