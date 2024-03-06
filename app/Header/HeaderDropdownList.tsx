import condition from "../../public/img/Header/condition.png";
import column from "../../public/img/Header/column-condition.png";
import casette from "../../public/img/Header/casette.png";
import vrf from "../../public/img/Header/vrf.png";
import chiller from "../../public/img/Header/chiller.png";
import Link from "next/link";
import Image from "next/image";
import canal from "../../public/img/Header/canal.png";
import "./Header.scss";

const list = [
   {
      title: "Бытовые кондиционеры настенного типа",
      img: condition,
      href: "/air-conditioners",
   },
   {
      title: "Бытовые кондиционеры колонного типа",
      img: column,
      href: "/column-conditioners",
   },
   {
      title: "Полупромышленные кондиционеры кассетного типа",
      img: casette,
      href: "/casette-conditioners",
   },
   {
      title: "Полупромышленные кондиционеры канального типа",
      img: canal,
      href: "/ducted-conditioners",
   },
   {
      title: "VRF системы",
      img: vrf,
      href: "/vrf",
   },
   {
      title: "Чиллер-фанкоил Midea",
      img: chiller,
      href: "/chillers",
   },
];

function HeaderDropdownList({ hideBar }: { hideBar: () => void }) {
   return (
      <div className="container flex justify-between py-10 gap-5">
         {list.map((el, idx) => {
            return (
               <li onClick={hideBar} key={idx} className="dropdownList__item font first-letter font-medium">
                  <Link className="flex flex-col justify-center items-center h-full" href={el.href}>
                     <h4 className="dropdownList__title">{el.title}</h4>
                     <div className="dropdownList__imgBody relative">
                        <Image className="dropdownList__img" src={el.img} alt="item" fill objectFit="contain" />
                     </div>
                  </Link>
               </li>
            );
         })}
      </div>
   );
}
export default HeaderDropdownList;
