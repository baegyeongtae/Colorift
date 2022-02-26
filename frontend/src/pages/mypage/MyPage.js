import styled from 'styled-components';
import { useEffect } from 'react';
import { getPersonalList, setUserOut } from '../../utils/api/service';
import { Article, ContainerDiv, UserButton, Input, GrayButton, NavBackgroundDiv } from '../../components';
import { arrowIcon } from '../../image';

export function MyPage() {
    // 퍼스널 컬러 더미 데이터
    const dummyData = [
        {
            id: 1,
            date: '2022.02.10',
            color: '봄 웜톤',
        },
        {
            id: 2,
            date: '2022.02.12',
            color: '여름 쿨톤',
        },
    ];

    // 회원탈퇴 함수
    const handleUserOut = () => {
        setUserOut();
    };

    // 퍼스널 컬러 목록 조회
    useEffect(() => getPersonalList(), []);

    return (
        <>
            <NavBackgroundDiv />
            <Article height="88vh">
                <MyPageContainerDiv>
                    <FlexRowDiv className="area">
                        <UserInfoDiv>
                            <p className="option">이메일</p>
                            <p className="email">admin@naver.com</p>
                            <p className="option">비밀번호 변경</p>
                            <Input type="password" width="80%" />
                            <UserButton height="90%" onClick={() => alert('패스워드 변경 완료')}>
                                변경하기
                            </UserButton>
                            <p className="option delete">회원탈퇴는 신중히 결정해주세요.</p>
                            <UserButton height="90%" onClick={handleUserOut}>
                                회원탈퇴
                            </UserButton>
                        </UserInfoDiv>
                        <PersonalDiv>
                            <SubTitleP>My Personal Color</SubTitleP>
                            <PersonalTableDiv>
                                <table>
                                    <tbody>
                                        {dummyData.map(item => (
                                            <tr key={item.id}>
                                                <td className="id">{item.id}</td>
                                                <td className="date">{item.date}</td>
                                                <td className="color">{item.color}</td>
                                                <td className="button">
                                                    <GrayButton
                                                        width="90%"
                                                        onClick={() => alert(`클릭하신 피부톤은 ${item.color}입니다`)}
                                                    >
                                                        상세보기
                                                    </GrayButton>
                                                </td>
                                                <td className="button">
                                                    <GrayButton
                                                        width="90%"
                                                        onClick={() => alert(`${item.id}번을 삭제했습니다`)}
                                                    >
                                                        삭제하기
                                                    </GrayButton>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </PersonalTableDiv>
                        </PersonalDiv>
                    </FlexRowDiv>
                    <FassionDiv className="area">
                        <SubTitleP>My Style</SubTitleP>
                        <FassionFlexDiv>
                            <img src={arrowIcon} alt="왼쪽 슬라이드 화살표" className="arrow left" />
                            <div />
                            <div />
                            <div className="mobile" />
                            <div className="mobile" />
                            <img src={arrowIcon} alt="왼쪽 슬라이드 화살표" className="arrow right" />
                        </FassionFlexDiv>
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

const UserInfoDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;

    padding: 50px 60px;

    .option {
        font-weight: bold;
    }

    .email {
        grid-column-start: 2;
        grid-column-end: 4;
    }

    .delete {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    @media ${({ theme }) => theme.device.tablet} {
        padding: 30px;

        button {
            height: 80%;

            border-radius: 5px;
        }
    }
`;

const SubTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    font-weight: bold;
`;

const PersonalDiv = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        padding: 0 20px;
    }
`;

const PersonalTableDiv = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 5px;
    padding: 20px;

    border: 1px solid #dbdbdb;
    border-radius: 15px;

    text-align: center;

    tr {
        height: 40px;
    }

    .id {
        width: 20px;
    }

    .date {
        width: 150px;
    }

    .color {
        width: 200px;
    }

    .button {
        width: 100px;
    }

    @media ${({ theme }) => theme.device.tablet} {
        padding: 10px;
    }
`;

const FassionDiv = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        padding: 40px 20px;
    }
`;

const FassionFlexDiv = styled.div`
    display: grid;
    grid-template-columns: auto repeat(4, 1fr) auto;
    justify-items: center;
    align-items: center;
    column-gap: 10px;

    margin-top: 30px;

    div {
        width: 100%;
        height: 300px;

        background-color: ${({ theme }) => theme.color.lightgray};
    }

    .arrow {
        width: 50px;
        height: 50px;

        filter: invert(88%) sepia(0%) saturate(4%) hue-rotate(149deg) brightness(94%) contrast(81%);

        cursor: pointer;

        @media ${({ theme }) => theme.device.tablet} {
            width: 20px;
            height: 20px;
        }
    }

    .left {
        transform: rotate(0.75turn);
    }

    .right {
        transform: rotate(0.25turn);
    }

    @media ${({ theme }) => theme.device.tablet} {
        grid-template-columns: auto repeat(2, 1fr) auto;

        .mobile {
            display: none;
        }
    }
`;
