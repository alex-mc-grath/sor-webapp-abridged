import { Chart, Series, Tooltip } from 'devextreme-react/chart';
import styled from 'styled-components/macro'

const dataSource = [{
    country: 'USA',
    GDP: 20893746,
  }, {
    country: 'China',
    GDP: 14722801,
  }, {
    country: 'Japan',
    GDP: 5057759,
  }, {
    country: 'Germany',
    GDP: 3846414,
  }, {
    country: 'India',
    GDP: 2664749,
  }, {
    country: 'United Kingdom',
    GDP: 2764198,
  }];


const StyledBarChart = styled.div`
    max-width: 600px;
    display: inline-block;
    margin:2em;
    width: 100%;
`



export const BarChart = () => {

    return (
        <StyledBarChart>
            <Chart dataSource={dataSource}>
                <Series
                    valueField="GDP"
                    argumentField="country"
                    name="GDP (US$ M)"
                    type="bar"
                    color="#ffaa66"
                />
                <Tooltip enabled={true} />
            </Chart>
        </StyledBarChart>
    )
}