import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { ExampleHeader, ExampleArticle } from '.';

function Example() {
    const titleText = {
        spring: 'Spring 봄 웜톤',
        summer: 'Summer 여름 쿨톤',
        autumn: 'Autumn 가을 웜톤',
        winter: 'Winter 겨울 쿨톤',
    };

    useScrollToTop();

    return (
        <>
            <ExampleHeader />
            <ExampleArticle text={titleText.spring} season="spring" />
            <ExampleArticle text={titleText.spring} season="spring" />
            <ExampleArticle text={titleText.spring} season="spring" />
            <ExampleArticle text={titleText.spring} season="spring" />
        </>
    );
}

export { Example };
