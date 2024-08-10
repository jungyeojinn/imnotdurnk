import { styled } from 'styled-components';

const CalendarListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const Notice = styled.div`
    padding-bottom: 1rem;

    color: var(--color-red);
    font-weight: 500;
    text-align: center;
`;

const CalendarListBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const LoadingAndErrorText = styled.h3`
    padding-top: 3rem;
`;

const CalendarItemTitle = styled.h3`
    color: ${({ $alcoholLevel }) =>
        $alcoholLevel >= 2 ? 'var(--color-white1)' : 'var(--color-green3)'};
`;

const CalendarItemTime = styled.p`
    color: ${({ $alcoholLevel }) =>
        $alcoholLevel >= 2 ? 'var(--color-white1)' : 'var(--color-green3)'};
`;

const StyledEmptyEvent = styled.h3`
    padding-top: 3rem;
`;

export {
    CalendarItemTime,
    CalendarItemTitle,
    CalendarListBox,
    CalendarListContainer,
    LoadingAndErrorText,
    Notice,
    StyledEmptyEvent,
};