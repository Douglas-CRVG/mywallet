import styled from "styled-components";

const StyledRecord = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 18.7px;
    color: #000000;

    p{
        display: flex;
        gap: 7px;
    }

    strong{
        color: #c6c6c6;
    }
    
    span{
        color: ${props => props.isPlus ? "green" : "red"}
    }
`;

export {
    StyledRecord
}