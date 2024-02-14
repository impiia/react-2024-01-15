import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Tab } from '../tab/component';

export const RestaurantTabs = ({ onSelectRestaurant }) => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery();
    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                restaurants.map(({ id, name }) => (
                    <Tab key={id} id={id} onClick={() => onSelectRestaurant(id)} title={name} />
                ))
            )}
        </>
    );
};
