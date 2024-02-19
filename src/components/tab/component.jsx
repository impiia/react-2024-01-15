import { Button } from "../button/component";
import styles from './styles.module.scss';

export const Tab = ({ onClick, title}) => {

    return (
        <Button
            className={styles.pageLink}
            onClick={onClick}
        >
            {title}
        </Button>
    );
};


