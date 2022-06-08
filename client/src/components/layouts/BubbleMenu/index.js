import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SorSeoSvg } from '../../containers/sor-seo/HomePage/SorSeoSvg';
import { StyledBubbleMenu } from './Style';
import { UserSvg } from '../../../media/userSvg';

export const BubbleMenu = ({ showNav, onceToggled, textOptions, linkOptions }) => {
  const navigate = useNavigate();
  return (
    <StyledBubbleMenu>
      <SorSeoSvg onClick={() => onceToggled()} />
      <div className={`circle-container ${showNav ? 'show-nav' : ''}`}>
        <div className='circle'>
          <button id='open' onClick={() => navigate(`${linkOptions[1]}`)}>
            {/* <i class='fa-solid fa-user-astronaut'></i> */}
            <UserSvg />
          </button>
          <button id='open' onClick={() => navigate(`${linkOptions[2]}`)}>
            {textOptions[1]}
          </button>
          <button id='open' onClick={() => navigate(`${linkOptions[0]}`)}>
            {textOptions[0]}
          </button>
        </div>
      </div>
    </StyledBubbleMenu>
  );
};

export default BubbleMenu;
