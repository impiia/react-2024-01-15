import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

import style from './styles.module.scss';

export const Restaurant = ({ restaurantId }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
        return <div>No restaurant found for ID: {restaurantId}</div>;
    }

    return (
        <div className={style.root}>
            <h2>{restaurant.name}</h2>

            <Menu dishIds={restaurant.menu} />
            <Reviews reviewIds={restaurant.reviews} />
        </div>
    );
};
