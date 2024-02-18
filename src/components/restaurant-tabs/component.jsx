/* eslint-disable react/jsx-key */
import { NavLink } from 'react-router-dom';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Loader } from '../loader/component';
import { Tab } from '../tab/component';
import styles from "./styles.module.scss";

export const RestaurantTabs = ({ onSelectRestaurant }) => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery();

    if (isLoading) {
        return <Loader className={styles.loader} />;
    }

    if (!restaurants) {
        return null;
    }

    return (
        <>
            {restaurants.map(({ id, name }) => (
                <NavLink to={`/restaurants/${id}`} key={id}>
                    {
                        ({ isActive }) =>
                            <Tab id={id}
                                onClick={() => onSelectRestaurant(id)}
                                title={name}
                                disabled={isActive}
                            />}
                </NavLink>
            ))}
        </>
    );
};
