export const selectDishModule = (state) =>  state.dish;
export const selectDishIds = (state) =>  selectDishModule(state).ids ;
export const selectDishById = (id)=>(state) => selectDishModule(state).entities[id];