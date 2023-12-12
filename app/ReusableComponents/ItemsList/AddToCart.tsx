import { AppDispatch } from "@/app/Redux/store";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { ModelType } from "./ItemListpage";
import { useEffect } from "react";
import { setCartCount } from "@/app/Redux/Slices/main.slice";

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
   function addItemToCart() {
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
      </div>
   );
}
export default AddToCart;
