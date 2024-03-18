import { CartItemType } from "@/app/cart/Main";
import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
   conditioners: ConditionerList | null;
   colConditioners: ConditionerList | null;
   casConditioners: ConditionerList | null;
   ducConditioners: ConditionerList | null;
   currencyValue: CurrencyValueType | null;
   requestData: Array<RequestDataType> | null;
   clientVal: null | Array<CartItemType>;
   cartCount: null | number;
};
const initialState: initialStateType = {
   conditioners: null,
   colConditioners: null,
   casConditioners: null,
   ducConditioners: null,
   currencyValue: null,
   requestData: null,
   clientVal: null,
   cartCount: null,
};
export type AirConditioner = {
   name: string;
   price: number;
   sub: string;
   img: string;
   title?: string;
   href?: string;
};
type BrandList = {
   midea: Array<AirConditioner>;
   welkin: Array<AirConditioner>;
};
type ConditionerList = {
   list: Array<BrandList>;
};
type CurrencyValueType = {
   value: number;
};
type RequestDataType = {
   name: string;
   number: number;
};

const mainSlice = createSlice({
   name: "main",
   initialState,
   reducers: {
      setClientValData: (state, action) => {
         state.clientVal = action.payload;
      },
      setCartCount: (state, action) => {
         state.cartCount = action.payload;
      },
   },
});
export const { setClientValData, setCartCount } = mainSlice.actions;
export default mainSlice.reducer;
