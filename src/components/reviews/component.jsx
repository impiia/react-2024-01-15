import { Review } from '../review/component'
import { Loader } from '../loader/component';
import { useGetReviewsByRestaurantIdQuery } from '../../redux/services/api';
import { CreateReviewFormContainer } from '../create-review-form/container';

export const Reviews = ({ restaurantId }) => {
    const { data: reviews, isLoading } = useGetReviewsByRestaurantIdQuery(restaurantId);

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