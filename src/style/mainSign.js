import { Link } from "react-router-dom";
import styled from "styled-components";

const MainSign = styled.main`
    height: 100vh;
    background-color: #8c11be;
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