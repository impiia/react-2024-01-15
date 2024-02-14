import { Restaurant } from '../../restaurant/component';
import style from './styles.module.scss';
import { RestaurantTabs } from '../../restaurant-tabs/component';
import { Layout } from '../../layout/component';
import { useState } from 'react';


export const RestaurantPage = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
    const selectRestaurant = (restaurantId) => {
        setSelectedRestaurantId(restaurantId);
    };
 
    return (
        <Layout>
            <div className={style.root}>
                <RestaurantTabs
                    onSelectRestaurant={selectRestaurant}
                />
                {selectedRestaurantId && <Restaurant restaurantId={selectedRestaurantId} /> 
                }
            </div>
        </Layout>
    );
};
