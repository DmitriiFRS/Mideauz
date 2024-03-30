"use client";
import { usePathname } from "next/navigation";
import styles from "./Utilities.module.scss";
import Link from "next/link";

function Breadcrumbs() {
   const paths = usePathname();
   const pathNames = paths.split("/").filter((path) => path);
   const titleRouter = ["Главная"];
   return (
      <div className={styles.bc}>
         {paths.split("/").map((el, index) => {
            let href = `/${pathNames.slice(0, index).join("/")}`;
            if (el === "catalog") titleRouter.push("Каталог");
            else if (el === "about") titleRouter.push("О компании");
            else if (el === "coordinates") titleRouter.push("Координаты");
            else if (el === "air-conditioners") titleRouter.push("Настенные кондиционеры");
            else if (el === "column-conditioners") titleRouter.push("Колонные кондиционеры");
            else if (el === "casette-conditioners") titleRouter.push("Кассетные кондиционеры");
            else if (el === "ducted-conditioners") titleRouter.push("Канальные кондиционеры");
            else if (el === "vrf") titleRouter.push("VRF-Системы");
            else if (el === "chillers") titleRouter.push("Чиллеры");
            else if (el === "cart") titleRouter.push("Корзина");
            else if (el) titleRouter.push(el);
            return (
               <div className={styles.bc__link} key={index}>
                  {titleRouter[index - 1] ? <span>/</span> : ""}
                  <Link className={styles.bc__linkInner} href={href}>
                     {titleRouter[index]}
                  </Link>
                  {titleRouter[index + 1] ? <span>/</span> : ""}
               </div>
            );
         })}
      </div>
   );
}
export default Breadcrumbs;
