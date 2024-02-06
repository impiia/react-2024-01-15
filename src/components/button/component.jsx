
import style from './styles.module.scss';
import classNames from "classnames";

export const Button = ({ onClick, children, className, disabled }) => {
    return (
        <button className={classNames(style.root, className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}