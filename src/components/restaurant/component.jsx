import styles from './styles.module.scss';
import { useGetRestaurantsQuery } from '../../redux/services/api';
import { Loader } from '../loader/component';
import { ControlTabs } from '../control-tabs/component';
import { Outlet, useParams } from 'react-router-dom';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const { data: restaurant, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => restaurantId === id),
    }),
  });
  if (isLoading) {
    return <Loader className={styles.loader} />;
  }
  if (!restaurant) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <ControlTabs restaurantId={restaurant.id} />
      <Outlet />
    </div>
  );
};
