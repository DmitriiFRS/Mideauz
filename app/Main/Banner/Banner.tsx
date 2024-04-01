import Image from "next/image";
import banner from "../../../public/img/banner-april.jpg";
import "./Banner.scss";
import Link from "next/link";
import fetchGraphqlData from "@/app/Utilities/FetchGraphql";

function Banner() {
   return (
      <section className="banner">
         <div className="container banner__container px-2.5">
            <Link href="https://www.instagram.com/p/Cw2D6CasDYf" target="_blank">
               <div className="banner__imgContainer">
                  <Image src={banner} alt="акция" fill style={{ objectFit: "contain" }} />
               </div>
            </Link>
         </div>
      </section>
   );
}
export default Banner;
