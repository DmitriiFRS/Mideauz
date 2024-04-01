import "../globals.scss";
import "./Footer.scss";
import midea from "../../public/logos/midea-white.svg";
import welkin from "../../public/logos/welkin.svg";
import Image from "next/image";
import inst from "../../public/icons/Footer/instagram.svg";
import tel from "../../public/icons/Footer/telegram.svg";
import fb from "../../public/icons/Footer/facebook.svg";
import youtube from "../../public/icons/Footer/youtube.svg";
import Link from "next/link";

const footerData = [
   {
      title: "Адрес официального шоу рума",
      el1: "Узбекистан, г. Ташкент, Чиланзар 1, ул. Лабихавуз, 57",
   },
   {
      title: "Наши контакты",
      el1: "+998 90 995 80 60",
      el2: "+998 93 123 66 06",
   },
   {
      title: "Сервисный центр",
      el1: "+998 90 027 3003",
   },
];

function Footer() {
   return (
      <footer className="footer">
         <div className="container text-white">
            <div className="footer__top grid py-10 px-2">
               <Link href={"/"} className="footer__logos-body">
                  <div className="footer__logoBody">
                     <Image src={midea} alt="midea" fill />
                  </div>
                  <span>&</span>
                  <div className="footer__logoBody">
                     <Image src={welkin} alt="midea" fill />
                  </div>
               </Link>
               {footerData.map((el, idx) => {
                  return (
                     <div key={idx}>
                        <h4 className="text-xl">{el.title}</h4>
                        <p className="mt-4 text-lg">{el.el1}</p>
                        {el.el2 ? <p className="text-lg">{el.el2}</p> : ""}
                     </div>
                  );
               })}
            </div>
            <div className="flex justify-between items-center text-center py-4">
               <div className="footer__bottom">© Midea - Официальный представитель в Узбекистане 2024</div>
               <div className="footer__iconsBody flex">
                  <Link className="flex items-center" href="https://t.me/midea_welkin_climat">
                     {" "}
                     <Image className="footer__icon1" src={tel} width={40} height={40} alt="tel" />{" "}
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
/*
<Link className="flex items-center" href="https://t.me/midea_welkin_climat">
                     {" "}
                     <Image className="footer__icon2" src={inst} width={30} height={30} alt="inst" />{" "}
                  </Link>
                  <Link className="flex items-center" href="https://t.me/midea_welkin_climat">
                     {" "}
                     <Image className="footer__icon3" src={fb} width={30} height={30} alt="fb" />{" "}
                  </Link>
                  <Link className="flex items-center" href="https://t.me/midea_welkin_climat">
                     {" "}
                     <Image className="footer__icon4" src={youtube} width={30} height={30} alt="youtube" />{" "}
                  </Link>
                  */
