import styled from "styled-components";

const StyledMain = styled.main`
    height: calc(100vh - 221px);
    padding: 23px 12px 12px;
    background-color: #ffffff;
    border-radius: 5px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 23px;
`;

const AlternativeMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 221px);
    background-color: #ffffff;
    border-radius: 5px;

    p{
        width: 180px;
        font-size: 20px;
        line-height: 23.5px;
        color: #868686;
        text-align: center;
    }
`;

export {
    StyledMain,
    AlternativeMain
}