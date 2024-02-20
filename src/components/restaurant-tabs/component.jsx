/* eslint-disable react/jsx-key */
import { NavLink } from 'react-router-dom';
import { Tab } from '../tab/component';

export const RestaurantTabs = ({restaurants, onSelectRestaurant}) => {
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
