import { setDoc, doc } from "firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { CartItemType } from "./Main";

function SendDataForm({ value }: { value: Array<CartItemType> }) {
   const [name, setName] = useState<string>("");
   const [phone, setPhone] = useState<number>();
   const formRef = useRef(null);
   function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      const data = {
         name: name,
         phone: phone,
      };
      setDoc(doc(db, "заявки", "2gtV71ouF5nxoPcxcwkl"), {
         data,
      });
   }
   return (
      <form ref={formRef} className={`cart__additional mr-7 p-3 ${!value.length ? "cart__additional__disable" : ""}`}>
         <h3 className="text-lg">Оформите заявку, и специалист свяжется с вами в ближайшее время</h3>
         <div className="mt-10">
            <input
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="py-3 px-5 w-full"
               type="text"
               placeholder="Как к вам обращаться?"
            />
         </div>
         <div className="mt-10">
            <input
               value={phone}
               onChange={(e) => setPhone(parseInt(e.target.value))}
               className="py-3 px-5 w-full"
               type="number"
               placeholder="Ваш номер телефона"
            />
         </div>
         <div className="cart__separator"></div>
         <div className="flex items-center justify-center cart__btn cursor-pointer">
            <button onClick={(e) => submitForm(e)} className="relative z-10 w-full h-full" type="submit">
               Оставить заявку
            </button>
         </div>
      </form>
   );
}
export default SendDataForm;
