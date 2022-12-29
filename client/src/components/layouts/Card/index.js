import styled from 'styled-components/macro';
import { Card } from '../../../_boilerplate/layouts/Card';

export const DarkCard = styled(Card)`
    background: #333333;
    color: #fafafa;
    /* gap: calc(15% - .5rem); */
    gap: ${props=>props.gap || 'calc(15% - .5rem)'};
    display: ${props=>props.display};
    padding: 2rem;

    h4{
        font-weight:600;
        letter-spacing: 0.5px;
    }
`;