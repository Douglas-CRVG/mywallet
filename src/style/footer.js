import styled from "styled-components";

const StyledFooter = styled.footer`
    padding-top: 13px;
    display: flex;
    gap: 15px;

    button{
        all: unset;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: calc((100% - 15px)/2);
        height: 114px;
        padding: 10px;
        background-color: #A328D6;
        border-radius: 5px;
    }

    p{
        width: 60px;
        font-size: 17px;
        line-height: 20px;
        font-weight: 700;
        color: #ffffff;
    }
`;

export {
    StyledFooter
};