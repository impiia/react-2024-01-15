import style from './styles.module.scss';
import { useGetUsersQuery } from '../../redux/services/api';
import { Loader } from '../loader/component';
import { Button } from '../button/component';
import { ReviewForm } from '../review-form/component';
import { useState } from 'react';

export const Review = ({ review }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { data: user, isLoading } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => {
            return ({
                ...result,
                data: result.data?.find(({id}) => review.userId === id),
            })
        }
    });

    const handleEditCancel = () => {
        setIsEditing(false);
    };
    return (
        isLoading ? (
            <Loader/>
        ) : (
            <div className={style.root}>
                {user && <span>{user.name + ': '}</span>}
                <span>{review.text+ ' '}</span>
                <Button onClick={()=>{setIsEditing(true)}}>Edit</Button>
                {isEditing && <ReviewForm user={user.name} review={review} onEditCancel={handleEditCancel}/>}
            </div>
        )
    );
}
