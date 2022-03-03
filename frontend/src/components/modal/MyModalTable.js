import styled from 'styled-components';

export function MyModalTable({ id }) {
    return (
        <TableDiv>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>분석 날짜</th>
                        <th>제목</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>2022.02.11</td>
                        <td>사용자 지정 제목</td>
                    </tr>
                </tbody>
            </table>
        </TableDiv>
    );
}

// styled-components

const TableDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexCenter};

    width: 100%;

    table {
        width: 80%;

        margin: 20px 10px;

        text-align: center;
        line-height: 3rem;

        border-collapse: collapse;

        th {
            font-weight: bold;
        }
    }

    table,
    th,
    td {
        border: 1px solid black;
    }
`;
