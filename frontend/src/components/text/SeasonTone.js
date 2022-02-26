/* eslint-disable no-nested-ternary */
export function SeasonTone(season) {
    const colorData = {
        spring: '#E6324B',
        summer: '#01456A',
        autumn: '#CA5C3D',
        winter: '#F3E902',
    };
    const resultColor =
        season === 'spring'
            ? colorData.spring
            : season === 'summer'
            ? colorData.summer
            : season === 'autumn'
            ? colorData.autumn
            : colorData.winter;

    return resultColor;
}
