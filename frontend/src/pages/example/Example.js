import { ExampleHeader, ExampleArticle } from '.';
import { ScrollUpIcon, NavBackgroundDiv } from '../../components';

function Example() {
    const titleText = {
        spring: 'Spring 봄 웜톤',
        summer: 'Summer 여름 쿨톤',
        autumn: 'Autumn 가을 웜톤',
        winter: 'Winter 겨울 쿨톤',
    };

    return (
        <>
            <NavBackgroundDiv />
            <ScrollUpIcon />
            <ExampleHeader />
            <ExampleArticle text={titleText.spring} season="spring" />
            <ExampleArticle text={titleText.summer} season="summer" />
            <ExampleArticle text={titleText.autumn} season="autumn" />
            <ExampleArticle text={titleText.winter} season="winter" />
        </>
    );
}

export { Example };
