import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/services/api";
import { Loader } from "../../components/loader/component";
import { DishContainer } from "../../components/dish/container";
import styles from './styles.module.scss';

export const DishPage = () => {
    const dishId = useParams().dishId;
    const { isLoading, data: dish } = useGetDishByIdQuery(dishId);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={styles.root}>
            <DishContainer dish={dish} className={styles.dish} />
            <h2>Ingredients:</h2>
            {dish.ingredients.map((ingredient, index) => (
                <div key={index}>{ingredient}</div>
            ))}

        </div>
    );
};
