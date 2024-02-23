import { Button } from "../button/component";
import styles from './styles.module.scss';

export const Tab = ({ title, disabled}) => {

    return (
        <Button
            className={styles.pageLink}
            disabled={disabled}
        >
            {title}
        </Button>
    );
};


