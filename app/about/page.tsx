import "./About.scss";
import Image from "next/image";
import midea from "../../public/logos/midea.svg";
import welkin from "../../public/logos/welkin.svg";

function About() {
   return (
      <div className="about flex-auto pb-3 mt-14">
         <div className="container">
            <h2 className="text-center text-4xl font-semibold text-slate-500">Общая информация о нашей компании</h2>
            <div className="flex gap-10">
               <div className="about__company flex flex-col items-center">
                  <div className="about__logoContainer relative">
                     <Image src={midea} alt="midea logo" fill />
                  </div>
                  <h4 className="text-3xl text-slate-500 font-semibold mt-10">О компании Midea</h4>
                  <div className="about__line mt-6"></div>
                  <div className="about__titles mt-6 text-2xl text-slate-700">
                     <p>Midea – бренд №1 в мире по количеству производимого климатического оборудования.</p>
                     <p>
                        История компании Midea берёт своё начало в далёком 1968 году и на данный момент оборудование
                        Midea продаётся в более чем 200 странах мира.
                     </p>
                     <p>Компании Midea принадлежат бренды Toshiba, Clivet, Kuka, Eureka, Comfee и др.</p>
                  </div>
               </div>
               <div className="about__company flex flex-col items-center">
                  <div className="about__logoContainer relative">
                     <Image src={welkin} alt="welkin logo" fill />
                  </div>
                  <h4 className="text-3xl text-slate-500 font-semibold mt-10">О компании Welkin</h4>
                  <div className="about__line mt-6"></div>
                  <div className="about__titles mt-6 text-2xl text-slate-700">
                     <p>Welkin – официальный представитель и сервисный центр компании Midea в Узбекистане.</p>
                     <p>
                        Наша команда занимается кондиционированием и вентиляцией любой сложности и масштаба с 2008 года.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default About;
