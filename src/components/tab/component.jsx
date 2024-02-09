import { useSelector } from "react-redux";
import { Button } from "../button/component";
import styles from './styles.module.scss';
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Restaurant } from "../restaurant/component";

export const Tab = ({ id, onClick}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state,id));

    return (
        <Button
            className={styles.pageLink}
            onClick={onClick}
        >
            {restaurant && restaurant.name}
        </Button>
    );
};


