import styled from 'styled-components';
import { ContainerDiv } from '..';

export function ExampleColor({ season }) {
    const colorData = {
        spring: [
            '#FFF9BF',
            '#FEF104',
            '#FAAC84',
            '#EF6534',
            '#E41B23',
            '#F2625F',
            '#F59C8C',
            '#FCCCA6',
            '#F5E8C8',
            '#FFC353',
            '#FCDEB8',
            '#D5E14E',
            '#A0CD70',
            '#70B33F',
            '#00A263',
            '#D0E4A5',
            '#9FD5B3',
            '#71C7A4',
            '#45C4D3',
            '#BD84B1',
            '#A68660',
            '#B8785D',
        ],
        summer: [
            '#8ED2C5',
            '#009381',
            '#CBECEB',
            '#A1C5DD',
            '#5F89A1',
            '#01456A',
            '#919296',
            '#CAD0C2',
            '#B0BBC1',
            '#C9CAE6',
            '#9A9ACC',
            '#DACDDF',
            '#EFD6E6',
            '#F8B9D4',
            '#EA77B0',
            '#C8158D',
            '#16315C',
            '#626065',
            '#E1EEC3',
            '#E3E0B7',
            '#CD7E94',
            '#B960A4',
        ],
        autumn: [
            '#918FC8',
            '#4E2240',
            '#B82C46',
            '#96072D',
            '#F3A374',
            '#ED6F0F',
            '#E6771B',
            '#E25349',
            '#CA5C3D',
            '#C22241',
            '#D70E38',
            '#92074A',
            '#927F50',
            '#723423',
            '#6A262E',
            '#AED694',
            '#7CB657',
            '#137C2E',
            '#9DDEDA',
            '#4F9EB4',
            '#118DC9',
            '#036174',
        ],
        winter: [
            '#D4CAD0',
            '#C1C4E2',
            '#B75FAC',
            '#FCCBDF',
            '#FA67AA',
            '#CD3095',
            '#EEF0C6',
            '#F9F22C',
            '#F3E902',
            '#1B165F',
            '#550761',
            '#BBFFEE',
            '#35BC91',
            '#0C5C22',
            '#019F9D',
            '#C9EBF7',
            '#3EBBF5',
            '#08A2DD',
            '#3F4DA8',
            '#320950',
            '#043C93',
            '#0F258B',
        ],
    };

    function returnColorDiv(item) {
        return <ColorDiv color={item} key={item} />;
    }
    return (
        <ColorContainerDiv>
            {(season === 'spring' && colorData.spring.map(item => returnColorDiv(item))) ||
                (season === 'summer' && colorData.summer.map(item => returnColorDiv(item))) ||
                (season === 'autumn' && colorData.autumn.map(item => returnColorDiv(item))) ||
                (season === 'winter' && colorData.winter.map(item => returnColorDiv(item)))}
        </ColorContainerDiv>
    );
}

// styled-components;

const ColorContainerDiv = styled(ContainerDiv)`
    padding: 50px 0;

    text-align: center;
`;

const ColorDiv = styled.div`
    display: inline-block;
    width: 85px;
    height: 85px;

    margin: 10px;

    border-radius: 50%;

    background-color: ${({ color }) => color};

    @media ${({ theme }) => theme.device.mobile} {
        width: 70px;
        height: 70px;

        margin: 10px;
    }
`;
