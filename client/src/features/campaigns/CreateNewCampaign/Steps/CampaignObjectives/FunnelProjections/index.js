import styled from 'styled-components'

export const Layout = styled.div`
    height: 100%;
`;
export const Container = styled.div`
    width: 80%;
    height: 100%;
    padding: 1.2rem;
`;

export const Bar = styled.div`
    position:relative;
    width:${props=>props.width};
    height: 2rem;
    border-radius: .7rem;
    background: grey;
    margin: 1.2rem 0;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    font-size: 1.2rem;
    padding-right: .7rem;

    &::before {
        content:'${props=>props.text}';
        position:absolute;
        color:white;
        display:flex;
    }

    &:first-of-type{
        margin-top:0;
        background: #505050;
        background: #7D3AC1;
    }
    &:nth-of-type(2){
        margin-top:0;
        background: #176BA0;
        background: #AF4BCE;
    }
    &:nth-of-type(3){
        margin-top:0;
        background: #19AADE;
        background: #DB4CB2;
    }
    &:nth-of-type(4){
        margin-top:0;
        background: #1AC9E6;
        background: #EB548C;
        
        &:before{
            transform: translateX(3rem);
        }
    }
    &:nth-of-type(5){
        margin-top:0;
        background: #1AC9E6;
        background: #EA7369;

        &:before{
            transform: translateX(3rem);
        }
    }
    &:nth-of-type(6){
        margin-top:0;
        background: #6DF0D2;
        background: #F0A58F;

        &:before{
            transform: translateX(3rem);
        }
    }
`;
    
export const FunnelProjections = () => {
    return (
    	<Layout>
    		<Container>
                <Bar width='100%' text='10 392'/>
                <Bar width='70%' text='830' />
                <Bar width='20%' text='63' />
                <Bar width='10%' text='234' />
                <Bar width='5%' text='103' />
                <Bar width='2%' text='43' />
            </Container>
    	</Layout>
    )
}
