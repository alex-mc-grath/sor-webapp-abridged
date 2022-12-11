import styled from "styled-components";

export const StyledFileInput = styled.div`
    position: relative;
    display:flex;
    width: 100%;
    height: 4.5rem;
    background: #f3f4f6;
    border-radius: 12px;
    margin-top: 0.4rem;
    font-size: 1.2rem;
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
    color:#484848;
    cursor: pointer;

    ${(props) => props.error ? "border: 1px solid #861724;border-radius: 12px;" : "border: 1px solid transparent;"}

    span {
        padding-left: 1rem;
    }

    .browse-button {
        position: absolute;
        align-items: center;
        display:flex;
        right: 0px;
        height: 100%;
        background: rgb(214,214,214);
        font-weight: 500;
        padding: 0 1rem;
        color: #444;
    }
`