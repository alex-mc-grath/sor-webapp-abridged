import React, { useEffect, useRef } from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Size,
  Grid,
  CommonAxisSettings,
} from 'devextreme-react/chart';

import { dataSource } from './data.js';

import styled from 'styled-components';
import { useState } from 'react';

const Style = styled.div`
width:100%;

.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.option {
  margin-top: 10px;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option > span {
  margin-right: 10px;
}

.option > .dx-widget {
  display: inline-block;
  vertical-align: middle;
}
.dxc-arg-grid{
  display:none;
}

  
`;

const types = ['area', 'stackedarea', 'fullstackedarea'];

export const SumOfActions = () => {
  const [initChart, setInitChart] = useState(null);
  const [state, setState] = useState({type:types[0]})

  const width = useRef()
// class SumOfActions extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type: types[0],
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

  const handleChange = (e) =>{
   setState({
      type: e.value,
    });
  }

  useEffect(() => {
    // let width = document.getElementById('chart').getBoundingClientRect().width;
    let x = width.current.getBoundingClientRect().width
    setInitChart({ width:x });
  }, [])

    return (
      <Style id="chart" ref={width}>
      {initChart && (
      <div>
        <Chart
          palette={['#08a2e5', '#01202D','#00FFAA']}
          // title="Population: Age Structure (2018)"
          dataSource={dataSource}
        >
          <CommonSeriesSettings
            argumentField="country"
            type={state.type}
          />
          <CommonAxisSettings>
            <Grid visible={true} color='#505050' />
          </CommonAxisSettings>

          <Size 
          width={initChart.width}
          // width={380} 
          height={165} 
           />
          <Series valueField="y1564" name="Total scanned"></Series>
          <Series valueField="y014" name="Invitations sent"></Series>
          <Series valueField="y65" name="New connections"></Series>
          {/* <Series valueField="y65" name="Meetings"></Series> */}
          {/* <Margin bottom={20} /> */}
          <ArgumentAxis valueMarginsEnabled={false}  visible={false} />
          <Legend
            verticalAlignment="bottom"
            horizontalAlignment="center"
            visible={false}
            
          />
        </Chart>
          </div>
        )}
          {/* <Export enabled={true} /> */}
        {/* <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Series Type </span>
            <SelectBox
              dataSource={types}
              value={this.state.type}
              onValueChanged={this.handleChange}
            />
          </div>
        </div> */}
      </Style>)}