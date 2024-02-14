import styles from './styles.module.scss';
import { useReducer, useContext } from "react";
import { UserContext } from '../../contexts/user';
import { Button } from '../button/component';
import { useCreateReviewMutation } from '../../redux/services/api';
import { Loader } from '../loader/component';

function reducer(state, action) {
    switch (action.type) {
        case "change_text":
            return { ...state, text: action.payload };
        case "change_rating":
            return { ...state, rating: action.payload };
        default:
            return state;
    }
}

export const ReviewForm = ({ restaurantId }) => {
    const { name: userName } = useContext(UserContext);
    const [createReview, { isLoading }] = useCreateReviewMutation();
    const [state, dispatch] = useReducer(reducer, {
        name: userName || "",
        text: "",
        rating: "",
    });

    const handleTextChange = (event) => {
        dispatch({ type: "change_text", payload: event.target.value });
    };

    const handleRatingChange = (event) => {
        dispatch({ type: "change_rating", payload: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createReview({
            restaurantId,
            newReview: {
                userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
                text: state.text,
                rating: state.rating,
            },
        }).unwrap().then(() => {
            dispatch({ type: "change_text", payload: "" });
            dispatch({ type: "change_rating", payload: "" });
        }).catch((error) => {
            console.error("Error while submitting the review", error);
        });
    };

    return (
        <>
            {isLoading ? <Loader /> : (
                <form className={styles.root} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <span id="name">
                            Имя: {userName}
                        </span>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="text">Текст</label>
                        <textarea
                            id="text"
                            name="text"
                            placeholder="Напишите ваш отзыв"
                            value={state.text}
                            onChange={handleTextChange}
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="rating">Рейтинг</label>
                        <input
                            id="rating"
                            name="rating"
                            type="number"
                            min="1"
                            max="5"
                            placeholder="Оцените от 1 до 5"
                            value={state.rating}
                            onChange={handleRatingChange}
                        />
                    </div>
                    <Button className={styles.submitButton} type="submit">Submit</Button>
                </form>
            )}
        </>
    );
}    