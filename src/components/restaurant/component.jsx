import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById, selectRestaurantReviewsById } from '../../redux/entities/restaurant/selectors';
import { useEffect, useState } from 'react';
import { getReviewByRestaurantId } from '../../redux/entities/review/thunks/get-reviews';
import { selectIsLoading } from '../../redux/ui/request';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurantId }) => {
    const [requestId, setRequestId] = useState();
    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));


    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const dispatch = useDispatch();
    const reviewsIds = useSelector(state => selectRestaurantReviewsById(state, restaurantId));

    useEffect(() => {
        dispatch(getReviewByRestaurantId(restaurantId));
    }, [dispatch, restaurantId]);

    useEffect(() => {
        setRequestId(dispatch(getReviewByRestaurantId(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    return (
        <div className={styles.root}>
            <h2>{restaurant.name}</h2>

            <Menu dishIds={restaurant.menu} />
            {isLoading ? (<div>is loading...</div>) : (
                <Reviews reviewIds={reviewsIds} />
            )}
        </div>
    );
};