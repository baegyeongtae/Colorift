export const season = {
    SP: 'spring',
    SU: 'summer',
    AU: 'autumn',
    WI: 'winter',
};

export const seasonPersonal = {
    SP: '봄 웜톤',
    SU: '여름 쿨톤',
    AU: '가을 웜톤',
    WI: '겨울 쿨톤',
};

export function SeasonTone(_season) {
    const colorData = {
        spring: '#E6324B',
        summer: '#1F8CAB',
        autumn: '#D5B009',
        winter: '#C50778',
    };

    const resultColor =
        (_season === 'spring' && colorData.spring) ||
        (_season === 'summer' && colorData.summer) ||
        (_season === 'autumn' && colorData.autumn) ||
        colorData.winter;

    return resultColor;
}
