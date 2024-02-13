import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

export const ModalIsLoading = () => {
    const modalContainer = document.getElementById("modal-container");
    return createPortal(
        <div className={styles.root}>
            is loading...
        </div>,
        modalContainer
    );
};

