import React from 'react';
import { StyledResourcePage, Container, Section } from '../../Style';
import { Helmet } from 'react-helmet';

export const AccountBasedMarketing = () => {
  return (
    <StyledResourcePage>
      <Helmet>
        <title>Account-based Marketing</title>
        <meta name="description" content="A React.js Boilerplate application homepage" />
      </Helmet>

      <div className="header">
        <div className="small-container">
          {/* <Link to="/" style={{ color: 'white' }}>
            <span id="back">BACK</span>
            <SorSeoSvg variant="uno" />
          </Link> */}
          {/* <BubbleBack to="/how-it-works" /> */}
          <h1>Harness the power of Account-based Marketing</h1>
          <p>an organic approach</p>
        </div>
      </div>

      <Container>
        <Section>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae.</h2>
          <p>Account-based Marketing is a strategic approach in B2B Marketing, where the main focus is high value targeted accounts.</p>
          <p>ABM is a focused growth strategy.</p>
          <p>ABM gives you full control on the main storylines of your buyers journey.</p>
        </Section>

        <Section>
          <p>Many CMOs understand that they’ll need to focus on disruptive growth, what often holds many of them back is the current culture of their organizations.</p>
          <p>Modern buyers have higher expectations toward brands: they need to stand for something bigger than the products/services they sell.</p>
          <p>They need to inspire, set new standards, have a clear purpose and emphasize certain values.</p>
          <p className="reference">
            <strong>reference: </strong>
            Living Business Report - Accenture
          </p>
        </Section>

        <Section></Section>
        <Section></Section>
      </Container>
    </StyledResourcePage>
  );
};
