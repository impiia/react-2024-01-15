import { useContext,useState } from 'react';
import { Button } from '../button/component';
import styles from './styles.module.scss';
import { UserContext } from '../../contexts/user';
import { Modal } from '../modal-login-form/component';
import { CartButtonContainer } from '../cart-button/container';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Header = () => {
    const { name, email, id, updateUser } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isAuthenticated = name !== "" && email !== "" && id !== "";
   
    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleLogoutClick = () => {
        updateUser({ name: '', email: '' });
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className={styles.root}>
        <Link to="/" className={classNames(styles.logo, styles.link)}>R-Logo</Link>
        <Link to="/restaurants" className={classNames(styles.logo, styles.link)}>Restaurants</Link>
        <Link to="/contacts" className={classNames(styles.logo, styles.link)}>Contacts</Link>
        <Link to="/about-us" className={classNames(styles.logo, styles.link)}>About us</Link>
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