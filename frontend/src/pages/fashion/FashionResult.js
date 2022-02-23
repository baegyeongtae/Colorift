import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { ResultImage, ProgressBar, Fashion, SubTitleP, BlueButton, ContainerDiv } from '../../components';

function FashionResult() {
    return (
        <>
            <Fashion />
            <ContentContainerDiv>
                <ResultImage />
            </ContentContainerDiv>

            <SubTitleP>이 옷은 봄 웜톤인 회원님께</SubTitleP>

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
                <SubTitleP>종합 67%만큼 매칭됩니다.</SubTitleP>
            </ContentContainerDiv>

            <ContentContainerDiv>
                <img src="./images/color.png" alt="Color" width="343px" height="90px" />
            </ContentContainerDiv>

            <ButtonContainerDiv>
                <Stack spacing={2} direction="row">
                    <CustomButton>다른 옷 매칭하기</CustomButton>
                    <CustomButton>퍼스널 컬러 찾기</CustomButton>
                </Stack>
            </ButtonContainerDiv>

            <ContentContainerDiv>
                <div>..</div>
            </ContentContainerDiv>
        </>
    );
}

export { FashionResult };

// styled-components

const ContentContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

const ButtonContainerDiv = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;

    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};
`;

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

const CustomButton = styled(BlueButton)`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.smalltext};
        width: 130px;
    }
    width: 180px;
`;
