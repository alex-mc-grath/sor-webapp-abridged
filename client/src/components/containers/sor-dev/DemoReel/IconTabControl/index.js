import styled from 'styled-components/macro'

const StyledIconTabControl = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
    background: #222;

    .tab, .selectedTab, .disabledTab {
        width: 1fr;
        text-align: center;
        display: inline-block;
        justify-content: center;
        padding: min(2rem,2.5vw);
        font-size: 1.2rem;

        i {
            font-size: min(4rem,20vw);
            margin: 0.5rem;
        }
    }

    .tab {
        color: darkgray;
        cursor: pointer;

        &:hover {
            color: white;
        }
    }

    .selectedTab {
        color: rgb(255, 170, 102);
    }

    .disabledTab {
        color: darkgray;
        cursor: not-allowed;
    }
`

export const IconTabControl = ({selectedTab, setSelectedTab}) => {

    return (
        <center>
            <StyledIconTabControl>

                <div className="disabledTab">
                    <i className="fa-solid fa-gear"></i>
                    <br/>Theme Settings
                </div>
                <div className={selectedTab === "animations" ? "selectedTab" : "tab"} onClick={() => setSelectedTab("animations")}>
                    <i className="fa-solid fa-spinner"></i>
                    <br/>Animations
                </div>
                <div className={selectedTab === "charts" ? "selectedTab" : "tab"} onClick={() => setSelectedTab("charts")}>
                    <i className="fa-solid fa-chart-column"></i>
                    <br/>Charts
                </div>
                <div className={selectedTab === "ui" ? "selectedTab" : "tab"} onClick={() => setSelectedTab("ui")}>
                    <i className="fa-solid fa-table-layout"></i>
                    <br/>UI packages
                </div>
                <div className="disabledTab">
                    <i className="fa-solid fa-engine"></i>
                    <br/>Backend
                </div>

                
            </StyledIconTabControl>
        </center>
    )
}