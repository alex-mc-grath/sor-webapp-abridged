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
          <div className="button-holder">
          <button id='open' onClick={() => {navigate(`${linkOptions[1]}`); onceToggled()}}>
            {/* <i class='fa-solid fa-user-astronaut'></i> */}
            <UserSvg />
          </button>
          </div>
          <div className="button-holder">
          <button id='open' onClick={() => {navigate(`${linkOptions[2]}`); onceToggled()}}>
            {textOptions[1]}
          </button>
          </div>
          <div className="button-holder">
          <button id='open' onClick={() => {navigate(`${linkOptions[0]}`); onceToggled()}}>
            {textOptions[0]}
          </button>
          </div>
        </div>
      </div>
    </StyledBubbleMenu>
  );
};

export default BubbleMenu;
