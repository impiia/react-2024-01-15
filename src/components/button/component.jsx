import { forwardRef } from 'react';
import style from './styles.module.scss';
import classNames from "classnames";

export const Button = forwardRef(
    function Button({ onClick, children, className, disabled }, ref ) {
    return (
        <button ref={ref} className={classNames(style.root, className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
})