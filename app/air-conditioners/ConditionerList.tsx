import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ConditionerList({ conditionerList, currencyValue, isHide, brand }: any) {
   const router = useRouter();
   const dollarVal = currencyValue;
   return (
      <ul className={`${isHide ? "conditioners__list__unactive" : ""} conditioners__list grid mt-14`}>
         {conditionerList.map((el: any, index: number) => {
            return (
               <button onClick={() => router.push(`/air-conditioners/${el.name.replace(/\s/g, "-")}`)} key={index}>
                  <li
                     style={{ transitionDelay: index / 6 + "s" }}
                     className={`conditioners__item ${
                        brand === "Midea" ? "conditioners__item__midea" : "conditioners__item__welkin"
                     } flex flex-col text-center items-center py-6`}
                  >
                     <div className="conditioners__img-container relative flex items-center justify-center z-0">
                        <Image
                           className="conditioners__img"
                           src={el.image.node.sourceUrl}
                           alt={el.name}
                           fill={true}
                           objectFit="contain"
                        />
                     </div>
                     <div className="flex flex-col">
                        <p className="conditioners__itemTitle font-medium relative z-10">{el.name}</p>
                        {currencyValue ? (
                           <span className="conditioners__itemPriceTitle mt-5 inline-block">
                              от {(+el.cost * dollarVal).toLocaleString()} UZS
                           </span>
                        ) : (
                           ""
                        )}
                     </div>
                     <button
                        className={`conditioners__btn mt-10 ${
                           brand === "Midea" ? "conditioners__btnMidea" : "conditioners__btnWelkin"
                        }`}
                     >
                        <span>Подробнее</span>
                     </button>
                  </li>
               </button>
            );
         })}
      </ul>
   );
}
export default ConditionerList;
