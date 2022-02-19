import { ExampleTitle, ExampleImage, Article, ExampleColor } from '../../components';

export function ExampleArticle({ text, season }) {
    return (
        <Article>
            <ExampleTitle text={text} />
            <ExampleImage season={season} />
            <ExampleColor />
        </Article>
    );
}
