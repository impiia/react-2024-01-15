import { Review } from '../review/component'
import { RewiewForm } from '../review-form/component';
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
                        <Review text={review.text} />
                    </li>
                ))}
            </ul>
            {isAuthenticated && <RewiewForm />}
        </>
    )
}
