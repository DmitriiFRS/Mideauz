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
                     <ul className="py-3 px-10">
                        {value.map((el: CartItemType, index: number) => {
                           return (
                              <li key={index} className="cart__item flex justify-between items-center">
                                 <Link href={"/"}>
                                    <Image src={ultraviolet} alt="condishn" width={200} height={200} />
                                 </Link>
                                 <p className="text-2xl">
                                    Модель: {el.model} {el.power} BTU
                                 </p>
                                 <p className="text-2xl">Количество: {el.count}</p>
                                 {currencyValue && (
                                    <p className="text-2xl">
                                       Стоимость: {(el.price * el.count * currencyValue).toLocaleString()} UZS
                                    </p>
                                 )}
                              </li>
                           );
                        })}
                     </ul>
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
                  <div className="flex items-center justify-center cart__btn">
                     <button className="relative z-10">Оставить заявку</button>
                  </div>
                  <div className="mt-10 text-2xl font-semibold">
                     Итоговая стоимость: <span>{total.toLocaleString() + " UZS"}</span>
                  </div>
               </div>
            </div>
         </div>
      )
   );
}
export default Main;
