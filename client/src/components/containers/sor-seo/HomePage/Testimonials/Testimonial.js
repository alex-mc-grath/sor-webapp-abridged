import React, { useState } from 'react'
import styled from 'styled-components';

const StyledTestimonial = styled.div`

margin: 1rem 0;
min-height: 32vh;
  
  .fa-quote-left{
    font-size:2rem;
    background: linear-gradient(-30deg, #000000,#130F40,#000000);
    background: linear-gradient(-40deg, ${(props) => props.theme.colors.secondary} 10%, #0e2967 10%, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.secondary});
    color:white;
    padding: .2rem .4rem;
    margin-right:.6rem;
    border-radius: 50%;
  }

  &:hover{
    
    *{
      /* cursor:crosshair; */
      cursor: url(logo-sor-favicon.png);
      cursor: url(logo-sor-favicon.cur) 2 4, auto;
      /* cursor: url(cursor_2.png) 2 2, pointer; */
    }
    &:after{
        content:'click to expand';
        color: ${(props) => props.theme.colors.secondary};
        font-weight:bold;
        position:absolute;
      }
  }

  .source{
    padding: 0;
    margin: .4rem 0;
  }

  .sourceLocation{
    font-size: 1.1rem;
    color:grey;
    padding: 0;
    margin:0;
  }
`;

export const Testimonial = ({textShort,text, source, sourceLocation}) => {

    const [showSetting, setShowSetting] = useState(false)
  
    return (
          <StyledTestimonial onClick={()=> setShowSetting(!showSetting)}>
            <p><i className="fa-solid fa-quote-left"></i> {showSetting ? text : textShort}</p>
            <p className="source">{source}</p>
            <p className="sourceLocation">{sourceLocation}</p>
          </StyledTestimonial>
      )
  }