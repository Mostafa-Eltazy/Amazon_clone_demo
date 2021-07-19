import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      console.log(index);
      if (index > -1) {
        state.items[index].quantity++;
        state.items[index].price += state.items[index].fixedPrice;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeFromBasket: (state, action) => {
      console.log(action.payload.id);
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      if (index > -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity--;
          state.items[index].price -= state.items[index].fixedPrice;
        } else {
          let newBasket = [...state.items];
          if (index >= 0) {
            newBasket.splice(index, 1);
            console.log(newBasket);
          }
          state.items = newBasket;
        }
      } else {
        console.warn(
          `Can't remove the product ID (${action.payload.id}) as it's not in the basket`
        );
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
