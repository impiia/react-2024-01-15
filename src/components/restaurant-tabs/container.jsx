import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Loader } from '../loader/component';
import styles from "./styles.module.scss";
import { RestaurantTabs } from './component';

export const RestaurantTabsContainer = () => {
    const { data: restaurants, isLoading } = useGetRestaurantsQuery();
    if (isLoading) {
        return <Loader className={styles.loader} />;
    }

    if (!restaurants) {
        return null;
    }

    return <RestaurantTabs restaurants={restaurants} />
};
