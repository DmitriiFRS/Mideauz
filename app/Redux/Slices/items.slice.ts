import { ColModelTypeInner } from "@/app/Types/Col.type";
import { ModelTypeInner } from "@/app/air-conditioners/[Details]/page";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
   conditionerEl: null | Array<any>;
   currentPower: null | string;
   currentType: null | string;
   currentEl: null | ModelTypeInner;
   itemCount: number;
   itemsList: null | Array<ColModelTypeInner>;
   firstInputVal: string;
   secondInputVal: null | string;
};

const initialState: initialStateType = {
   conditionerEl: null,
   currentPower: null,
   currentType: null,
   currentEl: null,
   itemCount: 1,
   itemsList: null,
   firstInputVal: "Inverter",
   secondInputVal: null,
};

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
      setCurrentType: (state, action) => {
         state.currentType = action.payload;
      },
      setItemCount: (state, action) => {
         state.itemCount = action.payload;
      },
      setCurrentEl: (state, action) => {
         state.currentEl = action.payload;
      },
      setFirstInputVal: (state, action) => {
         state.firstInputVal = action.payload;
      },
      setSecondInputVal: (state, action) => {
         state.secondInputVal = action.payload;
      },
      addCurrentItems: (state, action) => {
         state.itemsList = action.payload;
      },
   },
});
export const {
   addElem,
   setCurrentPower,
   setCurrentType,
   setItemCount,
   setCurrentEl,
   addCurrentItems,
   setFirstInputVal,
   setSecondInputVal,
} = itemSlice.actions;
export default itemSlice.reducer;
