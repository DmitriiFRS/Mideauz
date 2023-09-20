import '../globals.css';
import './Footer.scss';
import midea from '../../public/logos/midea-footer.png';
import Image from 'next/image';

const footerData = [{
   title: 'Адрес официального шоу рума',
   el1: 'Узбекистан, г. Ташкент, Чиланзар 1, ул. Лабихавуз, 57'
},
{
   title: 'Наши контакты',
   el1: '+998 71 200 05 45',
   el2: '+998 99 443 06 66'
},
{
   title: 'Сервисный центр',
   el1: '+998 71 200 34 56'
}]

function Footer() {
return (
<footer className="footer">
   <div className="container text-white">
      <div className="footer__top grid grid-cols-4 py-10">
         <Image src={midea} alt='midea' width={204} height={80} />
         {footerData.map((el, idx) => {
            return (
               <div className=''>
                  <h4 className='text-xl'>{el.title}</h4>
                  <p className='mt-4 text-lg'>{el.el1}</p>
                 {el.el2 ? <p className='text-lg'>{el.el2}</p> : ''}
               </div>
            )
         })}
      </div>
      <div className="footer__bottom pb-7">© Midea - Официальный представитель в Узбекистане 2022</div>
   </div>
   
</footer>
)
}
export default Footer;