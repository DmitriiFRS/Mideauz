import { ModelTypeInner } from "@/app/air-conditioners/[Details]/page";
import { createSlice } from "@reduxjs/toolkit";

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
};

const initialState: initialStateType = {
   conditionerEl: null,
   currentPower: null,
   currentEl: null,
   itemCount: 1,
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
      setItemCount: (state, action) => {
         state.itemCount = action.payload;
      },
      setCurrentEl: (state, action) => {
         state.currentEl = action.payload;
      },
   },
});
export const { addElem, setCurrentPower, setItemCount, setCurrentEl } = itemSlice.actions;
export default itemSlice.reducer;
