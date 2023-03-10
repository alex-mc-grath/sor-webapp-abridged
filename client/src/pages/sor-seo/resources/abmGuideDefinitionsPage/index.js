import styled from 'styled-components';
import BackButton from '../../../../_boilerplate/inputs/BackButton';
import { Col } from '../../../../_boilerplate/layouts/Col';
import { Section } from '../../../../_boilerplate/layouts/Section';

const StyledAbmGuideDefinitionsPage = styled.article`
    /* // to all pages(for all resources) */

    /* padding-top:15vh; */

    h1{
        font-size: 2.6rem;
    }


  .reference {
    font-size: 1.2rem;
    color: darkblue;
  }

  .major-quote{
    font-size: 2.5rem;
    margin: 5rem auto;
  }

  .key-stat{
    /* max-width:550px; */
  }

  ul {
    position: relative;
    /* width:500px; */
    margin:auto 0;
    font-size: 1.6rem;
    li {
      left: 0rem;
      transform: translateX(-0rem);
      transition: all .35s ease-in-out;
      
      &:hover {

        &:before{
          content:'> ';
          font-weight:bold;
          position:absolute;
          left: -2rem;
          transform: translateX(-5rem);
          transition: all .35s ease-in-out;
        }
    margin:0 5px 0 -15px;
    color: #f00;
}
      }
    }

    
    @media (min-width:900px){
      .col{
      width:65%;
    }
    }

    /* // for this spiecific ABMGuide page */


`;

const SectionMod = styled(Section)`
  margin: 3rem 0;
  min-height:fit-content;
  align-items:flex-start;
`

export const AbmGuideDefinitionsPage = () => {

  return (
    <StyledAbmGuideDefinitionsPage>

      <BackButton to='/resources' />

      <Col align='flex-start' className='col'>
        <h1>
          Account-based Marketing & B2B Growth - overview<br /> guide & definitions
        </h1>
        <SectionMod>
          <h2>A sustainable and scalable approach to B2b growth</h2>
          <p>Account-based Marketing is a strategic approach in B2B Marketing, where the main focus is high value targeted accounts.</p>
          <p>ABM is a focused growth strategy.</p>
          <p>ABM gives you full control over the main storylines experienced by your buyers in their journey.</p>
        </SectionMod>

        <SectionMod>
          <h2>The need to embrace a new organizational culture</h2>
          <p>Many CMOs understand that they???ll need to focus on disruptive growth, what often holds many of them back is the current culture of their organizations.</p>
          <p>Modern buyers have higher expectations toward brands: they need to stand for something bigger than the products/services they sell.</p>
          <p>They need to inspire, set new standards, have a clear purpose and emphasize certain values.</p>
          <p className='reference'>
            <strong>reference: </strong>
            Living Business Report - Accenture
          </p>
        </SectionMod>

        <SectionMod>
          <h3>The implicit value of Account-based Marketing:</h3>
          <ul>
            <li>Shorter Sales Cycles</li>
            <li>Higher Time Investment Value</li>
            <li>Easier Evaluation of ROI</li>
            <li>Sales and Marketing Team Alignment</li>
          </ul>
        </SectionMod>
        <SectionMod>
          <Col>
            <div className='major-quote'>
              <span className='scaled-font'><i className="fa-solid fa-quote-left"></i> 80% of B2B companies report that ABM increases their customer lifetime value.</span>
            </div>
            <div className='major-quote'>
              <span className='scaled-font'><i className="fa-solid fa-quote-left"></i> 87% of marketers who measure ROI say ABM outperforms every other marketing investment.</span>
            </div>
            <div className='major-quote'>
              <i class='fas fa-quote-left'></i>&nbsp;The whole point of an ABM strategy is to present your prospects with the information they need, instead of having them search for it.
            </div>
          </Col>
        </SectionMod>
        {/* <SectionMod>
          <h3>Build trust from the start</h3>
          <Col>Increased win rates&nbsp; |&nbsp; Increased engagement&nbsp; | &nbsp;Increased Average Deal Size</Col>
          <ul>
            <li>Account Insights & Profiling</li>
            <li>Cross-Channel Engagement</li>
            <li>Personalized and content-rich experiences</li>
            <li>Long-term business growth</li>
            <li>Boost revenue</li>
            <li>Treat your target accounts like humans</li>
          </ul>
        </SectionMod> */}
        {/* <SectionMod>
          

 <div className='SectionMod' data-aos='zoom-out-right' data-aos-delay='400'>
            <h4>Lead Generation vs ABM - What???s the difference?</h4>
            <p>
              A great way to understand the difference between lead generation and ABM is with a good old fishing analogy.
              <br /> Please refer to the table below:
            </p>
          </div> 
        </SectionMod> */}
        <SectionMod>
          <h2>A definitive trend</h2>
          <div className='key-stats-SectionMod' id='key-stat-images'>
            <div className='key-stat'>
              ABM budgets account for <span className='scaled-font'>36% of digital marketing spend </span>
              and are growing 9% annually
              <p className='reference'>https://business.linkedin.com/marketing-solutions/blog/b2b-content-marketing/2020/account-based-marketing</p>
            </div>
          </div>
        </SectionMod>
        <SectionMod>
          <div className='quotes'>
            <p>The modern organizations hold the customer central to their thinking and vision, not just in the services they provide, but in how they pivot and adapt as a company. They create what we call a Living Business: one that continuously adapts at speed and scale to achieve total customer relevance and sustained growth.</p>
            <span className='reference'>
              <strong>reference: </strong>
              Living Business Report - Accenture
            </span>
          </div>
        </SectionMod>
      </Col>
    </StyledAbmGuideDefinitionsPage>
  )
}