import Link from "next/link";
import { useState, useEffect } from "react";
import ultraviolet from "../../public/img/Equip/AirConditioners/Midea/Ultraviolet.jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import { currencyValueData } from "../Redux/Slices/main.slice";
type CartItemType = {
   model: string;
   power: string;
   price: number;
   count: number;
};

function Main({ value }: { value: Array<CartItemType> }) {
   const [clientValue, setClientValue] = useState<Array<CartItemType> | null>(null);
   const dispatch = useDispatch<AppDispatch>();
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   const [total, setTotal] = useState(0);
   useEffect(() => {
      setClientValue(value);
   }, [value]);
   useEffect(() => {
      dispatch(currencyValueData());
      let totalVal = 0;
      clientValue?.forEach((el) => {
         totalVal += +el.price * el.count;
      });
      if (currencyValue) {
         setTotal(totalVal * currencyValue);
      }
   }, [dispatch, clientValue, currencyValue]);
   return (
      clientValue && (
         <div className="cart__body mt-10 mx-6">
            <div className={`cart__bodyContainer grid ${!value.length ? "cart__bodyContainer__wfull" : ""}`}>
               <div className="container cart__main">
                  {!value.length ? (
                     <div className="flex flex-col items-center h-full justify-center">
                        <h2 className="text-4xl">Ваша корзина пуста</h2>
                        <Link className="mt-14 cart__btn" href={"/"}>
                           <button className="cart__homeBtn text-xl">Вернуться на главную</button>
                        </Link>
                     </div>
                  ) : (
                     <>
                        <ul className="py-3 px-10">
                           {value.map((el: CartItemType, index: number) => {
                              return (
                                 <li key={index} className="cart__item flex items-center justify-between">
                                    <Link href={"/"}>
                                       <Image src={ultraviolet} alt="condishn" width={200} height={200} />
                                    </Link>
                                    <div className="cart__desc flex justify-between items-center">
                                       <h3 className="cart__desc__model text-4xl">{`Кондиционер Midea ${el.model} ${el.power} BTU`}</h3>
                                       <div className="flex flex-col items-center">
                                          <span className="text-2xl">Количество</span>
                                          <span className="text-3xl mt-4">{el.count}</span>
                                       </div>
                                       <div className="flex flex-col items-center">
                                          <span className="text-2xl">Общая стоимость</span>
                                          {currencyValue && (
                                             <span className="text-3xl mt-4">
                                                {(el.price * currencyValue * el.count).toLocaleString()} UZS
                                             </span>
                                          )}
                                       </div>
                                    </div>
                                 </li>
                              );
                           })}
                        </ul>
                        <div className="my-10 mx-9 text-xl  flex flex-col items-end">
                           Итоговая стоимость:{" "}
                           <span className="flex items-end text-3xl font-semibold mt-4">
                              {total.toLocaleString() + " UZS"}
                           </span>
                        </div>
                     </>
                  )}
               </div>
               <div className={`cart__additional mr-7 p-3 ${!value.length ? "cart__additional__disable" : ""}`}>
                  <h3 className="text-lg">Оформите заявку, и специалист свяжется с вами в ближайшее время</h3>
                  <div className="mt-10">
                     <input className="py-3 px-5 w-full" type="text" placeholder="Как к вам обращаться?" />
                  </div>
                  <div className="mt-10">
                     <input className="py-3 px-5 w-full" type="number" placeholder="Ваш номер телефона" />
                  </div>
                  <div className="cart__separator"></div>
                  <div className="flex items-center justify-center cart__btn cursor-pointer">
                     <button className="relative z-10 w-full h-full">Оставить заявку</button>
                  </div>
               </div>
            </div>
         </div>
      )
   );
}
export default Main;
