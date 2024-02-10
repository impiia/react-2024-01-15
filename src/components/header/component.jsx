import { useContext,useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { UserContext } from '../../contexts/user';
import { Modal } from '../modal-login-form/component';
import { CartButtonContainer } from '../cart-button/container';

export const Header = () => {
    const { name, email, setUser } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isAuthenticated = name !== "" && email !== "";
   
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
                        <Button className={styles.button} onClick={handleLogoutClick} >Logout</Button>
                    </div>
                ) : (
                    <>
                        <Button className={styles.button} onClick={handleLoginClick} >Login</Button>
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                    </>
                )}
                <CartButtonContainer></CartButtonContainer>
            </div>
        </header>
    );
};