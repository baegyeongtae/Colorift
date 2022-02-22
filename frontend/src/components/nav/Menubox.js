import styled, { keyframes } from 'styled-components';
import { BackgroundDiv } from '..';

function Menubox({ clickProps }) {
    const handleClick = () => {
        clickProps();
    };

    return (
        <>
            <BackgroundDiv onClick={handleClick} />
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
        </>
    );
}

export { Menubox };

// styled-components

const boxKeyframe = keyframes`
    0% {
        right: -50vw;
    }
    100% {
        right: 0;
    }
`;

const BoxDiv = styled.div`
    position: fixed;
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
