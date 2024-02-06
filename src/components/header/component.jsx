import { useContext,useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { UserContext } from '../../contexts/user';
import { Modal } from '../modal-login-form/component';


export const Header = () => {
    const { name, email, setUser } = useContext(UserContext);
    const isAuthenticated = name !== "" && email !== "";
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleLogoutClick = () => {
        setUser({ name: '', email: '' });
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className={styles.root}>
            <div className={styles.user}>
                {isAuthenticated ? (
                    <div>
                        <span style={{ marginRight: "10px" }}>name: {name}</span>
                        <span style={{ marginRight: "10px" }}>e-mail: {email}</span>
                        <Button onClick={handleLogoutClick}>Logout</Button>
                    </div>
                ) : (
                    <>
                        <Button onClick={handleLoginClick}>Login</Button>
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                    </>
                )}
            </div>
        </header>
    );
};