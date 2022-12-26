import styled, { css } from 'styled-components/macro';
import { DarkCard } from '../../../components/layouts/Card';

export const Style = styled.div`
    width:100%;
    flex-direction:column;
    justify-content:center;
    display:flex;
`;

export const Card = styled(DarkCard)`
        display:grid;
        grid-template-columns: 1fr 2fr 4fr;
        width:100%;
        padding:0.65rem 2rem;
        margin: .4rem 0;
        background: ${props=>props.theme.colors.tertiary};

        ${props=>props.active && css`

        background: #001016;

        i.fa-duotone{
                color: ${props=>props.theme.colors.secondary};
        }

        .action,.entity {
            color: ${props=>props.theme.colors.secondary};
        }
        `}

        i.fa-duotone{
            font-size:2rem;
            /* color: ${props=>props.theme.colors.secondary}; */
        }

        .action{
            text-transform:uppercase;
            font-size:1.2rem;
            letter-spacing:0.1rem;
            
        }

        .entity{
            font-size:1.3rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right:auto;
        }
`;