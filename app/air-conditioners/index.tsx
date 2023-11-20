"use client";

import "./air-conditioners.scss";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { currencyValueData } from "../Redux/Slices/main.slice";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ConditionerList from "./ConditionerList";

function ConditionersList({ conditionerList, brands }: any) {
   const dispatch = useDispatch<AppDispatch>();
   const [isView, setIsView] = useState<boolean>(false);
   const [isHide, setHide] = useState<boolean>(false);
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);
   function toggleBlock() {
      setHide(!isHide);
   }
   return (
      <div className="conditioners container">
         <div className="flex items-center justify-center">
            <h2 className="text-center font-bold text-6xl text-slate-600">{brands}</h2>
            <button onClick={toggleBlock} className={` conditioners__hideBtn ${isHide ? "conditioners__hide" : ""}`}>
               <MdOutlineArrowDropDown className={`${"conditioners__ArrowDropDownActive"}`} size="80px" />
            </button>
         </div>
         <ConditionerList conditionerList={conditionerList} isHide={isHide} currencyValue={currencyValue} />
      </div>
   );
}
export default ConditionersList;
