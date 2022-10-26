import React from 'react';
import { Link } from 'react-router-dom';
import { StyledBubbleBack } from './Style';
import { SorSeoSvg } from '../../containers/sor-seo/HomePage/SorSeoSvg';

export const BubbleBack = ({ to }) => {
  return (
    <StyledBubbleBack>
      <Link to={to} style={{ color: 'white' }}>
        <span id='back'>BACK</span>
        <SorSeoSvg variant='uno' />
      </Link>
    </StyledBubbleBack>
  );
};
