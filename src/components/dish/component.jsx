export const Dish = ({ dish, className }) => {

  return (
    <div >
      <div className={className}>{dish.name}</div>
      <div className={className}>{dish.price}</div>
    </div>
  );
};
