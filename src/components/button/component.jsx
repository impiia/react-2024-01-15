import styles from './styles.module.scss';
import classNames from "classnames";

export const Button = ({ onClick, children, className, disabled, rootRef }) => {
    return (
        <button ref={rootRef} className={classNames(styles.root, className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};