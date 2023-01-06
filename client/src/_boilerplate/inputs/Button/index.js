/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';

function Button(props) {
  const className = props.className;
  // Render an anchor tag
  let button = (
    <StyledButton className={className} onClick={props.onClick} type={props.type}>
      {Children.toArray(props.children)}
    </StyledButton>
  );
  // let button = (
  //   <A href={props.href} className={className} onClick={props.onClick}>
  //     {Children.toArray(props.children)}
  //   </A>
  // );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.to) {
    button = (
      <Link to={props.to} href={props.href} className={className} onClick={props.onClick}>
        {Children.toArray(props.children)}
      </Link>
    );
  }
  // if (props.to) {
  //   button = (
  //     <StyledButton className={className} onClick={props.to}>
  //       {Children.toArray(props.children)}
  //     </StyledButton>
  //   );
  // }

  // return <Wrapper>{button}</Wrapper>;
  return button;
}

Button.propTypes = {
  to: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  // children: PropTypes.node.isRequired,
};

export default Button;