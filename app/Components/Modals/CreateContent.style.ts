import styled from "styled-components";

export const FormStyled = styled.form`
    color: ${(props) => props.theme.colorGrey1};
`;

export const HeadingStyled = styled.h1`
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
`;

export const InputControlStyled = styled.div`
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
    margin: 1rem 0;
    }

    label {
    margin-bottom: 0.5rem;
    display: inline-block;
    font-size: clamp(0.9rem, 5vw, 1.2rem);

    span {
        color: ${(props) => props.theme.colorGrey3};
    }
    }

    input,
    textarea {
    width: 100%;
    padding: 1rem;

    resize: none;
    background-color: ${(props) => props.theme.colorGreyDark};
    color: ${(props) => props.theme.colorGrey2};
    border-radius: 0.5rem;
    }
`;

export const TogglerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
        flex: 1;
    }

    input {
        width: initial;
    }
`;

export const SubmitButtonWrapperStyled = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
    transition: all 0.35s ease-in-out;

    @media screen and (max-width: 500px) {
        font-size: 0.9rem !important;
        padding: 0.6rem 1rem !important;

        i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
    }
    }

    i {
    color: ${(props) => props.theme.colorGrey0};
    }

    &:hover {
    background: ${(props) => props.theme.colorPrimaryGreen} !important;
    color: ${(props) => props.theme.colorWhite} !important;
    }
}
`;

export const Button = styled.button<{ padding?: string; borderRad?: string; fw?: string; fs?: string; background?: string }>`
    padding: ${(props) => props.padding || "1rem"};
    border-radius: ${(props) => props.borderRad || "0.5rem"};
    font-weight: ${(props) => props.fw || "400"};
    font-size: ${(props) => props.fs || "1rem"};
    background: ${(props) => props.background || "blue"};
`;

