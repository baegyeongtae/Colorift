// 폰트 사이즈
const pixelToRem = size => `${size / 16}rem`;
const fontSizes = {
    title: pixelToRem(40),
    bigtext: pixelToRem(30),
    mediumtext: pixelToRem(20),
    smalltext: pixelToRem(12),
    mobiletext: pixelToRem(10),
};

// 색상 지정
const color = {
    blue: '#3C64B1',
    darkgray: '#373F41',
    lightgray: '#C4C4C4',
    spring: '#E6324B',
    summer: '#1F8CAB',
    autumn: '#D5B009',
    winter: '#C50778',
    nav: '#f4f6fb',
};

// 자주 사용하는 flex 스타일 속성
const flexStyled = {
    flexCenter: `
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    flexColumn: `
        display: flex;
        flex-direction: column;
    `,
    flexRow: `
        display: flex;
        flex-direction: row;
    `,
};

// 데스크탑, 모바일 사이즈
const deviceSizes = {
    mobile: '390px', // 아이폰 13 기준
    tablet: '768px',
    laptop: '1024px',
};
const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

// theme 지정
const theme = {
    fontSizes,
    color,
    flexStyled,
    device,
};

export default theme;
