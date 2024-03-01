import { ModelTypeInner } from "@/app/air-conditioners/[Details]/page";
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
type ColConditionersPower = {
   id: number;
   power: string;
   price: string;
};

type ConditionerModels = {
   models: Array<ConditionersPower>;
   company: string;
   name: string;
   img: string;
};
type ColConditionerModels = {
   company: string;
   desc: string;
   img: string;
   name: string;
   params: Array<string>;
   models: Array<ColConditionersPower>;
};

type ConditionerItems = {
   врф: any;
   канальники: any;
   кассеты: any;
   колонники: Array<ColConditionerModels>;
   кондиционеры: Array<ConditionerModels>;
   чиллеры: any;
};

type initialStateType = {
   conditionerEl: null | Array<any>;
   currentPower: null | string;
   currentEl: null | ModelTypeInner;
   itemCount: number;
   itemsList: any;
};

const initialState: initialStateType = {
   conditionerEl: null,
   currentPower: null,
   currentEl: null,
   itemCount: 1,
   itemsList: null,
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
   reducers: {
      addElem: (state, action) => {
         state.conditionerEl = action.payload;
      },
      setCurrentPower: (state, action) => {
         state.currentPower = action.payload;
      },
      setItemCount: (state, action) => {
         state.itemCount = action.payload;
      },
      setCurrentEl: (state, action) => {
         state.currentEl = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getConditionerItems.fulfilled, (state, action) => {
         state.itemsList = action.payload;
      });
      builder.addCase(getConditionerItems.rejected, (state: any, action: any) => {
         state.error = action.payload;
      });
   },
});
export const { addElem, setCurrentPower, setItemCount, setCurrentEl } = itemSlice.actions;
export default itemSlice.reducer;
