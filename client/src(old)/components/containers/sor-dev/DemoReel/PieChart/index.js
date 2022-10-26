import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export,
    Title,
    Font
  } from 'devextreme-react/pie-chart';

import styled from 'styled-components/macro'

const StyledPieChart = styled.div`
    max-width: 600px;
    width: 100%;
    display: inline-block;
    margin:2em;
`

const areas = [{
    country: 'Russia',
    area: 12,
  }, {
    country: 'Canada',
    area: 7,
  }, {
    country: 'USA',
    area: 7,
  }, {
    country: 'China',
    area: 7,
  }, {
    country: 'Brazil',
    area: 6,
  }, {
    country: 'Australia',
    area: 5,
  }, {
    country: 'India',
    area: 2,
  }, {
    country: 'Others',
    area: 55,
  }];
  



export const MyPieChart = () => {

    const pointClickHandler = (e) => {
        toggleVisibility(e.target);
    }
    
    const legendClickHandler = (e) => {
        const arg = e.target;
        const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        toggleVisibility(item);
    }

    const toggleVisibility = (item) => {
        item.isVisible() ? item.hide() : item.show();
    }

    return (
        <StyledPieChart>
            <PieChart
                id="pie"
                dataSource={areas}
                palette="Bright"
                /*title="Area of Countries"*/
                onPointClick={pointClickHandler}
                onLegendClick={legendClickHandler}
            >
                <Title text="Area of Countries" >
                    <Font color="white" />
                </Title>
                <Series
                    argumentField="country"
                    valueField="area"
                >
                    <Label visible={true}>
                        <Connector visible={true} width={1} />
                    </Label>
                </Series>

                <Size width={500} />
                <Export enabled={false} />
            </PieChart>
        </StyledPieChart>
    )
}