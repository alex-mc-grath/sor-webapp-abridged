import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background: linear-gradient(30deg, #0e2967 10%, ${(props) => props.theme.colors.secondary});
    display:flex;
    justify-content:center;
    font-weight:medium;
    border: 5px solid white;
    border-radius: 1rem;
    
    p{
        margin: 0;padding: .4rem 0;
        font-size: 1.3rem;
        color:white;
    }
`;

export const Footer = () => {
    let newDate = new Date();
    let year = newDate.getFullYear();

  return (
    <StyledFooter>
        {/* <div>&#169;SOR SEO</div> */}
        <p className="copyright-text gradient-color4">
        &copy; {year} <a href="https://sor-seo.com">SOR SEO</a>
        </p>
    </StyledFooter>
  )
}
