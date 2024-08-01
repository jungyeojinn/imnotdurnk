import { styled } from 'styled-components';

const CreatePlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8571rem;

    padding: 1.7143rem;

    border-radius: 20px;
    background-color: var(--color-white2);
`;

const PlanContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.7143rem;
`;

const InputItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${({ $boxSize }) =>
        $boxSize === 'long' ? 'flex-start' : 'center'};

    padding: ${({ $boxSize }) =>
        $boxSize === 'long' ? '0.7143rem 1.2143rem' : '0.5714rem 1.2143rem'};

    border-radius: 10px;
    background: var(--color-white1, #fff);

    cursor: pointer;
`;

const InputTitleText = styled.input`
    width: 13.7143rem;

    font-weight: 500;
    font-size: var(--font-body-h4);
`;

const InputMemoText = styled.textarea`
    width: 13.7143rem;

    font-weight: 500;
    font-size: var(--font-body-h4);

    /* 스크롤바 숨기기 (크롬, 사파리, 엣지 등 웹킷 브라우저용) */
    &::-webkit-scrollbar {
        display: none;
    }

    /* 스크롤바 숨기기 (파이어폭스용) */
    scrollbar-width: none; /* Firefox */
`;

export {
    CreatePlanContainer,
    InputItemBox,
    InputMemoText,
    InputTitleText,
    PlanContainer,
};