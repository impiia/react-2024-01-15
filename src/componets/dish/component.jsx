import style from './styles.module.scss';

export const Dish = ( {name} ) => {
    return (
        
            <div className={style.root}>
                {name}
            </div>
    )
}