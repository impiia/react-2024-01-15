import { forwardRef } from 'react';
import styles from './styles.module.scss';
import classNames from "classnames";

export const Button = forwardRef(
    function Button({ onClick, children, className, disabled }, ref ) {
    return (
        <button ref={ref} className={classNames(styles.root, className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
})