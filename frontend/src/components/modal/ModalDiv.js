import styled from 'styled-components';
import { useEffect } from 'react';
import { setScrollDisabled } from '../../utils/data/setScrollDisabled';

export function ModalDiv({ children, className }) {
    useEffect(() => {
        if (className && className?.indexOf('show') >= 0) {
            setScrollDisabled(true);
        }
        return () => {
            setScrollDisabled(false);
        };
    }, [className]);
    return <Div className={className}>{children}</Div>;
}

export const Div = styled.div`
    display: none;

    &.show {
        position: fixed;
        z-index: 9999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        ${({ theme }) => theme.flexStyled.flexCenter};

        width: auto;
        height: auto;

        padding: 100px 50px;

        background-color: white;

        border: 1px solid #f3f3f3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        .text {
            margin: 0;
        }

        @media ${({ theme }) => theme.device.tablet} {
            width: 90%;

            .text {
                font-size: 1.5rem;
            }
        }
    }
`;
