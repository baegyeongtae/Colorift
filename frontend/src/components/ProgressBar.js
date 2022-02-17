import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function ProgressBar({ percent }) {
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
    width: 220px;
    height: 15px;

    border-radius: 10px;
    background-color: #f3f3f3;
    overflow: hidden;
    margin: 10px 0;
`;

const ProgressbarGauge = styled.div`
    width: ${props => `${props.percent}%`};
    height: 100%;

    background-color: ${({ theme }) => theme.color.spring};
`;
