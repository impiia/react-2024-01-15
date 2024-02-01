import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';


import style from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={style.root}>
                <h2>{restaurant.name}</h2>
                <Menu menu={ restaurant.menu }/> 
                <Reviews reviews = { restaurant.reviews } />   
        </div>
    )
}