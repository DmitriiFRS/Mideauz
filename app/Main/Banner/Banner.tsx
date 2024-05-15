import Image from "next/image";
import banner from "../../../public/img/banner-may.jpg";
import "./Banner.scss";
import Link from "next/link";

function Banner() {
   return (
      <section className="banner">
         <div className="container banner__container px-2.5">
            <Link href="https://t.me/promotion_midea_bot" target="_blank">
               <div className="banner__imgContainer">
                  <Image src={banner} alt="акция" fill style={{ objectFit: "contain" }} />
               </div>
            </Link>
            <Link href="https://t.me/promotion_midea_bot" target="_blank" className="btn_blue font-semibold">
               Узнать подробнее
            </Link>
         </div>
      </section>
   );
}
export default Banner;
