import { useSelector } from 'react-redux';
import style from './styles.module.scss';
import { selectReviewById } from '../../redux/entities/review/selectors';
import { selectUserById } from '../../redux/entities/user/selectors';

export const Review = ({ reviewId }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));
    const user = useSelector(state => selectUserById(state, review.userId));
   
    if (!review) {
        return <div>Отзыв не найден</div>;
    }
    if (!user) {
        return <div>Пользователь не найден</div>;
    }
    return (
        <div className={style.root}>
            <span>{user.name}: </span>
            <span>{review.text}</span>
        </div>
    )
}