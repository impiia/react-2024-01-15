import { Tab } from '../tab/component';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

export const RestaurantTabs = ({ onSelectRestaurant }) => {
    const restaurantIds = useSelector(selectRestaurantIds);

    return (
        <>
            {restaurantIds.map((restaurantId) => {
                return (
                    <Tab key={restaurantId} id={restaurantId}  onClick={()=>onSelectRestaurant(restaurantId)}/>
                );
            })}
        </>
    );
};
