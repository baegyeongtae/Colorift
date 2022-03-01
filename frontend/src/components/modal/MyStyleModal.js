import styled from 'styled-components';
import { ProgressBar } from '..';

function MyStyleModal() {
    return (
        <>
            <TableContainerDiv>
                <table className="type11">
                    <thead>
                        <tr width="20px">
                            <th>번호</th>
                            <th>분석 날짜</th>
                            <th>제목</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr width="20px">
                            <td>1</td>
                            <td>2022.02.11</td>
                            <td>사용자 지정 제목</td>
                        </tr>
                    </tbody>
                </table>
            </TableContainerDiv>
            <TextH2>회원님은 기본 퍼스널 컬러 - 봄 웜톤을 선택했습니다.</TextH2>

            <ContentContainerDiv />

            <TextH1>이 옷은 봄 웜톤인 회원님께</TextH1>

            <ContentContainerDiv>
                <ProgressDiv>
                    <dl>
                        <dt className="progress">색상</dt>
                        <dt className="progress">명도</dt>
                        <dt className="progress">채도</dt>
                    </dl>
                    <dl>
                        <dt className="progress">
                            <ProgressBar percent={82} />
                        </dt>
                        <dt className="progress">
                            <ProgressBar percent={65} />
                        </dt>
                        <dt className="progress">
                            <ProgressBar percent={70} />
                        </dt>
                    </dl>
                    <dl>
                        <dt className="progress">82%</dt>
                        <dt className="progress">65%</dt>
                        <dt className="progress">70%</dt>
                    </dl>
                </ProgressDiv>
                <TextH1>종합 67%만큼 매칭됩니다.</TextH1>
            </ContentContainerDiv>
        </>
    );
}

export { MyStyleModal };

// styled-components

const ContentContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8px;
        margin-top: 8px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TableContainerDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.white};
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        margin-top: 8px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    table.type11 {
        border-collapse: separate;
        text-align: center;
        line-height: 1.5;
        margin: 20px 10px;
        width: 600px;
        border-spacing: 0px;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
    }
    table.type11 th {
        padding: 10px;
        font-weight: bold;
        vertical-align: top;

        border-bottom: 1px solid black;
        border-top: 1px solid black;
        border-left: 1px solid black;
    }

    table.type11 td {
        padding: 10px;
        vertical-align: top;

        border-left: 1px solid black;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH1 = styled.h1`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        font-weight: bold;
        margin: 8px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 1.5rem;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const TextH2 = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
        margin-top: 20px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

// const TextH3 = styled.h3`
//     @media ${({ theme }) => theme.device.mobile} {
//         font-size: ${({ theme }) => theme.fontSizes.smalltext};
//         margin: 25px;
//         font-weight: 550;
//     }
//     color: ${({ theme }) => theme.color.white};
//     background-color: ${props => props.theme.color.white};
// `;

const ProgressDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        color: ${({ theme }) => theme.color.darkgray};
        display: flex;
        flex-direction: row;
        align-items: center;

        .progress {
            margin: 8px;
            font-weight: bold;
        }
    }
    font-size: 1rem;
    color: ${({ theme }) => theme.color.darkgray};
    display: flex;
    flex-direction: row;
    align-items: center;

    .progress {
        margin: 8px;
    }
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;
