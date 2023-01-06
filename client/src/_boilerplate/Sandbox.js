import React from 'react';
// import { MainButton } from './input/MainButton';
import { Row } from './layouts/Row';
import styled from 'styled-components';
import {MainButton} from '../_boilerplate/inputs/MainButton'
// import { Dropdown, Header, List } from './input/Select/Dropdown';
// import { DropdownSelect, DefaultItem, Item } from './input/Select/DropdownSelect';
// import { DropdownSearch, PinnedItem, Item as SearchItem } from './input/Select/DropdownSearch';

import { TableLineItem } from '../_boilerplate/elements/Table/TableLineItem';
import { Table } from '../_boilerplate/elements/Table';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Col } from './layouts/Col';

const EmptyButton = styled(MainButton)`
    background:transparent;
    color:none;
`

const StyledSandbox = styled.div`
  width: 80%;
  margin: auto;

  h1 {
    text-align: center;
  }
  button {
    margin: 1rem 2rem;
  }
`;

export const Questions = styled.ul`
    font-size: 1.2rem;
`;


export const Sandbox = () => {

  const navigate = useNavigate()
  const [state, setState] = useState(0)

  return (
    <StyledSandbox>
      <h1>Sandbox - sor app</h1>


          <Table
              data={[{
                controls:'control1',
                elements:'element1',
                hoc: 'hoc1',
                hooks: 'hook1',
                inputs: 'input1',
                utils: 'util1'
            
            },{
              controls:'control2',
              elements:'element2',
              hoc: 'hoc2',
              hooks: 'hook2',
              inputs: 'input2',
              utils: 'util2'
          
          },{
            controls:'control3',
            elements:'element3',
            hoc: 'hoc3',
            hooks: 'hook3',
            inputs: 'input3',
            utils: 'util3'
        
        }]} 
              colHeaders={[
                <>controls</>,
                <>elements</>,
                <>hoc</>,
                <>hooks</>,
                <>inputs</>,
                <>utils</>
                // <>Breach Category<SortControl sortKey="category"><TableSortArrows /></SortControl></>,
                // <>Breach Type<SortControl sortKey="subject"><TableSortArrows /></SortControl></>,
                // // <>Company<SortControl sortKey="company"><TableSortArrows /></SortControl></>,
                // <>Created Date<SortControl sortKey="createdDate"><TableSortArrows /></SortControl></>,
                // <>Created By<SortControl sortKey="createdBy"><TableSortArrows /></SortControl></>,
                // <>Source<SortControl sortKey="source"><TableSortArrows /></SortControl></>,
                // <>Status<SortControl sortKey="status"><TableSortArrows /></SortControl></>,
                // <>Action</>
              ]}
               LineItem={({ row }) => (
                <tr>
                  <td>{row.controls}</td>
                  <td>{row.elements}</td>
                  <td>{row.hoc}</td>
                  <td>{row.hooks}</td>
                  <td>{row.inputs}</td>
                  <td>{row.utils}</td>
                </tr>
               )}
              />


      <Col>
        <h3>Elements</h3>
        <div>{"<Text />"}</div>
        <div>{"<Label />"}</div>
        <div>{"<Badge />"}</div>

        <Questions>
          <li>how to deal with sizes coming in as fixed from theme settings?</li>
        </Questions>
      </Col>

      <Col>
        <h3>Layouts</h3>
        <p>{"<TextBox />"}</p>
        <p>{"<SplitScreen />"}</p>
        <p>{"<Splash />"}</p>
        <p>{"<Hero />"}</p>
      </Col>



      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>




<div></div>
<button onClick={()=>setState(state+1)}>{state}</button>

    controls
      Filter
      Pagination
      SortableList
      Sort
      DragAndDrop

    elements
      H1, H2, H3
      IMG
      List
      ListItem

      LoadingIndicator
      PageLabel

    
    hoc
    hooks
    inputs
    layouts
    utils


    

_boilerplate
component (app)
used in feature:

<br/>
      <br/>
      <br/>
      <br/>

      <div>
        <h2>Main Button</h2>
        <Row>
          <ol>
            <li>- empty buttons with different colors (Case info page)</li>
            <li>- buttons: status buttons, action buttons (empty), main button (blue)</li>
            <li>- buttons need to be able to take icon, or svg</li>
            <li>- priority component</li>
          </ol>
          <div>
            <MainButton text='test' onClick={()=>navigate('/app/dashboard')} />
            <EmptyButton text='test empty' type='empty' onClick={()=>navigate('/app/dashboard')} />
            {/* <MainButton type="empty">Main Button - type 'empty'</MainButton>
            <MainButton color="pink">Main Button - color pink</MainButton>
            <MainButton type="empty" color="pink">
              Main Button - type='empty' color pink
            </MainButton> */}
          </div>
        </Row>
      </div>
      <div>
        <h2>Select</h2>
        <Row>
          <ol>
            <li>( ! important ! )Must be operated from parent (because of filteredData displayed)</li>
            <li>Must close when click away</li>
            <li>Select needs to be able to take in any icon</li>
            <li>Calendar Select</li>
            <li>Input text Select</li>
            <li>Fake Select (like download pdf button)</li>
            <li>SearchBar (with dropdown Select)</li>
            <li>SearchBar (without dropdown Select)</li>
          </ol>

          {/*<Select label={['label1', 'label2']} values={['spif1', 'spaf2', 'spouf3']} />*/}

          {/* Default Select dropdown */}
          {/* <DropdownSelect defaultValue="">
            <DefaultItem>Initial Text</DefaultItem>
            <Item value="val1">item 1</Item>
            <Item value="val2">item 2</Item>
            <Item value="val3">item 3</Item>
            {['4', '5', '6'].map((num) => (
              <Item value={'val' + num}>item {num}</Item>
            ))}
          </DropdownSelect> */}

          {/*<Select type='language' label={['type "language"']} values={['spif1', 'spaf2', 'spouf3']} />*/}
          {/* <DropdownSearch>
            <PinnedItem value="pinnedOne">pinned one</PinnedItem>
            <SearchItem value="just an item">Just an item</SearchItem>
            <SearchItem value="another item">Another Item</SearchItem>
          </DropdownSearch> */}

          {/* Dropdown with background and icons */}
          {/* <DropdownSelect HeaderStyle="fill" defaultValue="CA">
            <DefaultItem>
              <i className="fa-solid fa-earth-americas"></i> Country
            </DefaultItem>
            <Item value="US">
              {' '}
              {usaFlag} <span style={{ verticalAlign: 'super' }}>United-States</span>{' '}
            </Item>
            <Item value="CA">
              {' '}
              {canadaFlag}
              <span style={{ verticalAlign: 'super' }}>Canada</span>{' '}
            </Item>
          </DropdownSelect> */}

          {/*<SearchBar />*/}


          {/* Dropdown in it's most basic form where no items can be selected (mainly to use with buttons) */}
          <div style={{ margin: '0 1rem' }}>
            {/* <Dropdown>
              <Header>
                <i className="fa-solid fa-circle-user" style={{ fontSize: '4rem' }}></i>
              </Header>
              <List>
                <div>
                  <button style={{ width: '100px', background: '#ddd' }} onClick={() => alert('Clicked Button 1')}>
                    Button 1
                  </button>
                </div>
                <div>
                  <button style={{ width: '100px', background: '#ddd' }} onClick={() => alert('Clicked Button 2')}>
                    Button 2
                  </button>
                </div>
              </List>
            </Dropdown> */}
          </div>

          {/* ALEX ADDED DURING CALL!!!!!!!!!!! */}

          {/* <SearchDropDown /> */}
          {/* <TextInput /> */}
          {/* Button dropdown (like in Profile and dashboard download button) */}
        </Row>
      </div>
    </StyledSandbox>
  );
};