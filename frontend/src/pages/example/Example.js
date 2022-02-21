import styled from 'styled-components';

function Example() {
    return (
        <>
            <DivOne />
            <DivTwo />
            <DivThree />
        </>
    );
}

export { Example };

// styled-components

// 테스트용 컴포넌트
const DivOne = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: pink;
`;

// 테스트용 컴포넌트
const DivTwo = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: green;
`;

// 테스트용 컴포넌트
const DivThree = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.color.lightgray};
    background-color: blue;
`;
