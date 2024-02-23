import { useEffect, useRef, useState, useCallback } from "react";
import { ButtonMemoized } from "../button/component";
import { createPortal } from "react-dom";
import { CartContainer } from "../cart/container";
import styles from "./styles.module.scss";

export const CartButton = ({ amount }) => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef();

    const toggleCartPopover = useCallback(() => {
       setIsOpen(!isOpen);
    }, [isOpen]);

    const popoverContainer = useRef(null);

    useEffect(() => {
        popoverContainer.current = document.getElementById("popover-container");
    }, []);

    return (
        <div className={styles.root}>
            <ButtonMemoized rootRef={buttonRef} onClick={toggleCartPopover}>
                {amount}
            </ButtonMemoized>
            {isOpen && (amount!==0) && createPortal( 
                <div className={styles.popoverContainer}><CartContainer /></div>,  
                popoverContainer.current,
            )}
        </div>
    );
};
