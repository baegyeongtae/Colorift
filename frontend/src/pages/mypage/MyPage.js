import styled from 'styled-components';
import { BackgroundArticle, ContainerDiv, NavBackgroundDiv } from '../../components';
import { MyPageInfo, MyPagePersonal, MyPageFashion } from '.';

export function MyPage() {
    return (
        <BackgroundArticle>
            <NavBackgroundDiv />
            <MyPageContainerDiv>
                <FlexRowDiv>
                    <MyPageInfo />
                    <PersonalDiv>
                        <SubTitleP>My Personal Color</SubTitleP>
                        <MyPagePersonal />
                    </PersonalDiv>
                </FlexRowDiv>
                <FassionDiv>
                    <SubTitleP>My Style</SubTitleP>
                    <MyPageFashion />
                </FassionDiv>
            </MyPageContainerDiv>
        </BackgroundArticle>
    );
}

// styled-components

const MyPageContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};
`;

const FlexRowDiv = styled.div`
    width: 100%;

    ${({ theme }) => theme.flexStyled.flexRow};
    align-items: center;

    margin: 40px 0;

    @media ${({ theme }) => theme.device.tablet} {
        ${({ theme }) => theme.flexStyled.flexColumn};
        ${({ theme }) => theme.flexStyled.flexCenter};

        height: auto;

        margin-top: 0;
    }
`;

const PersonalDiv = styled.div`
    width: 50%;

    padding: 0 20px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 100%;
    }
`;

const SubTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    font-weight: bold;
`;

const FassionDiv = styled.div`
    width: 100%;

    padding: 0 20px;
`;
