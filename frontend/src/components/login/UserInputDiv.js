import React from 'react';
import styled from 'styled-components';

export const UserInputDiv = React.forwardRef(({ text, type, name }, ref) => (
    <FlexColumnDiv className="input_div">
        <p>{text}</p>
        <Input type={type || 'text'} name={name} ref={ref} />
    </FlexColumnDiv>
));

// styled-components

const FlexColumnDiv = styled.div`
    width: ${({ width }) => width || '100%'};

    margin: 10px 0;

    ${({ theme }) => theme.flexStyled.flexColumn};
`;

export const Input = styled.input`
    width: ${({ width }) => width};
    height: 40px;
    padding: 0 10px;

    font-size: initial;

    border: 1px solid black;
    border-radius: 7px;
`;
