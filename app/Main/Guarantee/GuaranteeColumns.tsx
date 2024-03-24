import quality from "../../../public/icons/check-circle.svg";
import cash from "../../../public/icons/refund.svg";
import service from "../../../public/icons/service.svg";
import Image from "next/image";

const columns = [
   {
      img: quality,
      imgAlt: "quality",
      title: "Гарантия качества",
      subtitle: "Не беспокойтесь за качество. Мы крайне ответственно подходим к вопросу качества. Мы гарантируем максимальное качество работ и оборудования.",
   },
   {
      img: cash,
      imgAlt: "money back",
      title: "Гарантия возврата денег",
      subtitle:
         "Если по каким-либо причинам вы останетесь недовольны нами – на любом этапе вплоть до установки – мы вернем вам деньги. Без лишних слов и вопросов.",
   },
   {
      img: service,
      imgAlt: "service",
      title: "Гарантия сервиса",
      subtitle: "Мы всегда на связи и готовы проконсультировать вас по любому возникшему вопросу. Обращайтесь!",
   },
];

function GuaranteeColumns() {
   return (
      <div className="guarantee__columns grid grid-cols-3 gap-9 text-center mt-12">
         {columns.map((el, idx) => {
            return (
               <div key={idx} className="guarantee__column column flex flex-col justify-center items-center">
                  <Image src={el.img} alt={el.imgAlt} width={100} height={100} />
                  <h3 className="guarantee__columns__title flex-auto mt-7 text-2xl">{el.title}</h3>
                  <p className="guarantee__columns__subtitle mt-7 text-lg flex-auto">{el.subtitle}</p>
               </div>
            );
         })}
      </div>
   );
}
export default GuaranteeColumns;
