import { useScrollToTop } from '../../utils/hooks/useScrollToTop';
import { ExampleHeader } from '.';

function Example() {
    useScrollToTop();

    return (
        <>
            <ExampleHeader />
            <div />
        </>
    );
}

export { Example };
