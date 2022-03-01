import styled from 'styled-components';

export function MyPageFashion() {
    return (
        <FassionFlexDiv>
            <div />
            <div />
            <div />
            <div />
        </FassionFlexDiv>
    );
}

// styled-components

const FassionFlexDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 10px;

    margin-top: 30px;

    div {
        width: 100%;
        height: 300px;

        background-color: ${({ theme }) => theme.color.lightgray};
    }

    @media ${({ theme }) => theme.device.tablet} {
        grid: unset;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        row-gap: 10px;


`;
