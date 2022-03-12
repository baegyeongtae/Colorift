import styled, { keyframes } from 'styled-components';
import { ContainerDiv, MediumTextH } from '../../components';

function MatchingLoading() {
    return (
        <ContainerDiv>
            <LoadingContainerDiv>
                <Spinner>
                    <div className="blockG" id="rotateG_01" />
                    <div className="blockG" id="rotateG_02" />
                    <div className="blockG" id="rotateG_03" />
                    <div className="blockG" id="rotateG_04" />
                    <div className="blockG" id="rotateG_05" />
                    <div className="blockG" id="rotateG_06" />
                    <div className="blockG" id="rotateG_07" />
                    <div className="blockG" id="rotateG_08" />
                </Spinner>
                <MediumTextH>퍼스널 컬러와 패션을 매칭하는 중입니다.</MediumTextH>
            </LoadingContainerDiv>
        </ContainerDiv>
    );
}

export { MatchingLoading };

const LoadingContainerDiv = styled(ContainerDiv)`
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 50px;
`;

const spinnerAnimation = keyframes`
    0% {
		background-color:rgb(0,0,0);
	}

	100% {
		background-color:rgb(255,255,255);
	}
`;

const Spinner = styled.div`
    position: relative;
    width: 171px;
    height: 212px;
    margin: auto;

    .blockG {
        position: absolute;
        background-color: rgb(255, 255, 255);
        width: 28px;
        height: 66px;
        border-radius: 22px 22px 0 0;

        transform: scale(0.4);

        animation-name: ${spinnerAnimation};

        animation-duration: 1.2s;

        animation-iteration-count: infinite;

        animation-direction: normal;
    }

    #rotateG_01 {
        left: 0;
        top: 77px;
        animation-delay: 0.45s;

        transform: rotate(-90deg);
    }

    #rotateG_02 {
        left: 22px;
        top: 28px;
        animation-delay: 0.6s;

        transform: rotate(-45deg);
    }

    #rotateG_03 {
        left: 72px;
        top: 8px;
        animation-delay: 0.75s;

        transform: rotate(0deg);
    }

    #rotateG_04 {
        right: 22px;
        top: 28px;
        animation-delay: 0.9s;

        transform: rotate(45deg);
        -o-transform: rotate(45deg);
    }

    #rotateG_05 {
        right: 0;
        top: 77px;
        animation-delay: 1.05s;

        transform: rotate(90deg);
    }

    #rotateG_06 {
        right: 22px;
        bottom: 19px;
        animation-delay: 1.2s;

        transform: rotate(135deg);
    }

    #rotateG_07 {
        bottom: 0;
        left: 72px;
        animation-delay: 1.35s;

        transform: rotate(180deg);
    }

    #rotateG_08 {
        left: 22px;
        bottom: 19px;
        animation-delay: 1.5s;
        transform: rotate(-135deg);
    }
`;
