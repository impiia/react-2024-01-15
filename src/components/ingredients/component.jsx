
export const Ingredients = ({ ingredients }) => {
    return (
    <>
        <h2>Ingredients:</h2>
        {ingredients.map((ingredient, index) => (
            <div key={index}>{ingredient}</div>
        ))}
    </>
)};
