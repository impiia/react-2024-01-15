import { Button } from '../button/component';
import style from './styles.module.scss';

export const RestaurantButtonList = ({ restaurants, onSelectRestaurant }) => {
    return (
        <>
            {restaurants.map((restaurant) => (
                <Button className={style.pageLink} 
                    onClick={() => onSelectRestaurant(restaurant)}
                >
                    {restaurant.name}
                </Button>
            ))}
        </>
    );
};

