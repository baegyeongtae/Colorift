import styled from 'styled-components';

export function HomeButton({ text }) {
    return <HomeStyleButton>{text}</HomeStyleButton>;
}

// styled-components

const HomeStyleButton = styled.button`
    width: 200px;
    height: 50px;

    color: white;
    font-weight: bold;
    text-align: center;

    background-color: ${({ theme }) => theme.color.blue};
`;
