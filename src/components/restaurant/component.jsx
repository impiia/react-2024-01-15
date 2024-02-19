import { Reviews } from '../reviews/component';
import styles from './styles.module.scss';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { MenuContainer } from '../menu/container';

export const Restaurant = ({ restaurantId }) => {

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => restaurantId === id),
    }),
  });

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>

      <MenuContainer restaurantId={restaurant.id} />
      <Reviews restaurantId={restaurantId} /> 

    </div>
  );
};
