import { Review } from '../review/component'
import { ReviewForm } from '../review-form/component';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/user';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../redux/entities/user/thunks/get-users';

export const Reviews = ({ reviewIds }) => {
    const { name, email } = useContext(UserContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);


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