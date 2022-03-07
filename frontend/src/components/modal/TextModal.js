import { BackgroundDiv, ModalCloseIcon, SubTitleP } from '..';
import { ModalDiv } from './ModalDiv';

export function TextModal({ toggleProps, className, text }) {
    const handleToggleClick = () => {
        toggleProps();
    };

    return (
        <>
            <BackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <SubTitleP className="text">{text}</SubTitleP>
                <ModalCloseIcon toggleProps={handleToggleClick} />
            </ModalDiv>
        </>
    );
}
