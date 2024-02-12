import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';
import { Tab } from '../tab/component';
import { useSelector } from 'react-redux';

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
