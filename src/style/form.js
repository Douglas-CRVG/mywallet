import styled from "styled-components";

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const StyledInput = styled.input`
    padding: 18px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
`;

const StyledButton = styled.button`
    padding: 12px 0;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
`;

export {
    StyledForm,
    StyledInput,
    StyledButton,
}