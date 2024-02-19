import { useContext } from "react";
import { useCreateReviewMutation } from "../../redux/services/api";
import { Loader } from "../loader/component";
import { ReviewForm } from "../review-form/component"
import { UserContext } from "../../contexts/user";

export const CreateReviewFormContainer = ({ restaurantId }) => {
    const { name, id } = useContext(UserContext);
    const [createReview, { isLoading }] = useCreateReviewMutation();

    if (!name) {
        return null;
    }

    if (isLoading) {
        return <Loader />;
    }
    return (
        <ReviewForm
            userName={name}
            onSave={newReview => createReview({
                restaurantId,
                newReview: {
                    ...newReview,
                    userId: id
                }
            })} />
    );
}
