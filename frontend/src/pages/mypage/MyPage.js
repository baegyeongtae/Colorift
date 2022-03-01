import styled from 'styled-components';
import { useEffect } from 'react';
import { getPersonalList } from '../../utils/api/service';
import { Article, ContainerDiv, NavBackgroundDiv } from '../../components';
import { MyPageInfo, MyPagePersonal, MyPageFashion } from '.';

export function MyPage() {
    // 퍼스널 컬러 목록 조회
    useEffect(() => getPersonalList(), []);

    return (
        <>
            <NavBackgroundDiv />
            <Article height="88vh">
                <MyPageContainerDiv>
                    <FlexRowDiv className="area">
                        <MyPageInfo />
                        <PersonalDiv>
                            <SubTitleP>My Personal Color</SubTitleP>
                            <MyPagePersonal />
                        </PersonalDiv>
                    </FlexRowDiv>
                    <FassionDiv className="area">
                        <SubTitleP>My Style</SubTitleP>
                        <MyPageFashion />
                    </FassionDiv>
                </MyPageContainerDiv>
            </Article>
        </>
    );
}

// styled-components

const MyPageContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    .area {
        width: 100%;
        height: 50%;
    }
`;

const FlexRowDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};
    padding: 50px 0;

    > div {
        width: 50%;
    }

    @media ${({ theme }) => theme.device.tablet} {
        ${({ theme }) => theme.flexStyled.flexColumn};
        ${({ theme }) => theme.flexStyled.flexCenter};

        padding: 0;

        > div {
            width: 100%;
        }
    }
`;

const PersonalDiv = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        padding: 0 20px;
    }
`;

const SubTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    font-weight: bold;
`;

const FassionDiv = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        padding: 40px 20px;
    }
`;
