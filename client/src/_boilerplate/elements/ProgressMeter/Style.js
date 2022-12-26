import styled from 'styled-components';

export const Style = styled.div`
    position:relative;

    .start-date, .end-date{
        position:absolute;
        font-size: 1rem;
    }
    .start-date{
        left:-.5rem;
    }
    .end-date{
        right:-.5rem;
    }
`;