import { CartItemType } from "@/app/cart/Main";
import { db } from "@/app/firebase/firebaseConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDoc, doc } from "firebase/firestore";

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

export const conditionerListData = createAsyncThunk<ConditionerList, undefined>(
   "main/conditionerListFirestore",
   async function getData() {
      const dataRef = await getDoc(doc(db, "кондиционеры", "9aSgSZhM0mZM021Euag3")).then((snap) => {
         if (snap.exists()) {
            return snap.data();
         } else {
            console.error("Ошибка загрузки данных");
         }
      });
      return dataRef as ConditionerList;
   }
);

export const colConditioneListData = createAsyncThunk<ConditionerList>(
   "main/colConditionerListFirestore",
   async function getData() {
      const dataRef = await getDoc(doc(db, "колонники", "GpFsxfyXXsIP12F904c9")).then((snap) => {
         if (snap.exists()) {
            return snap.data();
         } else {
            console.error("Ошибка загрузки данных");
         }
      });
      return dataRef as ConditionerList;
   }
);
export const casConditioneListData = createAsyncThunk<ConditionerList>(
   "main/casConditionerListFirestore",
   async function getData() {
      const dataRef = await getDoc(doc(db, "кассетники", "rzfIwOoxodiuvbycV26v")).then((snap) => {
         if (snap.exists()) {
            return snap.data();
         } else {
            console.error("Ошибка загрузки данных");
         }
      });
      return dataRef as ConditionerList;
   }
);
export const ducConditioneListData = createAsyncThunk<ConditionerList>(
   "main/ducConditionerListFirestore",
   async function getData() {
      const dataRef = await getDoc(doc(db, "канальники", "9PnHaI6KvJ3S5w0GmiXm")).then((snap) => {
         if (snap.exists()) {
            return snap.data();
         } else {
            console.error("Ошибка загрузки данных");
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
   reducers: {
      setClientValData: (state, action) => {
         state.clientVal = action.payload;
      },
      setCartCount: (state, action) => {
         state.cartCount = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(conditionerListData.fulfilled, (state, action) => {
         state.conditioners = action.payload;
      });
      builder.addCase(colConditioneListData.fulfilled, (state, action) => {
         state.colConditioners = action.payload;
      });
      builder.addCase(casConditioneListData.fulfilled, (state, action) => {
         state.casConditioners = action.payload;
      });
      builder.addCase(ducConditioneListData.fulfilled, (state, action) => {
         state.ducConditioners = action.payload;
      });
      builder.addCase(currencyValueData.fulfilled, (state, action) => {
         state.currencyValue = action.payload;
      });
   },
});
export const { setClientValData, setCartCount } = mainSlice.actions;
export default mainSlice.reducer;
