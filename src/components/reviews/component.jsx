import { Review } from '../review/component'
import { Loader } from '../loader/component';
import { useGetReviewsByRestaurantIdQuery } from '../../redux/services/api';
import { CreateReviewFormContainer } from '../create-review-form/container';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
    const restaurantId = useParams().restaurantId;
    const { data: reviews, isLoading } = useGetReviewsByRestaurantIdQuery(restaurantId);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <h3>Отзывы</h3>
            {isLoading ? <Loader /> : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <Review review={review} />
                        </li>
                    ))}
                </ul>
            )}
            <CreateReviewFormContainer restaurantId={restaurantId} />
        </>
    )
}