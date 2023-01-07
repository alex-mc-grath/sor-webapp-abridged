import styled from 'styled-components';

export const StyledAllCampaigns = styled.div`
    width:100%;
    margin: 3rem auto;
    
    table{
        background: ${props=>props.theme.colors.secondaryShade2};
        background: #333333;
        /* width:80%;
        width: 70vw !important;
        font-size: 1.3rem;
        border-spacing:1rem 2rem;
        overflow:scroll;
        table-layout: fixed;
        color:lightgrey; */

        th{
            color:#505050;
            font-size: 1.3rem;
            font-weight: 600;
            text-align:center;
        }

        tr{
            color:#fafafa;
        }

    }
`;