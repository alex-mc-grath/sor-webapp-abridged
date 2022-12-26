import styled, { css } from 'styled-components'
import { GridRow } from '../../../../_boilerplate/layouts/GridRow';

export const Layout = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:space-between;

     i.fa-triangle-exclamation{
        font-size: 3rem;
    }

    span{
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
`;


export const AlertBadge = styled.div`
    
    position:relative;
    display:none;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    /* background: ${props=>props.theme.colors.danger}; */
    width: 1.8rem;
    height: 1.8rem;
    position:absolute;
    border-radius: 50%;
    top:-1rem;
    right:0;
    color: white;
    font-weight:bold;

    ${props=>props.count > 0 && css`
        display:flex;
        background: ${props=>props.color};
         
        /* &:first-child{
            background: ${props=>props.theme.colors.danger};
        }
        &:nth-child(2){
            background: ${props=>props.theme.colors.warning};
        }
        &:nth-child(3){
            background: ${props=>props.theme.colors.success};
        } */
    `}

    &::before{
        content: '${props=>props.count}';
        color:white;
        width:100%;
        height: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
}

`

export const Card = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: #505050 !important;

    &::before{
        content:'';
        position:absolute;
        right:-10%;
        width: .1rem;
        height:60%;
        background: #505050;
    }

    :last-of-type::before{
    display:none;}

    ${props=>props.count > 0 && css`
        
        color: ${props=>props.theme.colors.danger}; 
        
        
        &:first-of-type{
            color: ${props=>props.theme.colors.danger} !important;
        }
        &:nth-of-type(2){
            color: ${props=>props.theme.colors.warning} !important;
        }
        &:nth-of-type(3){
            color: ${props=>props.theme.colors.success} !important;
        }
    `}

   
`
 

export const QuickMetricsIconsDashboard = () => {
    return (
    	<Layout>
            <GridRow col='3' margin='0' gridGap=''>
                <Card count={0}>
                       
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>scanning error</span>
                <AlertBadge color='red' count={0} />
                </Card>
                
                <Card count={0}>
                       
                    <i class="fa-duotone fa-triangle-exclamation"></i>
                    <span>warning: not completed</span>
                
                <AlertBadge color='yellow' count={0}/>
                </Card>
                
                <Card count={0}>
                       
                    <i class="fa-light fa-triangle-exclamation"></i>
                    <span>upstream warning</span>
                <AlertBadge color='green' count={0} />
                </Card>
            </GridRow>
    	</Layout>
    )
}
