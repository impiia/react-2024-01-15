import { useEffect, useRef, useState } from "react";
import { Button } from "../button/component";
import { createPortal } from "react-dom";
import { CartContainer } from "../cart/container";
import styles from "./styles.module.scss";

export const CartButton = ({ amount }) => {
    const [coordinates, setCoordinates] = useState(null);
    const buttonRef = useRef();

    const toggleCartPopover = () => {
        if (coordinates) {
            setCoordinates(null);
            return;
        }
        const {bottom,right} = buttonRef.current.getBoundingClientRect();
        setCoordinates({ right: -right, top: bottom });
    }
    const popoverContainer = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (coordinates) {
                const { bottom, right } = buttonRef.current.getBoundingClientRect();
                setCoordinates({ right: -right, top: bottom });
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [coordinates]); 

    useEffect(() => {
        popoverContainer.current = document.getElementById("popover-container");
    }, []);

    return (
        <div className={styles.root}>
            <Button ref={buttonRef} onClick={toggleCartPopover}>
                {amount}
            </Button>
            {coordinates && createPortal( 
                <div style={coordinates} className={styles.popoverContainer}><CartContainer /></div>,  
                document.getElementById("popover-container")
            )}
        </div>
    );
};
