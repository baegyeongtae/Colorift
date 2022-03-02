import { BackgroundDiv, ModalCloseIcon, SubTitleP } from '..';
import { ModalDiv } from './ModalDiv';

export function TextModal({ toggleClickProps, className, text }) {
    const handleToggleClick = () => {
        toggleClickProps();
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <SubTitleP className="text">{text}</SubTitleP>
                <ModalCloseIcon clickProps={handleToggleClick} />
            </ModalDiv>
        </>
    );
}
