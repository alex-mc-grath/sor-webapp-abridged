import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BubbleBack, BubbleMenu } from '../../../layouts/BubbleBack';
import { SorSeoSvg } from '../HomePage/SorSeoSvg';
import { StyledResourcesOverview, Container, Section } from './Style';

export const ResourcesOverview = () => {
  return (
    <StyledResourcesOverview>
      <Helmet>
        <title>Account-based Marketing</title>
        <meta name='description' content='A React.js Boilerplate application homepage' />
      </Helmet>

      <div className='header'>
        <div className='small-container'>
          {/* <Link to="/" style={{ color: 'white' }}>
            <span id="back">BACK</span>
            <SorSeoSvg variant="uno" />
          </Link> */}
          {/* <BubbleBack to="/growth" /> */}
          <h1>
            A deep-dive into <br />
            Account-based Marketing & B2B Growth
          </h1>
          {/* <p>An organic approach</p> */}
        </div>
      </div>

      <Container>
        <Section>
          <h2>A sustainable and scalable approach to B2b growth</h2>
          <p>Account-based Marketing is a strategic approach in B2B Marketing, where the main focus is high value targeted accounts.</p>
          <p>ABM is a focused growth strategy.</p>
          <p>ABM gives you full control on the main storylines of your buyers journey.</p>
        </Section>

        <Section>
          <h2>The need to embrace a new organizational culture</h2>
          <p>Many CMOs understand that they’ll need to focus on disruptive growth, what often holds many of them back is the current culture of their organizations.</p>
          <p>Modern buyers have higher expectations toward brands: they need to stand for something bigger than the products/services they sell.</p>
          <p>They need to inspire, set new standards, have a clear purpose and emphasize certain values.</p>
          <p className='reference'>
            <strong>reference: </strong>
            Living Business Report - Accenture
          </p>
        </Section>

        <Section>
          <h3>The implicit value of Account-based Marketing:</h3>
          <ul>
            <li>Shorter Sales Cycles</li>
            <li>Higher Time Investment Value</li>
            <li>Easier Evaluation of ROI</li>
            <li>Sales and Marketing Team Alignment</li>
          </ul>
        </Section>
        <Section>
          <div className='key-stats-section'>
            <div className='key-stat gradient-color'>
              <span className='scaled-font'>80% of B2B companies report that ABM increases their customer lifetime value.</span>
            </div>
            <div className='key-stat gradient-color'>
              <span className='scaled-font'>87% of marketers who measure ROI say ABM outperforms every other marketing investment.</span>
            </div>
          </div>
        </Section>
        <Section>
          <p>Increased win rates&nbsp; |&nbsp; Increased engagement&nbsp; | &nbsp;Increased Average Deal Size</p>
          <ul>
            <li>Account Insights & Profiling</li>
            <li>Cross-Channel Engagement</li>
            <li>Personalized and content-rich experiences</li>
            <li>Long-term business growth</li>
            <li>Boost revenue</li>
            <li>Treat your target accounts like humans</li>
          </ul>
        </Section>
        <Section>
          <div className='major-quote'>
            <i class='fas fa-quote-left'></i>&nbsp;The whole point of an ABM strategy is to present your prospects with the information they need, instead of having them search for it.
          </div>

          <div className='section' data-aos='zoom-out-right' data-aos-delay='400'>
            <h4>Lead Generation vs ABM - What’s the difference?</h4>
            <p>
              A great way to understand the difference between lead generation and ABM is with a good old fishing analogy.
              <br /> Please refer to the table below:
            </p>
          </div>
        </Section>
        <Section>
          <h2>A definitive trend</h2>
          <div className='key-stats-section' id='key-stat-images'>
            <div className='key-stat'>
              ABM budgets account for <span className='scaled-font'>36% of digital marketing spend </span>
              and are growing 9% annually
              <p className='reference'>https://business.linkedin.com/marketing-solutions/blog/b2b-content-marketing/2020/account-based-marketing</p>
            </div>
          </div>
        </Section>
        <Section>
          <div className='quotes'>
            <p>The modern organizations hold the customer central to their thinking and vision, not just in the services they provide, but in how they pivot and adapt as a company. They create what we call a Living Business: one that continuously adapts at speed and scale to achieve total customer relevance and sustained growth.</p>
            <span className='reference'>
              <strong>reference: </strong>
              Living Business Report - Accenture
            </span>
          </div>
        </Section>
        <Section></Section>
      </Container>
    </StyledResourcesOverview>
  );
};
{
  /* 
// <div className="account-based-marketing">

// <div className="container">

//       
//         <div className="key-stats-section">
//           <div className="key-stat gradient-color">
//             <span className="scaled-font">80% of B2B companies report that ABM increases their customer lifetime value.</span>
//           </div>
//           <div className="key-stat gradient-color">
//             <span className="scaled-font">87% of marketers who measure ROI say ABM outperforms every other marketing investment.</span>
//           </div>
//         </div>

//         <br />

//         <div className="section">
//           <h4>Other advantages of ABM</h4>
//           <p>Increased win rates&nbsp; |&nbsp; Increased engagement&nbsp; | &nbsp;Increased Average Deal Size</p>
//           <ul>
//             <li>Account Insights & Profiling</li>
//             <li>Cross-Channel Engagement</li>
//             <li>Personalized and content-rich experiences</li>
//             <li>Long-term business growth</li>
//             <li>Boost revenue</li>
//             <li>Treat your target accounts like humans</li>
//           </ul>
//         </div>
//       </div>

//       <div className="major-quote">
//         <i class="fas fa-quote-left"></i>&nbsp;The whole point of an ABM strategy is to present your prospects with the information they need, instead of having
//         them search for it.
//       </div>

//       <div className="section"
//       // data-aos="zoom-out-right" data-aos-delay="400"
//       >
//         <h4>Lead Generation vs ABM - What’s the difference?</h4>
//         <p>
//           A great way to understand the difference between lead generation and ABM is with a good old fishing analogy.
//           <br /> Please refer to the table below:
//         </p>

//         <div className="grid-2">
//           <ul aria-label="Fishing with nets:">
//             Fishing with nets:
//             <li>Quantify Target Audiences</li>
//             <li>Nurturing Process</li>
//             <li>A/B Testing</li>
//             <li>Lead Conversion</li>
//           </ul>
//           <ul aria-label="Fishing with spears:">
//             Fishing with spears:
//             <li>Account Selection</li>
//             <li>Prospect Identification</li>
//             <li>Total Customer Relevance</li>
//             <li>Account Conversion</li>
//           </ul>
//         </div>

//         <p><strong>Casting a net</strong> is closer to traditional b2b marketing strategy - educating and nurturing to conversion.</p>
//         <p><strong>Fishing with spears</strong>, however, puts the main focus on high value accounts to begin with.</p>
//       </div>

//       <div className="key-stats-section" id="key-stat-images">
//         <div className="key-stat">
//           ABM budgets account for{" "}
//           <span className="scaled-font">
//             <br />
//             36% of digital marketing spend
//           </span>
//           <br />
//           and are growing 9% annually
//           <br />
//           <span className="reference">
//             https://business.linkedin.com/marketing-solutions/blog/b2b-content-marketing/2020/account-based-marketing
//           </span>
//         </div>
//       </div>

//         <div className="quotes">
//           <p>
//             The modern organizations hold the customer central to their thinking and vision, not just in the services they provide, but in how they pivot and
//             adapt as a company. They create what we call a Living Business: one that continuously adapts at speed and scale to achieve total customer relevance
//             and sustained growth.
//           </p>
//           <span className="reference">
//             <strong>reference: </strong>
//             Living Business Report - Accenture
//           </span>
//         </div>

//       <AbmCta />
//     </div>
//     </div */
}
