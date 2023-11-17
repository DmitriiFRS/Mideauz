"use client";

import "./air-conditioners.scss";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { currencyValueData } from "../Redux/Slices/main.slice";

function ConditionersList({ conditionerList, brands }: any) {
   const dispatch = useDispatch<AppDispatch>();
   const [isView, setIsView] = useState(false);
   const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);
   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <div className="conditioners container">
         <h2 className="text-center font-bold text-6xl text-slate-600">{brands}</h2>
         <ul ref={ref} className="conditioners__list grid grid-cols-3 gap-12 mt-14">
            {conditionerList.map((el: any, index: number) => {
               return (
                  <Link key={index} href={`/air-conditioners/${el.name.replace(" ", "-")}`}>
                     <li
                        style={{ transitionDelay: index / 6 + "s" }}
                        className={`conditioners__item ${
                           isView ? "conditioners__item__active" : ""
                        } flex flex-col text-center items-center py-6`}
                     >
                        <div className="conditioners__img-container relative flex items-center justify-center z-0">
                           <Image className="conditioners__img" src={el.img} alt={el.name} fill={true} />
                        </div>
                        <div className="flex flex-col">
                           <p className="text-5xl font-medium relative z-10">{el.name}</p>
                           <span className="text-2xl mt-5 inline-block">{el.sub}</span>
                           {currencyValue ? (
                              <span className="text-xl mt-5 inline-block">
                                 от {(el.price * currencyValue).toLocaleString()} UZS
                              </span>
                           ) : (
                              ""
                           )}
                        </div>
                        <button className="conditioners__btn mt-10">Выбрать параметры</button>
                     </li>
                  </Link>
               );
            })}
         </ul>
      </div>
   );
}
export default ConditionersList;
