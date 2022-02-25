import styled from 'styled-components';
import { ContainerDiv, BigTextP, DescriptionP } from '../../components';

export function ExampleHeader() {
    return (
        <Header>
            <ExampleContainerDiv>
                <BigTextP color="white">
                    피부톤에 따라
                    <br className="mobile" /> 어울리는 퍼스널 컬러를
                    <br className="mobile" /> 미리 만나보세요.
                </BigTextP>
                <DescriptionP color="#999999">
                    ※ 예시로 보여드리는 컬러입니다. <br className="mobile" />
                    실제로 분석 후 나오는 컬러의 종류는 더욱 많습니다.
                </DescriptionP>
            </ExampleContainerDiv>
        </Header>
    );
}

// styled-components

const Header = styled.header`
    height: 400px;

    background: linear-gradient(269.7deg, #3c64b1 -91.94%, #000d27 97.3%);
`;

const ExampleContainerDiv = styled(ContainerDiv)`
    height: 100%;

    line-height: 50px;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    @media ${({ theme }) => theme.device.mobile} {
        width: 50vw;
    }
`;
