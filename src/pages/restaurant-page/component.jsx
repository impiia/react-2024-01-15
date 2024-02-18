import { RestaurantTabs } from '../../components/restaurant-tabs/component';
import { Restaurant } from '../../components/restaurant/component';
import style from './styles.module.scss';
import { useState } from 'react';


export const RestaurantPage = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    const selectRestaurant = (restaurantId) => {
        setSelectedRestaurantId(restaurantId);
    };
 
    return (
            <div className={style.root}>
                <RestaurantTabs
                    onSelectRestaurant={selectRestaurant}
                />
                {selectedRestaurantId && <Restaurant restaurantId={selectedRestaurantId} /> 
                }
            </div>
    );
};
