import { Outlet } from 'react-router-dom';
import style from './styles.module.scss';
import { RestaurantTabsContainer } from '../../components/restaurant-tabs/container';

export const RestaurantPage = () => {
    console.log("RestaurantPage re-render");
    return (
        <div className={style.root}>
            <RestaurantTabsContainer />
            <Outlet />
        </div>
    );
};
