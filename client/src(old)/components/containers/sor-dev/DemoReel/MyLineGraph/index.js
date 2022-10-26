import {
    Chart,
    Series,
    ArgumentAxis,
    CommonSeriesSettings,
    Export,
    Legend,
    Margin,
    Title,
    Subtitle,
    Tooltip,
    Grid,
    Font
  } from 'devextreme-react/chart';
import styled from 'styled-components/macro'

const energySources = [
    { value: 'hydro', name: 'Hydro-electric' }
  ];
  
  const countriesInfo = [{
    year: '2000',
    population: 282
  }, {
    year: '2004',
    population: 292
  }, {
    year: '2008',
    population: 303
  }, {
    year: '2012',
    population: 314
  }, {
    year: '2016',
    population: 323
  }, {
    year: '2020',
    population: 331
  }];


  const types = ['line', 'stackedline', 'fullstackedline'];
  


const StyledLineGraph = styled.div`
    max-width: 600px;
    display: inline-block;
    margin:2em;
    width: 100%;
`



export const MyLineGraph = () => {

    return (
        <StyledLineGraph>
            <Chart
                palette="Violet"
                dataSource={countriesInfo}
            >
                <CommonSeriesSettings
                    argumentField="year"
                    type="line"
                />
                <Series
                    valueField="population"
                    name='population (M)'
                />
                <Margin bottom={20} />
                <ArgumentAxis
                    valueMarginsEnabled={false}
                    discreteAxisDivisionMode="crossLabels"
                >
                    <Grid visible={true} />
                </ArgumentAxis>
                <Legend
                    verticalAlignment="bottom"
                    horizontalAlignment="center"
                    itemTextPosition="bottom"
                />
                <Export enabled={false} />
                <Title text="USA population size">
                    <Font color="white" />
                    <Subtitle text="(In Millions of People)" ><Font color="white" /></Subtitle>
                </Title>
                <Tooltip enabled={true} />
            </Chart>
        </StyledLineGraph>
    )
}