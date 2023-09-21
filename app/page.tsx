import Banner from './Main/Banner/Banner';
import Preview from './Main/Preview/Preview';
import './page.scss';
export default function Home() {
  return (
    <main className='flex-auto main'>
      <Preview />
      <Banner />
    </main>
  )
}
