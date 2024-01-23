import { MenuItem } from "./menu/component";
import { Review } from "./reviews/component";
import style from './styles.module.scss';

export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div className={style.root}>
        <div className={style.restaurant}>
            <h2>{name}</h2>
            <h3>Меню</h3>
            <ul>
                {menu.map((menu) => (
                    <MenuItem name={menu.name} />
                ))}
            </ul>

            <h3>Отзывы</h3>
            <ul>
                {reviews.map((review) => (
                    <Review text={review.text} />
                ))}
            </ul>
        </div>
        </div>
    )
}