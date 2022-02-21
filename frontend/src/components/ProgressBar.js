import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export function ProgressBar({ percent }) {
    return (
        <ProgressbarBox>
            <ProgressbarGauge percent={percent} />
        </ProgressbarBox>
    );
}

// styled-components
// const Percent = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

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
    height: 100%;

    background-color: ${({ theme }) => theme.color.spring};
`;
