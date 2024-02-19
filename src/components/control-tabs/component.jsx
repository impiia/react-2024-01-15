/* eslint-disable react/jsx-key */
import { NavLink } from 'react-router-dom';
import { Tab } from '../tab/component';
import styles from './styles.module.scss';

export const ControlTabs = ({ restaurantId }) => {
    return (
        <div className={styles.tabs}>
            <NavLink to={`/restaurants/${restaurantId}/menu`}>
                {({ isActive }) =>
                    <Tab
                        title="Menu"
                        disabled={isActive}
                    />}
            </NavLink>


            <NavLink to={`/restaurants/${restaurantId}/reviews`}>
                {
                    ({ isActive }) =>
                        <Tab
                            title="Reviews"
                            disabled={isActive}
                        />}
            </NavLink>
        </div>
    );
};