import { ButtonMemoized } from "../button/component";
import styles from './styles.module.scss';

export const Tab = ({ title, disabled}) => {
    
    return (
        <ButtonMemoized
            className={styles.pageLink}
            disabled={disabled}
        >
            {title}
        </ButtonMemoized>
    );
};


