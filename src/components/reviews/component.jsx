import { Review } from '../review/component'
import { ReviewForm } from '../review-form/component';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

export const Reviews = ({ reviews }) => {
    const { name, email } = useContext(UserContext);
    const isAuthenticated = name !== "" && email !== "";

    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <Review review={review} />
                    </li>
                ))}
            </ul>
            {isAuthenticated && <ReviewForm />}
        </>
    )
}