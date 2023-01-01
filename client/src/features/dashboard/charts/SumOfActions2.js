
// import Paper from '@mui/material/Paper';
// import {
//   Chart,
//   ArgumentAxis,
//   ValueAxis,
//   AreaSeries,
//   Title,
//   Legend,
// } from '@devexpress/dx-react-chart-material-ui';

// import { Chart, AreaSeries, Series, Stack, ArgumentAxis, ValueAxis, CommonSeriesSettings, CommonAxisSettings, Grid, Export, Legend, Margin, Tooltip, Label, Format, Size, Animation, Title } from 'devextreme-react/chart';
import { Chart, AreaSeries, Series, Stack, ArgumentAxis, ValueAxis, CommonSeriesSettings, CommonAxisSettings, Grid, Export, Legend, Margin, Tooltip, Label, Format, Size, Animation, Title } from '@devexpress/dx-react-chart';

// import { styled } from '@mui/material/styles';
// import { Stack, Animation } from '@devexpress/dx-react-chart';
import { carbonEmmision as data } from './data';
import { useState } from 'react';



// const PREFIX = 'Demo';

// const classes = {
//   chart: `${PREFIX}-chart`,
// };

// const LegendRoot = props => (
//   <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
// );

// const LegendLabel = props => (
//   <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
// );

// const ChartRootBase = styled(Chart.Root)(() => ({
//   [`&.${classes.chart}`]: {
//     paddingRight: '20px',
//   },
// }));

const ChartRootBase = () =>{
    console.log('chart root base')
}

const ChartRoot = props => (
  <ChartRootBase {...props} />
);

export const SumOfActions = () => {



    const [ chartData, setChartData ] = useState(data)


const format = () => tick => tick;
const stacks = [{
  series: ['Liquids', 'Solids', 'Gas', 'Cement Production', 'Gas Flaring'],
}];

    
    return (
        <Chart
            dataSource={chartData}
            rootComponent={ChartRoot}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis />
          <AreaSeries
            name="Liquids"
            valueField="liquids"
            argumentField="year"
          />
          <AreaSeries
            name="Solids"
            valueField="solids"
            argumentField="year"
          />
          <AreaSeries
            name="Gas"
            valueField="gas"
            argumentField="year"
          />
          <AreaSeries
            name="Cement Production"
            valueField="cementProduction"
            argumentField="year"
          />
          <AreaSeries
            name="Gas Flaring"
            valueField="gasFlaring"
            argumentField="year"
          />
          {/* <Animation /> */}
          {/* <Legend position="bottom" rootComponent={LegendRoot} labelComponent={LegendLabel} /> */}
          {/* <Title text="Carbon Emission Estimates" /> */}
          <Stack stacks={stacks} />
        </Chart>
    );
  }
