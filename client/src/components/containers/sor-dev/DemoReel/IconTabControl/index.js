import styled from 'styled-components/macro'

const StyledIconTabControl = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
    background: #222;

    .tab {
        width: 1fr;
        text-align: center;
        display: inline-block;
        justify-content: center;
        padding: 2rem;
        font-size: 1.2rem;

        i {
            font-size: min(4rem,20vw);
            margin: 0.5rem;
        }
    }
`

export const IconTabControl = () => {
    return (
        <center>
            <StyledIconTabControl>

                <div className="tab" style={{color: "darkgray", cursor: "not-allowed"}}>
                    <i className="fa-solid fa-gear"></i>
                    <br/>Theme Settings
                </div>
                <div className="tab" style={{color: "darkgray", cursor: "not-allowed"}}>
                    <i className="fa-solid fa-spinner"></i>
                    <br/>Animations
                </div>
                <div className="tab" style={{color: "rgb(255, 170, 102)"}}>
                    <i className="fa-solid fa-chart-column"></i>
                    <br/>Charts
                </div>
                <div className="tab" style={{color: "darkgray", cursor: "not-allowed"}}>
                    <i className="fa-solid fa-engine"></i>
                    <br/>Backend
                </div>

                
            </StyledIconTabControl>
        </center>
    )
}