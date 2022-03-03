import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { ContainerDiv, HomeServiceIcon, BigTextP, BackgroundArticle } from '../../components';

export function HomeService() {
    const target = useRef(null);

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
            console.log(entry.target.classList);
            entry.target.classList.add('event');
            console.log(entry.target.classList);
            observer.unobserve(entry.target);
        }
    };

    const options = {
        root: null, // 관찰 대상의 부모 요소를 지정 (기본값 null)
        rootMargin: '0px', // 관찰하는 뷰포트의 마진 지정 (기본값 0 0 0 0)
        threshold: 0.8, // 관찰 요소와 어느정도 겹쳤을 때 콜백을 수행할지 지정
    };

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, options);
        if (target.current) observer.observe(target.current);
        return () => observer.disconnect();
    }, [onIntersect]);

    return (
        <BackgroundArticle>
            <ServiceContainerDiv>
                <BigTextP>제공되는 서비스</BigTextP>
                <DescriptionDiv ref={target}>
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
    );
}

// styled-components

const ServiceContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    padding-top: 150px;
`;

const DescriptionDiv = styled.div`
    opacity: 0;

    width: 100%;
    height: 400px;

    margin-top: 50px;

    &.event {
        opacity: 1;
        transition: opacity 1.5s ease-in-out;
    }

    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-around;
    align-items: center;

    @media ${({ theme }) => theme.device.laptop} {
        height: 700px;

        ${({ theme }) => theme.flexStyled.flexColumn};
    }
`;
