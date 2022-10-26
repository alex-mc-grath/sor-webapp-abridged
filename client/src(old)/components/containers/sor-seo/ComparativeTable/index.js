import React, { useState } from 'react';
import { StyledComparativeTable } from './Style';

export const ComparativeTable = ({ item, itemDescription }) => {
  const [viewDesc, setViewDesc] = useState(false);

  return (
    <StyledComparativeTable>
      <h2>SOR SEO vs Traditional Account-based Marketing</h2>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th className=''></th>
            <th className='logo-header'>
              <div className='bh-logo'>SOR SEO</div>
            </th>
            <th className='last-column'>
              <h4>Other ABM Platforms</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='table-comparison-text'>
              Prospect-based automations Sales Navigator list integrations
              <span className='question-circle-o toggler-tooltip' id='toggler-tooltip-1' tabindex='0'>
                <a
                  href='javascript:void(0)'
                  className='comparison_table_tooltip'
                  data-text='All providers are board-certified psychologists (PsyD), licensed professional counselors (LPC), licensed marriage and family therapists (LMFT), or licensed clinical social workers (LCSW)'
                  data-original-title=''
                  title=''>
                  <i className='info-circle' aria-hidden='true'></i>
                </a>
              </span>
            </td>
            <td className='table-comparison-icon feature-present'>
              <i className='fa-solid fa-check'></i>
            </td>
            <td className='table-comparison-icon feature-present'>
              <i className='fa-solid fa-check'></i>
            </td>
          </tr>
          <tr>
            <td className='table-comparison-text'>
              LinkedIn detection
              <span className='question-circle-o toggler-tooltip' id='toggler-tooltip-2' tabindex='0'>
                <a
                  href='javascript:void(0)'
                  className='comparison_table_tooltip'
                  data-text="Commute to the therapist's location, spend time in the waiting room, sit in their office"
                  data-original-title=''
                  title=''>
                  <i className='info-circle' aria-hidden='true'></i>
                </a>
              </span>
            </td>
            <td className='table-comparison-icon feature-present-not'>
              <i class='fa-solid fa-xmark'></i>
            </td>
            <td className='table-comparison-icon feature-present'>
              <i className='fa-solid fa-check'></i>
            </td>
          </tr>
          <tr>
            <td className='table-comparison-text'>
              A systematic approach that unlocks 80% prospects and organizations outside your GEOs
              <span className='question-circle-o toggler-tooltip' id='toggler-tooltip-3' tabindex='0'>
                <a href='javascript:void(0)' className='comparison_table_tooltip' data-text='Send and receive messages to your therapist, no scheduling required!' data-original-title='' title=''>
                  <i className='info-circle' aria-hidden='true'></i>
                </a>
              </span>
            </td>
            <td className='table-comparison-icon feature-present'>
              <i className='fa-solid fa-check'></i>
            </td>
            <td className='table-comparison-icon feature-present-not'>
              <i class='fa-solid fa-xmark'></i>
            </td>
          </tr>
          <tr>
            <td className='table-comparison-text'>
              High fidelity targeting automations
              <span className='question-circle-o toggler-tooltip' id='toggler-tooltip-4' tabindex='0'>
                <a href='javascript:void(0)' className='comparison_table_tooltip' data-text='Real-time conversation over instant messaging ' data-original-title='' title=''>
                  <i className='info-circle' aria-hidden='true'></i>
                </a>
              </span>
            </td>
            <td className='table-comparison-icon feature-present'>
              <i className='fa-solid fa-check'></i>
            </td>
            <td className='table-comparison-icon feature-present-not'>
              <i class='fa-solid fa-xmark'></i>
            </td>
          </tr>
          <tr>
            <td className='table-comparison-text'>
              Ability to engage each account personally and meaningfully
              <span className='question-circle-o toggler-tooltip' id='toggler-tooltip-5' tabindex='0'>
                <a href='javascript:void(0)' className='comparison_table_tooltip' data-text='Talk with your therapist over the phone at a scheduled time' data-original-title='' title=''>
                  <i className='info-circle' aria-hidden='true'></i>
                </a>
              </span>
            </td>
            <td className='table-comparison-icon feature-present'>
              <i className='fa-solid fa-check'></i>
            </td>
            <td className='table-comparison-icon feature-present-not'>
              <i class='fa-solid fa-xmark'></i>
            </td>
          </tr>
          <tr>
            <td className='table-comparison-text'>
              Analytics and Client Portal
              <span className='question-circle-o toggler-tooltip' id='toggler-tooltip-6' tabindex='0'>
                <a href='javascript:void(0)' className='comparison_table_tooltip' data-text='Face-to-face session with your therapist over video at a scheduled time' data-original-title='' title=''>
                  <i className='info-circle' aria-hidden='true'></i>
                </a>
              </span>
            </td>
            <td className='table-comparison-icon feature-present'>
              <i className='fa-solid fa-check'></i>
            </td>
            <td className='table-comparison-icon feature-present-not'>
              <i class='fa-solid fa-xmark'></i>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <ul>
        <li>
          {item} {viewDesc && <div onClick={() => setViewDesc(!viewDesc)}>{itemDescription}</div>}
        </li>
        <li>
          {item} {viewDesc && <div onClick={() => setViewDesc(!viewDesc)}>{itemDescription}</div>}
        </li>
        <li>
          {item} {viewDesc && <div onClick={() => setViewDesc(!viewDesc)}>{itemDescription}</div>}
        </li>
        <li>
          {item} {viewDesc && <div onClick={() => setViewDesc(!viewDesc)}>{itemDescription}</div>}
        </li>
        <li>
          {item} {viewDesc && <div onClick={() => setViewDesc(!viewDesc)}>{itemDescription}</div>}
        </li>
        <li>
          {item} {viewDesc && <div onClick={() => setViewDesc(!viewDesc)}>{itemDescription}</div>}
        </li>
      </ul> */}
    </StyledComparativeTable>
  );
};
