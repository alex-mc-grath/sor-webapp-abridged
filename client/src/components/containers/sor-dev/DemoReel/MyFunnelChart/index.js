import Funnel, {
    Title,
    Margin,
    Export,
    Tooltip,
    Item,
    Border,
    Label,
  } from 'devextreme-react/funnel';
import styled from 'styled-components/macro'

export const dataSource = [
    { argument: 'Visited the Website', value: 9152 },
    { argument: 'Downloaded a Trial', value: 6879 },
    { argument: 'Contacted Support', value: 5121 },
    { argument: 'Subscribed', value: 2224 },
    { argument: 'Renewed', value: 1670 },
  ];


const StyledFunnelChart = styled.div`
    max-width: 600px;
    display: inline-block;
    margin:2em;
    width: 100%;
`



export const MyFunnelChart = () => {

    const formatLabel = (arg) => {
        return `<span class="label">${arg.percentText}</span><br/>${arg.item.argument}`;
    }

    return (
        <StyledFunnelChart>
            <Funnel id="funnel"
                dataSource={dataSource}
                palette="Soft Pastel"
                argumentField="argument"
                valueField="value"
            >
                <Title text="Website Conversions">
                    <Margin bottom={30} />
                </Title>
                <Export enabled={true} />
                <Tooltip enabled={true} format="fixedPoint" />
                <Item>
                    <Border visible={true} />
                </Item>
                <Label
                    visible={true}
                    position="inside"
                    backgroundColor="none"
                    customizeText={formatLabel}
                />
            </Funnel>
        </StyledFunnelChart>
    )
}