import Banner from './Main/Banner/Banner';
import Equip from './Main/Equip/Equip';
import Guarantee from './Main/Guarantee/Guarantee';
import Preview from './Main/Preview/Preview';
import Support from './Main/Support/Support';
import './page.scss';
export default function Home() {
  return (
    <main className='flex-auto main'>
      <Preview />
      <Banner />
      <Equip />
      <Guarantee />
      <Support />
    </main>
  )
}
