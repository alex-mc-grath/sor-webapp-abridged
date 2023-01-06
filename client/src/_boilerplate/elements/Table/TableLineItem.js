import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { formatDate } from '../../../../utils/dataManipulation/formatDate';

import styled, { css } from 'styled-components';
// import { breachTypes } from '../../../../data/reportCase';

const sourceCodeMap = {
  PLATFORM: "Platform",
  EMAIL: "Email",
  PHONE: "Phone",
  MEETING: "Meeting"
}

const StyledTableLineItem = styled.tr`
  .shortened{
    position:relative;
    line-height: 1.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; /* number of lines to show */
        line-height: 1.8;        /* fallback */
        max-height: 2*2;       /* fallback */
        padding-right: 1rem;

        ${props=>props.modalBoxOpen &&
    css`
      
      overflow: unset;
        text-overflow: unset;

    `
    
  }


        /* &:hover{
          overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        line-height: 1.8;       
        max-height: 2*2;      


            &:before{
              position:absolute;
              top:0;
              left:0;
            content:'';
            width: 100%;
            height: 5rem;
          }
        } */
  }

  .black{
    position:absolute;
    display:flex;
    justify-content:center;
    width: 120%;
    height: fit-content;
    padding: 1rem;
    top:0;
    left:0;
    background:white;
    z-index:2;
    border-radius: 1rem;
    box-shadow: 0 2px 6px rgb(0 0 0 / 5%), 0 0 0 1px rgb(0 0 0 / 7%);
  }
`;

export const TableLineItem = ({row, shortened}) => {
  const navigate = useNavigate();
  const [modalBox, setModalBox] = useState(false)

  // const openModalBox = (subject) => {
  //   return (
  //     <div className='black'>
  //       {subject}
  //     </div>
  //   )
  // }

  return (
    <StyledTableLineItem modalBoxOpen={modalBox}>
      <td>{row.breachCategory}</td>
      <td className='shortened' onMouseOver={()=>setModalBox(true)} onMouseLeave={()=>setModalBox(false)}>{'--error--'}{modalBox ? <div className='black'>
        {'invalid case type'}
      </div> : ''}
      </td>
      {/* <td>{row.company}</td> */}

      {/* <td>{formatDate(row.createdDate)}</td> */}
      <td>{(row.createdDate)}</td>
      <td>{row.anonymity === "ANONYMOUS" ? <i>Anonymous</i> : (row.createdBy || <i>Anonymous</i>)}</td>
      <td>{sourceCodeMap[row.source]}</td>
      <td className={`status-buttons ${row.statusCode === 'NEW' ? 'blue-status' : ''} ${row.statusCode === 'ONGOING' ? 'red-status' : ''} ${row.statusCode === 'CLOSED' ? 'green-status' : ''}`}>{row.statusCode} </td>
      <td className='empty-button' onClick={() => navigate('/all-cases/' + row._id)}>
        {'View & Edit'} &nbsp;
        <svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.41663 11.7512L9.34426 11.3944C9.54996 11.3695 9.74133 11.2776 9.88796 11.1331L16.9803 4.13965C17.7656 3.36438 17.7656 2.10783 16.9803 1.33256V1.33256C16.1946 0.557684 14.9211 0.557684 14.1354 1.33256L7.10903 8.26545C6.96673 8.40581 6.87443 8.58795 6.84601 8.7845L6.41663 11.7512Z'
            stroke='#418EEB'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M10.1342 1.66364H4.55778C2.50459 1.66364 0.840149 3.30594 0.840149 5.33183V13.5853C0.840149 15.6112 2.50459 17.2535 4.55778 17.2535H12.9224C14.9756 17.2535 16.6401 15.6112 16.6401 13.5853V8.08298' stroke='#418EEB' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      </td>
    </StyledTableLineItem>
  );
};
