import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RestaurantTabs } from '../restaurant-tabs/component';
import { Restaurant } from '../restaurant/component';
import style from './styles.module.scss';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

export const RestaurantPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

    const selectRestaurant = (restaurantId) => {
        setSelectedRestaurantId(restaurantId);
    };

    return (
        <div className={style.root}>
            <RestaurantTabs
                restaurantIds={restaurantIds}
                onSelectRestaurant={selectRestaurant}
            />
            {selectedRestaurantId && <Restaurant restaurantId={selectedRestaurantId} />}
        </div>
    );
};
