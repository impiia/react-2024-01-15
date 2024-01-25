import style from './styles.module.scss';

export const MenuItem = ( {name} ) => {
    return (
        
            <div className={style.root}>
                {name}
            </div>
    )
}