import styled from 'styled-components';

// nav 테스트용 코드입니다.
function Home() {
    return (
        <>
            <DivOne />
            <DivTwo />
            <DivThree />
        </>
    );
}

export { Home };

// styled-components

const DivOne = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: black;
`;

const DivTwo = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: green;
`;

const DivThree = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: blue;
`;
