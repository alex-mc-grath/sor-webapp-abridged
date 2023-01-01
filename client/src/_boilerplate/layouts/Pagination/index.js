import React, { useState } from 'react';
import { MainButton } from '../../inputs/MainButton';

// import { PreviousButton } from '../Table/PreviousButton';
import { StyledPagination } from './Style';

export const Pagination = ({ currentPage, numberOfPages, showCount, totalCount, nextPage, previousPage, setPage, TextComponent = null, dataName = 'data' }) => {
  // Logic for displaying page numbers

  let minPage = Math.max(1, currentPage - 2);

  let pageNumbers = [];
  for (let i = 0; i < Math.min(5, numberOfPages); i++) {
    if (minPage + i <= numberOfPages) {
      pageNumbers.push(minPage + i);
    }
  }

  return (
    <StyledPagination>
      <div className='table-nav'>
        {TextComponent !== null && <TextComponent showCount={showCount} totalCount={totalCount}/>}
        {TextComponent === null && 
          <span className='showing-count'>
            Showing {showCount} from {totalCount} {dataName}
          </span>
        }

        <div className='page-nav'>
          <MainButton onClick={previousPage}>
            <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7 13.5L1 7.5L7 1.5' stroke='#D3D6E4' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M14 13.5L8 7.5L14 1.5' stroke='#D3D6E4' stroke-opacity='0.35' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
            &nbsp;Previous
          </MainButton>
          <ul className='page-numbers'>
            {pageNumbers.map((number) => (
              <li className={`${currentPage === number ? 'active' : ''}`} key={'page_' + number} onClick={() => setPage(number)}>
                {number}
              </li>
            ))}
          </ul>
          <MainButton onClick={nextPage}>
            Next{' '}
            <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M8 13.5L14 7.5L8 1.5' stroke='#D3D6E4' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M1 13.5L7 7.5L1 1.5' stroke='#D3D6E4' stroke-opacity='0.35' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </MainButton>
        </div>
      </div>
    </StyledPagination>
  );
};
