export const season = {
    SP: 'spring',
    SU: 'summer',
    AU: 'autumn',
    WI: 'winter',
};

export function SeasonTone(_season) {
    const colorData = {
        spring: '#E6324B',
        summer: '#01456A',
        autumn: '#CA5C3D',
        winter: '#F3E902',
    };
    const resultColor =
        (_season === 'spring' && colorData.spring) ||
        (_season === 'summer' && colorData.summer) ||
        (_season === 'autumn' && colorData.autumn) ||
        colorData.winter;

    return resultColor;
}
