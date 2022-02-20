import styled from 'styled-components';

export function UserInputDiv({ text, type }) {
    return (
        <FlexColumnDiv>
            <p>{text}</p>
            <Input type={type || 'text'} />
        </FlexColumnDiv>
    );
}

// styled-components

const FlexColumnDiv = styled.div`
    width: 100%;

    margin: 10px;

    ${({ theme }) => theme.flexStyled.flexColumn};
`;

const Input = styled.input`
    height: 40px;
    padding: 0 10px;

    font-size: initial;

    border: 1px solid black;
    border-radius: 7px;
`;
