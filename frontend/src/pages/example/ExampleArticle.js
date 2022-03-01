import { ExampleTitle, ExampleImage, BackgroundArticle, ExampleColor } from '../../components';

export function ExampleArticle({ text, season }) {
    return (
        <BackgroundArticle>
            <ExampleTitle text={text} />
            <ExampleImage season={season} />
            <ExampleColor season={season} />
        </BackgroundArticle>
    );
}
