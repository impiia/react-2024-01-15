import { Review } from '../review/component'
import { ReviewForm } from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

export const Reviews = ({ reviewIds }) => {
    const { name, email } = useContext(UserContext);
    const isAuthenticated = name !== "" && email !== "";

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviewIds.map((reviewId, index) => (
                    <li key={index}>
                        <Review reviewId={reviewId} />
                    </li>
                ))}
            </ul>
            {isAuthenticated && <ReviewForm />}
        </>
    )
}
