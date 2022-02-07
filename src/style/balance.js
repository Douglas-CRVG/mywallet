import styled from "styled-components";

const StyledBalance = styled.div`
    width: calc(100vw - 74px);
    padding: 3px 0 12px;
    position: absolute;
    left: 12px;
    bottom: 0;
    z-index: 1;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    font-size: 17px;

    strong{
        font-weight: 700;
    }

    span{
        color: ${props => props.value < 0? "#C70000;": "#03AC00;"}
    }
`;

export{
    StyledBalance
}