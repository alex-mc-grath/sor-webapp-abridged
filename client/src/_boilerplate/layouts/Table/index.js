import React, { useRef } from 'react';
import { StyledTable } from './Style';
import { TableLineItem } from './TableLineItem';
import { formatDate } from '../../../../utils/dataManipulation/formatDate';
import { TableVerticalArrows } from './icons';

export const Table = ({ loadedPageData, colCustomSize, colHeaders = ['column'], data = [], LineItem = null, lineItemPropName = 'row', lineItemExtraProps={} }) => {
  const baseKey = useRef('table' + Math.random() + '_');

  if (LineItem) {
    return (
      <StyledTable columnCount={colHeaders.length} colCustomSize={colCustomSize}>
        <thead>
          <tr>
            {colHeaders.map((header, idx) => (
              <th>{colHeaders[idx]}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <LineItem key={baseKey.current + index} {...{ [lineItemPropName]: item }} {...lineItemExtraProps} />
          ))}
        </tbody>
      </StyledTable>
    );
  } else {
    return (<h3>LineItem prop is required for table</h3>);
  }
};
