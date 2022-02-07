import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

    h1{
        font-size: 26px;
        font-weight: 700;
        line-height: 30.5px;
        color: #ffffff;
    }

    button{
        all:unset;
    }
`;

export {
    StyledHeader
}