import style from './styles.module.scss';
import { useGetUsersQuery } from '../../redux/services/api';
import { Loader } from '../loader/component';
import { ButtonMemoized } from '../button/component';
import { useCallback, useState } from 'react';
import { UpdateReviewFormContainer } from '../update-review-form/container';

export const Review = ({ review }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const { data: user, isLoading } = useGetUsersQuery(undefined, {
        selectFromResult: (result) => {
            return ({
                ...result,
                data: result.data?.find(({ id }) => review.userId === id),
            })
        }
    });

    const setEditMode = useCallback(() => {
        setIsEditMode(true);
    }, []);

    const handleCancelClick = () => {
        setIsEditMode(false);
    };

    return (
        isLoading ? (
            <Loader />
        ) : (
            <div className={style.root}>
                {user && <span>{user.name + ': '}</span>}
                <span>{review.text + ' '}</span>
                <ButtonMemoized onClick={setEditMode}>Edit</ButtonMemoized>
                {isEditMode && <UpdateReviewFormContainer
                    user={user}
                    review={review}
                    onUpdatedFinishet={() => setIsEditMode(false)} onClose={handleCancelClick}/>}
            </div>
        )
    );
}
