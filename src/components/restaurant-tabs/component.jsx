import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Loader } from '../loader/component';
import { Tab } from '../tab/component';
import styles from "./styles.module.scss";

export const RestaurantTabs = ({ onSelectRestaurant }) => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery();
    return (
        <>
            {isLoading ? (
                <Loader className={styles.loader}/>
            ) : (
                restaurants.map(({ id, name }) => (
                    <Tab key={id} id={id} onClick={() => onSelectRestaurant(id)} title={name} />
                ))
            )}
        </>
    );
};
