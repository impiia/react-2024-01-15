import { useEffect } from "react";
import { useUpdateReviewMutation } from "../../redux/services/api";
import { Loader } from "../loader/component";
import { ReviewForm } from "../review-form/component"

export const UpdateReviewFormContainer = ({ review, user, onUpdatedFinishet, onClose }) => {
    const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();
    useEffect(() => {
        if (isSuccess) {
            onUpdatedFinishet();
        }
    }, [isSuccess, onUpdatedFinishet]);

    if (!user || !review) {
        return null;
    }

    if (isLoading) {
        return <Loader />;
    }
    const { id, text, rating } = review;

    return (
        <ReviewForm
            initialState={{ text, rating }}
            userName={user?.name}
            onSave={updatedReview => updateReview({
                reviewId: id,
                review: {
                    ...updatedReview,
                    userId: user.id,
                    id,
                }
            })} 

            onClose={onClose}    
            />
    );
}
