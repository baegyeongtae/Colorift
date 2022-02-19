import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { ExampleHeader, ExampleColor } from '.';

function Example() {
    useScrollToTop();

    return (
        <>
            <ExampleHeader />
            <ExampleColor />
        </>
    );
}

export { Example };
