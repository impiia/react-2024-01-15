import styles from './styles.module.scss';

export const HomePage = () => {
    console.log("HomePage re-render");
 
    return (
            <div className={styles.root}>
                Welcome 
            </div>
    );
};
