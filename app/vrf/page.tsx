import "./vrf.scss";
import V8Main from "../../public/img/Equip/vrf/V8-main.png";
import Image from "next/image";
import Link from "next/link";

function Vrf() {
   return (
      <div className="vrf flex-auto container">
         <h2 className="vrf__title mt-20 text-center font-semibold text-7xl">VRF Система</h2>
         <div className="vrf__content1">
            <div className="flex gap-11 justify-between mt-16 text-5xl items-center font-medium">
               <p className="vrf__content1__sub">Идеальное решение для частных домов, больших офисов, бизнес-центров</p>
               <div className="vrf__content1__imgBody relative">
                  <Image src={V8Main} alt="VRF" fill />
               </div>
            </div>
            <div className="vrf__content1__contects flex justify-center gap-10">
               <button className="btn-blue">
                  <span className="btn-blue-inner">+79271184766</span>
               </button>
               <Link className="btn-blue inline-block" href={"#"}>
                  <span className="btn-blue-inner">Telegram</span>
               </Link>
            </div>
         </div>
      </div>
   );
}
export default Vrf;
