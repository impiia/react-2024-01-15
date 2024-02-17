import { Button } from "../button/component";
import styles from './styles.module.scss';
import { useReviewForm } from "./use-review-form";

export const ReviewForm = ({ initialState, onSave, onClose, userName }) => {
    const { form, setText, setRating } = useReviewForm(initialState);

    return (
        <div className={styles.root} >
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
                    value={form.text}
                    onChange={setText}
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
                    value={form.rating}
                    onChange={setRating}
                />
            </div>
            <div className={styles.buttons}>
                {onClose && <Button className={styles.submitButton} onClick={() => onClose(form)}>Cansel</Button>}
                <Button className={styles.submitButton} onClick={() => onSave(form)}>Submit</Button>
            </div>

        </div>
    );
}