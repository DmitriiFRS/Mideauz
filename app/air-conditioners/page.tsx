"use client";

import ConditionersList from "./index";

import ultraviolet from "../../public/img/Equip/AirConditioners/Midea/Ultraviolet.jpg";
import naomi from "../../public/img/Equip/AirConditioners/Midea/Naomi.png";
import lotusS from "../../public/img/Equip/AirConditioners/Midea/Lotus-gold.png";
import lotusG from "../../public/img/Equip/AirConditioners/Midea/Lotus-gold.png";
import gaia from "../../public/img/Equip/AirConditioners/Midea/Gaia.png";
import breezeless from "../../public/img/Equip/AirConditioners/Midea/Brezeless.png";
import alba from "../../public/img/Equip/AirConditioners/Midea/Alba.png";
import aep from "../../public/img/Equip/AirConditioners/Midea/AEP.png";

import apollon from "../../public/img/Equip/AirConditioners/Welkin/Apollon.jpg";
import ataman from "../../public/img/Equip/AirConditioners/Welkin/Ataman.jpg";
import epic from "../../public/img/Equip/AirConditioners/Welkin/Epic.png";
import epicG from "../../public/img/Equip/AirConditioners/Welkin/Epic-Gold.png";
import general from "../../public/img/Equip/AirConditioners/Welkin/General.jpg";
import novus from "../../public/img/Equip/AirConditioners/Welkin/Novus.jpg";
import nuar from "../../public/img/Equip/AirConditioners/Welkin/Nuar.png";
import sirius from "../../public/img/Equip/AirConditioners/Welkin/Sirius.jpg";
import vavilon from "../../public/img/Equip/AirConditioners/Welkin/Vavilon.jpg";
import zizoo from "../../public/img/Equip/AirConditioners/Welkin/Zizoo.jpg";

import Conditioners from "./index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { useEffect, useState } from "react";
import { conditionerListData } from "../Redux/Slices/mainSlice";
import Skeleton from "../Utilities/Skeleton";
const brands = ["Кондиционеры Midea", "Кондиционеры Welkin"];
const skeletonSections = [1, 2, 3, 4, 5, 6];

function AirConditiones() {
  const dispatch = useDispatch<AppDispatch>();
  const conditionerList = useSelector(
    (state: RootState) => state.mainReducer.conditioners
  );
  useEffect(() => {
    dispatch(conditionerListData());
  }, [dispatch]);
  console.log(conditionerList);
  return !conditionerList ? (
    <div className="skeleton__container grid grid-cols-3 grid-rows-2">
      {skeletonSections.map((el, index) => {
        return <Skeleton key={index} />;
      })}
    </div>
  ) : (
    <section className="flex-auto">
      {brands.map((el, index) => {
        return (
          <ConditionersList
            key={index}
            conditionerList={
              index === 0
                ? conditionerList.list[0].midea
                : conditionerList.list[1].welkin
            }
            brands={brands[index]}
          />
        );
      })}
    </section>
  );
}
export default AirConditiones;
// 484w 600h
