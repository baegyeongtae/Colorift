import styled from 'styled-components';

function Home() {
    return (
        <ContainerDiv>
            <TextH>예시입니다.</TextH>
            <ExampleDiv />
        </ContainerDiv>
    );
}

export { Home };

// styled-components

const TextH = styled.h1`
    // 가로 사이즈가 모바일 사이즈에 해당하면 배경 컬러 변경
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.winter};
    }

    color: ${({ theme }) => theme.color.blue};
    background-color: ${props => props.theme.color.autumn};
`;

const ContainerDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexColumn};
`;

const ExampleDiv = styled.div`
    width: 300px;
    height: 100px;

    background-color: ${({ theme }) => theme.color.lightgray};
`;
