import '../globals.css';
import './Footer.scss';
import midea from '../../public/logos/midea-footer.png';
import Image from 'next/image';
import inst from '../../public/icons/Footer/instagram.svg';
import tel from '../../public/icons/Footer/telegram.svg';
import fb from '../../public/icons/Footer/facebook.svg';
import youtube from '../../public/icons/Footer/youtube.svg';
import Link from 'next/link';

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
      <div className="flex justify-between items-center text-center mt-20 py-6">
         <div className="footer__bottom">© Midea - Официальный представитель в Узбекистане 2023</div>
         <div className="footer__iconsBody flex">
            <Link className='flex items-center' href='https://t.me/midea_welkin_climat'> <Image src={tel} width={50} height={50} alt='tel'/> </Link>
            <Link className='flex items-center' href='https://t.me/midea_welkin_climat'> <Image src={inst} width={50} height={50} alt='inst'/> </Link>
            <Link className='flex items-center' href='https://t.me/midea_welkin_climat'> <Image src={fb} width={50} height={50} alt='fb'/> </Link>
            <Link className='flex items-center' href='https://t.me/midea_welkin_climat'> <Image src={youtube} width={50} height={50} alt='youtube'/> </Link>
         </div>
      </div>
   </div>
</footer>
)
}
export default Footer;