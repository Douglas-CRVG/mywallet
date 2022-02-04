import { Link } from "react-router-dom";
import styled from "styled-components";

const MainSign = styled.main`
    padding: 0 25px;
    height: 100vh;
    background-color: #8c2bbe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    h1{
        font-family: 'Saira Stencil One', cursive;
        color: #ffffff;
        font-size: 32px;
    }
`;

const StyledLink = styled(Link)`
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    padding: 12px 0;
`;

export {
    MainSign,
    StyledLink
};