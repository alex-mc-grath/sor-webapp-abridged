//documentation: https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/

import { useEffect, useMemo, useState } from 'react';
import { Chart, Series, ArgumentAxis, ValueAxis, CommonSeriesSettings, CommonAxisSettings, Grid, Export, Legend, Margin, Tooltip, Label, Format, Size } from 'devextreme-react/chart';
import styled from 'styled-components';

const StyledChart = styled.div`
  width: 100%;

  > div {
    width: 100%;
  }

  svg {
    width: 100%;
  }

  .dxc-elements path {
    stroke-width: 6 !important;
  }

  .dxc-val-grid {
    display: none;
  }

  .dxc-series {
    circle {
      r: 3;
    }
  }

  .dxc-legend {
    /*transform: translate(calc(35vw - 35%), -3%);*/
    transform: translate(40%, -3%);
    display: none;
  }
`;

/*const chartData = [
  { month: 'Jan', submitted: 30, active: 15 },
  { month: 'Feb', submitted: 52, active: 26 },
  { month: 'Mar', submitted: 60, active: 30 },
  { month: 'Apr', submitted: 26, active: 28 },
  { month: 'May', submitted: 15, active: 25 },
  { month: 'Jun', submitted: 52, active: 48 },
  { month: 'Jul', submitted: 60, active: 50 },
  { month: 'Aug', submitted: 51, active: 30 },
  { month: 'Sep', submitted: 55, active: 45 },
  { month: 'Oct', submitted: 98, active: 73 },
  { month: 'Nov', submitted: 80, active: 65 },
  { month: 'Dec', submitted: 70, active: 65 },
];*/

let monthIndexMap = {
  "0": "Jan", 
  "1": "Feb",
  "2": "Mar",
  "3": "Apr",
  "4": "May",
  "5": "Jun",
  "6": "Jul",
  "7": "Aug",
  "8": "Sep",
  "9": "Oct",
  "10": "Nov",
  "11": "Dec"
}

export const AllCampaigns = ({data}) => {
  const [initChart, setInitChart] = useState(null);
  const chartData = useMemo(() => {

    if(data === null){return []}

    /*let start = (new Date()).getMonth() - 11
    if(start < 0){start += 12}

    let toReturn = []

    for(let i=0; i < 12; i++)
    {
      toReturn.push({month: monthIndexMap[start.toString()], active: data[start.toString()]})

      start++
      if(start >= 12){start = 0}
    }

    return toReturn*/

    let toReturn = []

    if(data.length > 12)
    {
      for(let i=0; i<data.length; i++)
      {
        toReturn.push({month: data[i].year+" "+monthIndexMap[data[i].month.toString()], active: data[i].count})
      }
    }
    else
    {
      for(let i=0; i<data.length; i++)
      {
        toReturn.push({month: monthIndexMap[data[i].month.toString()], active: data[i].count})
      }
    }

    return toReturn

  }, [data])

  useEffect(() => {
    let width = document.getElementById('casesChart').getBoundingClientRect().width;
    setInitChart({ width });
  }, []);

  return (
    <StyledChart id="casesChart">
      {initChart && (
        <Chart palette={['#418eeb', '#ff6d4c']} dataSource={chartData}>
          <CommonSeriesSettings argumentField="month" type="spline" />

          <Size width={initChart.width} height={300} />

          <CommonAxisSettings>
            <Grid visible={true} />
          </CommonAxisSettings>

          {/* <Series key={'submitted'} valueField="submitted" name="submitted" /> */}
          <Series key={'active'} valueField="active" name="active" />

          <Margin bottom={20} />
          <ArgumentAxis visible={false} allowDecimals={false} axisDivisionFactor={60}>
            <Label>
              <Format type="decimal" />
            </Label>
          </ArgumentAxis>

          <ValueAxis visible={false}></ValueAxis>
          <Legend verticalAlignment="top" horizontalAlignment="center" />
          <Export enabled={false} />
          <Tooltip enabled={true} />
        </Chart>
      )}
    </StyledChart>
  );
};
