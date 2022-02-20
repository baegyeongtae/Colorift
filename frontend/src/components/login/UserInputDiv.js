import styled from 'styled-components';

export function UserInputDiv({ text }) {
    return (
        <FlexColumnDiv>
            <p>{text}</p>
            <Input type="text" />
        </FlexColumnDiv>
    );
}

// styled-components

const FlexColumnDiv = styled.div`
    width: 250px;

    margin: 10px 0;

    ${({ theme }) => theme.flexStyled.flexColumn};
`;

const Input = styled.input`
    height: 40px;
    padding: 0 10px;

    font-size: initial;

    border: 1px solid black;
    border-radius: 7px;
`;
