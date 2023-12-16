import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/store";
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
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);
   return (
      <div className="col-conditioners container">
         <h2 className="col-conditioners__brandTitle text-center font-bold text-6xl text-slate-600">{brands}</h2>
         <ul className="col-conditioners__listItem grid grid-cols-2 gap-12 mt-14">
            {conditionerList.map((el: any, index: number) => {
               return (
                  <Link key={index} href={`/ducted-conditioners/${el.href}`}>
                     <li
                        key={index}
                        className="col-conditioners__li flex flex-col justify-center text-center items-center"
                     >
                        <div
                           className={`${
                              brands === "Кондиционеры Welkin"
                                 ? "col-conditioners__img-container-welkin"
                                 : "col-conditioners__img-container"
                           } relative flex items-center justify-center z-0`}
                        >
                           <Image src={el.img} alt={el.name} fill={true} />
                        </div>
                        <div className="col-conditioners__paramsList flex flex-col mt-10">
                           <p className="col-conditioners__paramsTitle text-5xl font-medium relative z-10">{el.name}</p>
                           <span className="text-2xl mt-5 inline-block">{el.subname}</span>
                           <span className="col-conditioners__paramsPrice text-xl mt-5 inline-block">
                              от {el.price.toLocaleString()} UZS
                           </span>
                           <span className="col-conditioners__paramsSub text-xl mt-5 inline-block">{el.title}</span>
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
