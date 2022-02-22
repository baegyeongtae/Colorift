import styled from 'styled-components';

export const ContainerDiv = styled.div`
    max-width: 1170px;
    height: auto;
    position: relative;
    margin: 0 auto;

    @media screen and (min-width: 992px) and (max-width: 1200px) {
        max-width: 970px;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        max-width: 750px;
    }

    @media screen and (max-width: 767px) {
        max-width: 100%;
    }
`;
