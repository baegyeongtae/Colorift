import styled from 'styled-components';
import { ProgressBar } from '../progressbar/ProgressBar';

export function PercentResult({ resultColor, hue, saturation, value }) {
    return (
        <ContentContainerDiv>
            <ProgressDiv>
                <dl>
                    <dt className="progress">색상</dt>
                    <dt className="progress">명도</dt>
                    <dt className="progress">채도</dt>
                </dl>
                <dl>
                    <dt className="progress">
                        <ProgressBar percent={hue} resultColor={resultColor} />
                    </dt>
                    <dt className="progress">
                        <ProgressBar percent={saturation} resultColor={resultColor} />
                    </dt>
                    <dt className="progress">
                        <ProgressBar percent={value} resultColor={resultColor} />
                    </dt>
                </dl>
                <dl>
                    <dt className="progress">{hue}%</dt>
                    <dt className="progress">{saturation}%</dt>
                    <dt className="progress">{value}%</dt>
                </dl>
            </ProgressDiv>
        </ContentContainerDiv>
    );
}

// styled-components

const ContentContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    margin-top: 8px;
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
`;
