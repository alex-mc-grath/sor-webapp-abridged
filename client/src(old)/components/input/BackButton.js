import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const StyledBackButton = styled.div`
    
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding: 2rem 1rem;
    padding-bottom:0;
    font-size: 1.3rem;

    a,button{
        color:grey;
    }
`;

const BackButton = ({to, text}) => {

    if(to){
        return (
            <StyledBackButton>
                <Link to={to}>
                <i className='fa-thin fa-arrow-left' />&nbsp; back to all resources
                </Link>
            </StyledBackButton>
          )
    } else {

  return (
    <StyledBackButton>
        <Link to={-1}>
        <i className='fa-thin fa-arrow-left' /> Back
        </Link>
    </StyledBackButton>
  )
}
}

export default BackButton