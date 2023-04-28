import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
const initialState: any = {
  items: [],
  totalQuantity: 0,
  singleQuantity: 1,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state: any, action: PayloadAction<{ product: any; quantity: number }>) {
      const newItem = action.payload.product;
      const existingItemIndex = state.items.findIndex((item: any) => item.id === newItem.id);
      console.log(state.items);
      
      if (existingItemIndex === -1) {
        const totalPrice =
          newItem.price * action.payload.quantity;
          state.totalQuantity = state.totalQuantity + action.payload.quantity;
          state.totalAmount = state.totalAmount + action.payload.quantity * (action.payload.product.price);
          console.log(state.totalAmount);
          state.items.push({
            ...newItem,
            quantity: action.payload.quantity,
            totalPrice,
          });
          toast.success("product added successfully...", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        console.log("All Ready Exi");
        
        toast.error("Products Allready Exis...", {
          position: toast.POSITION.BOTTOM_RIGHT,
      });
      }
    },
    removeItemFromCart( state: any, action: PayloadAction<string>) {
        const productSlug = action.payload;
        const existingItem = state.items.find(
          (item:any) => item.id === productSlug
        );
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingItem?.price!;
        if (existingItem?.quantity === 1) {
          state.items = state.items.filter(
            (item:any) => item.id !== productSlug
          );
        } else {
          existingItem!.quantity--;
          existingItem!.totalPrice = existingItem!.totalPrice - existingItem?.price!;
        }
      },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
