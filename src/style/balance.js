import styled from "styled-components";

const StyledBalance = styled.div`
    width: 100%;
    padding: 3px 12px 12px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

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