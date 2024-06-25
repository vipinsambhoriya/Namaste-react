const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // mutating state here
    addItem: (state, action) => {
      // Redux Toolkit use immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // original state = {item:["pizza"]}
    clearCart: (state, action) => {
      // RTK - either Mutate the existing state or return  a new  State
      // state.items.length = 0; //orginalState[]
      return { items: [] }; //this new object will be replaced inside originalState = {items:[]}
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
