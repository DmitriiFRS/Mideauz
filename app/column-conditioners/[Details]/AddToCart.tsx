import { AppDispatch } from "@/app/Redux/store";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { ModelType } from "./page";
import { useEffect, useState } from "react";
import { setCartCount } from "@/app/Redux/Slices/main.slice";
import CartModal from "@/app/cart/CartModal";
import AnimateAcceptSVG from "@/app/Utilities/AnimateAcceptSVG";
import Link from "next/link";

type PropsType = {
   colModel: ModelType;
   firstInput: string;
   subInputRef: React.RefObject<HTMLSelectElement>;
   countValue: number;
};
type NewItem = {
   model: string;
   type?: string;
   power: string;
   price: string;
   id: number;
   count: number;
};

function AddToCart({ colModel, firstInput, subInputRef, countValue }: PropsType) {
   const dispatch = useDispatch<AppDispatch>();
   const [value, setValue] = useLocalStorage<any>("item", []);
   const [isModalOpen, setModalStatus] = useState<boolean>(false);
   function closeModal() {
      setModalStatus(false);
   }
   function addItemToCart() {
      //setProgress(true);
      let modelType = null;
      if (subInputRef) {
         modelType = colModel.models.find((el) => {
            if (el.power === subInputRef.current?.value) {
               return el;
            }
         });
      }
      let flag = false;
      const newValue = value;
      if (modelType) {
         const newItem: NewItem = {
            model: `Колонный кондиционер ${colModel.name}`,
            power: modelType.power,
            price: modelType.price,
            id: modelType.id,
            count: countValue,
         };
         if (colModel.mode)
            (newItem.type = firstInput === "Inverter" ? "Инверторный" : "On/Off"),
               value.forEach((el: NewItem, index: number) => {
                  if (el.model === newItem.model && el.power === newItem.power) {
                     flag = true;
                     newValue[index].count += countValue;
                  }
               });
         if (flag) {
            setValue([...newValue]);
         } else {
            setValue([...newValue, newItem]);
         }
         setModalStatus(true);
      }
   }
   useEffect(() => {
      dispatch(setCartCount(value.length));
   }, [value]);
   return (
      <div className="colConditionerCard__btnContainer mt-10">
         <button onClick={addItemToCart} className="btn-blue text-2x1">
            <span className="btn-blue-inner">Добавить в корзину</span>
         </button>
         <CartModal isModalOpen={isModalOpen} closeModal={closeModal}>
            <AnimateAcceptSVG />
            <h3 className="text-2xl text-center font-medium mt-10 text-zinc-600">Ваш товар добавлен в корзину</h3>
            <Link className="cart__modal__btn cart__modal__btnAccept mt-10 text-center" href={"/air-conditioners"}>
               <button>Вернуться к покупкам</button>
            </Link>
            <Link className="cart__modal__btn cart__modal__btnAccept mt-10 text-center" href={"/cart"}>
               <button>Перейти в корзину</button>
            </Link>
         </CartModal>
      </div>
   );
}
export default AddToCart;
