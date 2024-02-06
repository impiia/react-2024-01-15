import { Button } from '../button/component';
import styles from './styles.module.scss';

export const RestaurantTabs = ({ restaurants, onSelectRestaurant }) => {
    return (
        <>
            {restaurants.map((restaurant) => (
                <Button
                    key={restaurant.id} // Добавлен ключ
                    className={styles.pageLink}
                    onClick={() => onSelectRestaurant(restaurant)}
                >
                    {restaurant.name}
                </Button>
            ))}
        </>
    );
};
