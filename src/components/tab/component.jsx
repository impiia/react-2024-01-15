import { Button } from "../button/component";
import styles from './styles.module.scss';

export const Tab = ({ onClick, title, disabled}) => {

    return (
        <Button
            className={styles.pageLink}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </Button>
    );
};


