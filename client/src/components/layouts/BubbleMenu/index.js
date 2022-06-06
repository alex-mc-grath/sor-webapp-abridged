import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SorSeoSvg } from '../../containers/sor-seo/HomePage/SorSeoSvg';
import { StyledBubbleMenu } from './Style';

const BubbleMenu = ({ showNav, onceToggled }) => {
  const navigate = useNavigate();
  return (
    <StyledBubbleMenu>
      <SorSeoSvg onClick={() => onceToggled()} />
      <div className={`circle-container ${showNav ? 'show-nav' : ''}`}>
        <div className='circle'>
          <button id='open' onClick={() => navigate('/app/login')}>
            <i class='fa-solid fa-user-astronaut'></i>
          </button>
          <button id='open' onClick={() => navigate('/how-it-works')}>
            Growth
          </button>
          <button id='open' onClick={() => navigate('/dev')}>
            Dev
          </button>
        </div>
      </div>
    </StyledBubbleMenu>
  );
};

export default BubbleMenu;
