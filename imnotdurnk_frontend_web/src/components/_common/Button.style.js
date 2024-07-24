import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    /* size props에 따라 버튼 사이즈 동적으로 변경 */
    width: ${(props) => {
        if (props.$size === 'small') {
            return '3.5714rem';
        } else if (props.$size === 'medium') {
            return '7.0714rem';
        } else {
            return '18.9286rem';
        }
    }};

    height: ${(props) => {
        if (props.$size === 'small') {
            return '2rem';
        } else if (props.$size === 'medium') {
            return '3rem';
        } else {
            return '3rem';
        }
    }};

    background-color: ${(props) =>
        props.$isRed
            ? 'var(--color-red, #FF6A5F)'
            : 'var(--color-white1, #fff)'};
    border: none;
    border-radius: 45px;

    box-sizing: border-box;
`;

const StyledTextP = styled.p`
    color: ${(props) => (props.$isRed ? 'white' : 'inherit')};
    margin: 0;
    font-size: var(--font-body-h4, 0.86rem);
`;

const StyledTextH4 = styled.h4`
    color: ${(props) => (props.$isRed ? 'white' : 'inherit')};
    margin: 0;
`;

export { StyledButton, StyledTextP, StyledTextH4 };