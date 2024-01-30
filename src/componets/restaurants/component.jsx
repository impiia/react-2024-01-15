import { useState } from 'react';
import { RestaurantButtonList } from '../restaurantButtonList/component';
import { Restaurant } from '../restaurant/component';
import style from './styles.module.scss';

export const Restaurants = ({ restaurants }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0] || null);

    const selectRestaurant = (restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    return (
        <div className={style.root}>
            <RestaurantButtonList
                restaurants={restaurants}
                onSelectRestaurant={selectRestaurant}
            />
            {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
        </div>
    );
};
