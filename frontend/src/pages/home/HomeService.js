import styled from 'styled-components';
import React from 'react';
import { ContainerDiv, HomeServiceIcon, BigTextP, BackgroundArticle } from '../../components';

export const HomeService = React.forwardRef((props, ref) => (
    <BackgroundArticle>
        <ServiceContainerDiv ref={ref}>
            <BigTextP>제공되는 서비스</BigTextP>
            <DescriptionDiv>
                <HomeServiceIcon
                    image="paint"
                    title="Personal Color"
                    text={
                        <>
                            사용자의 피부색을 분석하여
                            <br />
                            퍼스널 컬러를 진단합니다.
                        </>
                    }
                />
                <HomeServiceIcon
                    image="clothing"
                    title="Recommendation"
                    text={
                        <>
                            업로드한 옷 사진을 퍼스널 컬러에 맞게
                            <br />
                            매칭하여 코디를 제안해드립니다.
                        </>
                    }
                />
                <HomeServiceIcon
                    image="save"
                    title="Style Managing"
                    text={
                        <>
                            회원이 되면 퍼스널 컬러와 스타일을
                            <br />
                            언제든지 다시 확인할 수 있습니다.
                        </>
                    }
                />
            </DescriptionDiv>
        </ServiceContainerDiv>
    </BackgroundArticle>
));

// styled-components

const ServiceContainerDiv = styled(ContainerDiv)`
    opacity: 0;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    padding-top: 150px;

    &.event {
        opacity: 1;
        transition: opacity 1.3s ease-in-out;
    }
`;

const DescriptionDiv = styled.div`
    width: 100%;
    height: 400px;

    margin-top: 50px;

    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-around;
    align-items: center;

    @media ${({ theme }) => theme.device.laptop} {
        height: 700px;

        ${({ theme }) => theme.flexStyled.flexColumn};
    }
`;
