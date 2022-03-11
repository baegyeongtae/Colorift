import styled from 'styled-components';
import { ProgressBar } from '../progressbar/ProgressBar';

export function PercentResult({ resultColor, spring, summer, autumn, winter }) {
    return (
        <ContentContainerDiv>
            <ProgressDiv>
                <dl>
                    <dt className="progress">봄 웜톤</dt>
                    <dt className="progress">여름 쿨톤</dt>
                    <dt className="progress">가을 웜톤</dt>
                    <dt className="progress">겨울 쿨톤</dt>
                </dl>
                <dl>
                    <dt className="progress">
                        <ProgressBar percent={spring} resultColor={resultColor} />
                    </dt>
                    <dt className="progress">
                        <ProgressBar percent={summer} resultColor={resultColor} />
                    </dt>
                    <dt className="progress">
                        <ProgressBar percent={autumn} resultColor={resultColor} />
                    </dt>
                    <dt className="progress">
                        <ProgressBar percent={winter} resultColor={resultColor} />
                    </dt>
                </dl>
                <dl>
                    <dt className="progress">{spring}%</dt>
                    <dt className="progress">{summer}%</dt>
                    <dt className="progress">{autumn}%</dt>
                    <dt className="progress">{winter}%</dt>
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
