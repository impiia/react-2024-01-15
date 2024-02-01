import styles from './styles.module.scss';
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "change_name":
            console.log(state);
            return { ...state, name: action.payload, rating: "", text: "" };
        case "change_text":
            console.log(state);
            return { ...state, text: action.payload };
        case "change_rating":
            console.log(state);
            return { ...state, rating: action.payload };
        default:
            return state;
    }
}

export const RewiewForm = () =>
{
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        text: "",
        rating: "",
    });
    
    const handleNameChange = (event) => {
        dispatch({ type: "change_name", payload: event.target.value });
    };
    
    const handleTextChange = (event) => {
        dispatch({ type: "change_text", payload: event.target.value });
    };
    
    const handleRatingChange = (event) => {
        dispatch({ type: "change_rating", payload: event.target.value });
    };

    return (
    <form className={styles.root}>
    <div className={styles.field}>
        <label htmlFor="name">Имя</label>
        <input
            id="name"
            name="name"
            type="text"
            placeholder="Введите ваше имя"
            value={state.name}
            onChange={handleNameChange}
        />
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
</form>
    )
}