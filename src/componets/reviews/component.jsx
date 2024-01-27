import { Review } from '../review/component'

export const Reviews = ({ reviews }) => {
    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((review) => (
                    <li>
                        <Review text={review.text} />
                    </li>
                ))}
            </ul>
        </>
    )
}