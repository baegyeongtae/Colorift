import styled, { keyframes } from 'styled-components';

function Menubox({ clickProps }) {
    const handleClick = () => {
        clickProps();
    };

    return (
        <BackgroundDiv onClick={handleClick}>
            <BoxDiv>
                <div className="menu">Home</div>
                <div className="menu">Personal Color</div>
                <div className="menu">Color Analysis</div>
                <div className="menu">Fashion Matching</div>
                <div>
                    <div>Log In</div>
                    <div>
                        <span>Sign Up</span>
                    </div>
                </div>
            </BoxDiv>
        </BackgroundDiv>
    );
}

export { Menubox };

// styled-components

const backgroundKeyframe = keyframes`
    0% {
        background: rgba(0, 0, 0, 0);
        backdrop-filter: blur(0);
    }
    100% {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(1.5px);
    }
`;

const boxKeyframe = keyframes`
    0% {
        right: -50vw;
    }
    100% {
        right: 0;
    }
`;

const BackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1.5px);

    animation: ${backgroundKeyframe} 1s ease-in-out 1;
`;

const BoxDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;

    ${({ theme }) => theme.flexStyled.flexColumn};
    justify-content: space-around;
    align-items: center;

    width: 50vw;
    height: 60vh;

    background-color: ${({ theme }) => theme.color.nav};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    animation: ${boxKeyframe} 1s ease-in-out 1;

    div {
        color: #616161;
        font-weight: bold;

        width: 100%;

        text-align: center;
        line-height: 7vh;

        cursor: pointer;
    }

    .menu:active {
        color: #3c64b1;
    }

    span {
        color: white;

        background-color: ${({ theme }) => theme.color.blue};

        padding: 10px;

        margin-right: 1vw;
    }
`;
