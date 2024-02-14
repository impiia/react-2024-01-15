import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import styles from './styles.module.scss';
import { useGetRestaurantsQuery, useGetReviewsByRestaurantIdQuery } from '../../redux/services/api';

export const Restaurant = ({ restaurantId }) => {

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => restaurantId === id),
    }),
  });

  const { data: reviews, isLoading } = useGetReviewsByRestaurantIdQuery(restaurantId);

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>

      <Menu dishIds={restaurant.menu} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
          <Reviews reviews={reviews} />         
      )}
    </div>
  );
};
