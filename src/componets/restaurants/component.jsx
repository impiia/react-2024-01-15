import { useState } from 'react';
import { Button } from '../button/component';
import { Restaurant } from '../restaurant/component';
import style from './styles.module.scss';

export const Restaurants = ({ restaurants }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0] || null);

    const selectRestaurant = (restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    return (
        <div className={style.root}>
            {restaurants.map((restaurant) => (
                <Button className={style.pageLink} onClick={() => selectRestaurant(restaurant)}>
                    {restaurant.name}
                </Button>
            ))}

            {selectedRestaurant && <Restaurant restaurant={selectedRestaurant} />}
        </div>
    );
};
