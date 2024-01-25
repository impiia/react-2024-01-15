import { Menu } from './menu/component';
import { Reviews } from './reviews/component';

import style from './styles.module.scss';

export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div className={style.root}>
            <div className={style.restaurant}>
                <h2>{name}</h2>
                <Menu menu={ menu }/> 
                <Reviews reviews = {reviews} /> 
            </div>
        </div>
    )
}