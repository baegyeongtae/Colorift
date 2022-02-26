import styled from 'styled-components';

export function ProgressBar({ percent, resultColor }) {
    return (
        <ProgressbarBox>
            <ProgressbarGauge percent={percent} resultColor={resultColor} />
        </ProgressbarBox>
    );
}

// styled-components

const ProgressbarBox = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        width: 220px;
        height: 15px;

        border-radius: 10px;
        background-color: #f3f3f3;
        overflow: hidden;
        margin: 8px 0;
    }
    width: 300px;
    height: 20px;

    border-radius: 8px;
    background-color: #f3f3f3;
    overflow: hidden;
    margin: 10px 0;
`;

const ProgressbarGauge = styled.div`
    width: ${props => `${props.percent}%`};
    background-color: ${props => `${props.resultColor}`};
    height: 100%;
`;
