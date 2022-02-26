import styled from 'styled-components';
import { SubTitleP } from '../../index';
import { ProgressBar } from '../progressbar/ProgressBar';

export function PercentResult({ resultColor }) {
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
                        <ProgressBar percent={82} resultColor={resultColor} />
                    </dt>
                    <dt className="progress">
                        <ProgressBar percent={65} resultColor={resultColor} />
                    </dt>
                    <dt className="progress">
                        <ProgressBar percent={70} resultColor={resultColor} />
                    </dt>
                </dl>
                <dl>
                    <dt className="progress">82%</dt>
                    <dt className="progress">65%</dt>
                    <dt className="progress">70%</dt>
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
