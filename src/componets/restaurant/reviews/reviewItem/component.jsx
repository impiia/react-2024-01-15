import style from './styles.module.scss';

export const ReviewItem = ({ text }) => {
    return (
            <div className={style.root}>
                {text}
            </div>
    )
}