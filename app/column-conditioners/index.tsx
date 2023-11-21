import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { useEffect } from "react";
import { currencyValueData } from "../Redux/Slices/main.slice";
import Image from "next/image";
import Link from "next/link";

type ConditionersList = {
   conditionerList: any;
   brands: string;
};

function ConditionersList({ conditionerList, brands }: ConditionersList) {
   const dispatch = useDispatch<AppDispatch>();
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);
   return (
      <div className="col-conditioners container">
         <h2 className="text-center font-bold text-6xl text-slate-600">{brands}</h2>
         <ul className="grid grid-cols-2 gap-12 mt-14">
            {conditionerList.map((el: any, index: number) => {
               return (
                  <Link key={index} href={`/column-conditioners/${el.href}`}>
                     <li key={index} className="flex flex-col justify-center text-center items-center">
                        <div
                           className={`${
                              brands === "Кондиционеры Welkin"
                                 ? "col-conditioners__img-container-welkin"
                                 : "col-conditioners__img-container"
                           } relative flex items-center justify-center z-0`}
                        >
                           <Image src={el.img} alt={el.name} fill={true} />
                        </div>
                        <div className="flex flex-col mt-10">
                           <p className="text-5xl font-medium relative z-10">{el.name}</p>
                           <span className="text-2xl mt-5 inline-block">{el.subname}</span>
                           <span className="text-xl mt-5 inline-block">от {el.price.toLocaleString()} UZS</span>
                           <span className="text-xl mt-5 inline-block">{el.title}</span>
                        </div>
                        <button className="col-conditioners__btn mt-10">Выбрать параметры</button>
                     </li>
                  </Link>
               );
            })}
         </ul>
      </div>
   );
}
export default ConditionersList;
