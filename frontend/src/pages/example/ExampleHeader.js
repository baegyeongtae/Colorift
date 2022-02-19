import styled from 'styled-components';
import { ContainerDiv } from '../../components';

export function ExampleHeader() {
    return (
        <Header>
            <ContainerDiv>
                <p>피부톤에 따라 어울리는 퍼스널 컬러를 미리 만나보세요.</p>
                <p>※ 예시로 보여드리는 컬러입니다. 실제로 분석 후 나오는 컬러의 종류는 더욱 많습니다.</p>
            </ContainerDiv>
        </Header>
    );
}

// styled-components

const Header = styled.header`
    height: 500px;

    text-align: center;

    background: linear-gradient(269.7deg, #3c64b1 -91.94%, #000d27 97.3%);
`;
