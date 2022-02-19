import styled from 'styled-components';
import { ContainerDiv, HomeServiceIcon, SubTitle, Article } from '../../components';

export function HomeService() {
    return (
        <ServiceArticle>
            <ServiceContainerDiv>
                <SubTitle>제공되는 서비스</SubTitle>
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
                <BarContainerDiv>
                    <ColorBarDiv width="70" top="0" color="spring" />
                    <ColorBarDiv width="60" top="30" color="summer" />
                    <ColorBarDiv width="50" top="60" color="autumn" />
                    <ColorBarDiv width="40" top="90" color="winter" />
                </BarContainerDiv>
            </ServiceContainerDiv>
        </ServiceArticle>
    );
}

// styled-components

const ServiceArticle = styled(Article)`
    height: auto;

    margin: 100px 0;
`;

const ServiceContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexColumn};
    justify-content: center;
    align-items: center;
`;

const DescriptionDiv = styled.div`
    width: 100%;
    height: 400px;

    margin: 50px 0;

    ${({ theme }) => theme.flexStyled.flexRow};
    justify-content: space-around;
    align-items: center;

    @media ${({ theme }) => theme.device.laptop} {
        height: 700px;

        ${({ theme }) => theme.flexStyled.flexColumn};
    }
`;

const BarContainerDiv = styled.div`
    width: 100%;
    height: 200px;

    position: relative;
`;

const ColorBarDiv = styled.div`
    width: ${({ width }) => width}%;
    height: 20px;

    position: absolute;
    top: ${({ top }) => top}%;
    right: 0;

    background-color: ${({ theme, color }) =>
        (color === 'spring' && theme.color.spring) ||
        (color === 'summer' && theme.color.summer) ||
        (color === 'autumn' && theme.color.autumn) ||
        (color === 'winter' && theme.color.winter)};
`;
