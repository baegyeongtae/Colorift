/* eslint-disable no-unused-expressions */
import { BlurBackgroundDiv, ModalCloseIcon, SubTitleP } from '..';
import { ModalDiv } from './ModalDiv';

export function TextModal({ toggleProps, className, text }) {
    const handleToggleClick = () => {
        toggleProps && toggleProps();
    };

    return (
        <>
            <BlurBackgroundDiv className={className} onClick={handleToggleClick} />
            <ModalDiv className={className}>
                <SubTitleP className="text">{text}</SubTitleP>
                <ModalCloseIcon toggleProps={handleToggleClick} />
            </ModalDiv>
        </>
    );
}
