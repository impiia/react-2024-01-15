import styles from './styles.module.scss';

export const ContactsPage = () => {
    console.log("ContactsPage re-render");
    return (
            <div className={styles.root}>
                Contacts Page
            </div>
    );
};
