import style from './styles.module.scss';
import { useGetUsersQuery } from '../../redux/services/api';

export const Review = ({ review }) => {
    const { data: user, isLoading } = useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({
            data: data?.find(user => user.id === review.userId),
        }),
    });

    return (
        isLoading ? (
            <div>Loading...</div>
        ) : (
            <div className={style.root}>
                {user && <span>{user.name + ': '}</span>}
                <span>{review.text}</span>
            </div>
        )
    );
}
