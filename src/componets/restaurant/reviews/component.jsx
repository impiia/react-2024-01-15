import style from './styles.module.scss';

export const Review = ({ text }) => {
    return (
            <li className={style.root}>
                {text}
            </li>
    )
}