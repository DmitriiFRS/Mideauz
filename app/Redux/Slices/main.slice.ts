import { db } from "@/app/firebase/firebaseConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDoc, doc } from "firebase/firestore";

type initialStateType = {
   conditioners: ConditionerList | null;
   currencyValue: CurrencyValueType | null;
};
const initialState: initialStateType = {
   conditioners: null,
   currencyValue: null,
};
type AirConditioner = {
   name: string;
   price: number;
   sub: string;
   img: string;
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

export const conditionerListData = createAsyncThunk<ConditionerList, undefined>(
   "main/conditionerListFirestore",
   async function getData() {
      const dataRef = await getDoc(doc(db, "кондиционеры", "9aSgSZhM0mZM021Euag3")).then((snap) => {
         if (snap.exists()) {
            return snap.data();
         } else {
            console.error("error");
         }
      });
      return dataRef as ConditionerList;
   }
);

export const currencyValueData = createAsyncThunk<CurrencyValueType, undefined>(
   "main/currencyValueFirestore",
   async function getData() {
      const dataRef = await getDoc(doc(db, "курс", "yVapa0s2zVOtixss6hQD")).then((snap) => {
         if (snap.exists()) {
            return snap.data();
         } else {
            console.error("error");
         }
      });
      return dataRef as CurrencyValueType;
   }
);

const mainSlice = createSlice({
   name: "main",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(conditionerListData.fulfilled, (state, action) => {
         state.conditioners = action.payload;
      });
      builder.addCase(currencyValueData.fulfilled, (state, action) => {
         state.currencyValue = action.payload;
      });
   },
});
export const {} = mainSlice.actions;
export default mainSlice.reducer;
