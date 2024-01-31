import style from './styles.module.scss';

export const Review = ({ text }) => {
    return (
            <div className={style.root}>
                {text}
            </div>
    )
}