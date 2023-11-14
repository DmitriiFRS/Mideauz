import { db } from "@/app/firebase/firebaseConfig";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDoc, doc } from "firebase/firestore";

type ConditionersPower = {
   power: string;
   price: string;
   id: number;
   params: Array<string>;
   details: Array<string>;
};

type ConditionerModels = {
   models: Array<ConditionersPower>;
   company: string;
   name: string;
   img: string;
};

type ConditionerItems = {
   врф: any;
   канальники: any;
   кассеты: any;
   колонники: any;
   кондиционеры: Array<ConditionerModels>;
   чиллеры: any;
};

type initialStateType = {
   itemsList: null | ConditionerItems;
   error: null | string;
};

const initialState: initialStateType = {
   itemsList: null,
   error: null,
};

export const getConditionerItems = createAsyncThunk<ConditionerItems, undefined>(
   "items/conditionersItemsFirestore",
   async function getData(_, { rejectWithValue }) {
      const dataRef = await getDoc(doc(db, "подробнее", "3zRA7wzmLHRykHmYus8S")).then((snap) => {
         if (snap.exists()) {
            return snap.data();
         } else {
            return rejectWithValue("error");
         }
      });
      return dataRef as ConditionerItems;
   }
);

const itemSlice = createSlice({
   name: "items",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getConditionerItems.fulfilled, (state, action) => {
         state.itemsList = action.payload;
      });
      builder.addCase(getConditionerItems.rejected, (state, action: any) => {
         state.error = action.payload;
      });
   },
});
export const {} = itemSlice.actions;
export default itemSlice.reducer;
