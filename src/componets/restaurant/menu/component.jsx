import style from './styles.module.scss';

export const MenuItem = ({ name }) => {
    return (
        
            <li className={style.root}>
                {name}
            </li>
    )
}