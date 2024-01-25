import { ReviewItem } from "./reviewItem/component"


export const Reviews = ({reviews}) => {
    return (<>
        <h3>Отзывы</h3>
        <ul>
            {reviews.map((reviewItem) => (
                <li>
                <ReviewItem text={reviewItem.text}/>
                </li>
            ))}
        </ul>
    </>
    )
}