import styled from 'styled-components';
import { Article, ContainerDiv, UserButton, Input, GrayButton } from '../../components';

export function MyPage() {
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
    return (
        <Article height="88vh" marginTop="7vh">
            <FlexContainerDiv>
                <FlexRowDiv className="area">
                    <UserInfoDiv>
                        <p className="option">이메일</p>
                        <p className="email">admin@naver.com</p>
                        <p className="option">비밀번호 변경</p>
                        <Input type="password" width="80%" />
                        <UserButton onClick={() => alert('패스워드 변경 완료')}>변경하기</UserButton>
                        <p className="option delete">회원탈퇴는 신중히 결정해주세요.</p>
                        <UserButton onClick={() => alert('회원탈퇴 완료')}>회원탈퇴</UserButton>
                    </UserInfoDiv>
                    <PersonalDiv>
                        <SubTitleP>My Personal Color</SubTitleP>
                        <PersonalTableDiv>
                            <table>
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
                            </table>
                        </PersonalTableDiv>
                    </PersonalDiv>
                </FlexRowDiv>
                <div className="area">
                    <SubTitleP>My Style</SubTitleP>
                    <FassionFlexDiv>
                        <img src="../image/arrow.svg" alt="왼쪽 슬라이드 화살표" className="arrow left" />
                        <div />
                        <div />
                        <div />
                        <div />
                        <img src="../image/arrow.svg" alt="왼쪽 슬라이드 화살표" className="arrow right" />
                    </FassionFlexDiv>
                </div>
            </FlexContainerDiv>
        </Article>
    );
}

// styled-components

const FlexContainerDiv = styled(ContainerDiv)`
    height: 100%;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    .area {
        width: 100%;
        height: 50%;
    }
`;

const FlexRowDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};

    > div {
        width: 50%;
    }
`;

const UserInfoDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;

    padding: 100px 60px;

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
`;

const PersonalDiv = styled.div`
    padding: 50px 0;
`;

const SubTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    font-weight: bold;
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
`;

const FassionFlexDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};

    margin-top: 30px;

    .arrow {
        width: 50px;

        margin: 0 5px;

        filter: invert(88%) sepia(0%) saturate(4%) hue-rotate(149deg) brightness(94%) contrast(81%);
    }

    .left {
        transform: rotate(0.75turn);
    }

    .right {
        transform: rotate(0.25turn);
    }

    div {
        width: 300px;
        height: 300px;

        margin: 0 10px;

        background-color: ${({ theme }) => theme.color.lightgray};
    }
`;
