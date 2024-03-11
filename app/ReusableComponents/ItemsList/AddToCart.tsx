import { AppDispatch } from "@/app/Redux/store";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { ModelType } from "./ItemListpage";
import { useEffect, useState } from "react";
import { setCartCount } from "@/app/Redux/Slices/main.slice";
import { ColModelTypeInner } from "@/app/Types/Col.type";
import CartModal from "@/app/cart/CartModal";
import AnimateAcceptSVG from "@/app/Utilities/AnimateAcceptSVG";
import Link from "next/link";
import "../../cart/cart.scss";

type PropsType = {
   currentItems: null | Array<ColModelTypeInner>;
   firstInput?: string;
   subInputRef: React.RefObject<HTMLSelectElement>;
   countValue: number;
};
type NewItem = {
   model: string;
   type?: string;
   power: string;
   price: string;
   id: string;
   count: number;
   img: string;
};

function AddToCart({ currentItems, firstInput, subInputRef, countValue }: PropsType) {
   const dispatch = useDispatch<AppDispatch>();
   const [value, setValue] = useLocalStorage<any>("item", []);
   const [isModalOpen, setModalStatus] = useState<boolean>(false);
   function closeModal() {
      setModalStatus(false);
   }
   function addItemToCart() {
      let modelType = null;
      if (subInputRef && currentItems) {
         console.log(currentItems?.forEach((el) => el));
         modelType = currentItems.find((el) => {
            if (
               (el.col.power[0] === subInputRef.current?.value && el.col.type[0] === firstInput) ||
               (el.col.power[0] === subInputRef.current?.value && !firstInput)
            ) {
               return el;
            }
         });
      }
      let flag = false;
      const newValue = value;
      if (modelType) {
         console.log(modelType);
         const newItem: NewItem = {
            model: `Кондиционер ${modelType.col.name}`,
            power: modelType.col.power[0],
            price: modelType.col.cost,
            id: modelType.id,
            count: countValue,
            type: modelType.col.type[0],
            img: modelType.col.image.node.sourceUrl,
         };
         (newItem.type = firstInput),
            value.forEach((el: NewItem, index: number) => {
               if (el.model === newItem.model && el.power === newItem.power && el.type === newItem.type) {
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
