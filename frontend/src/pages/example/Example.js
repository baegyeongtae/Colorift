import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { ExampleHeader, ExampleArticle } from '.';
import { ScrollUpIcon, Footer } from '../../components';

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
            <ScrollUpIcon />
            <ExampleHeader />
            <ExampleArticle text={titleText.spring} season="spring" />
            <ExampleArticle text={titleText.summer} season="summer" />
            <ExampleArticle text={titleText.autumn} season="autumn" />
            <ExampleArticle text={titleText.winter} season="winter" />
            <Footer />
        </>
    );
}

export { Example };
