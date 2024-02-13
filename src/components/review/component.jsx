import { useDispatch, useSelector } from 'react-redux';
import style from './styles.module.scss';
import { selectReviewById } from '../../redux/entities/review/selectors';
import { selectUserById } from '../../redux/entities/user/selectors';

export const Review = ({ reviewId }) => {

    const review = useSelector(state => selectReviewById(state, reviewId));
    const user = useSelector(state => selectUserById(state, review?.userId));


    return (
        <div className={style.root}>

            {user && <span>{user.name}: </span>}
            {review && <span>{review.text}</span>}
        </div>
    )
}
