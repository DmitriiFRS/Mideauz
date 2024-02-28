import Image from "next/image";
import banner from "../../../public/img/baner-1.jpg";
import "./Banner.scss";
import Link from "next/link";
import fetchGraphqlData from "@/app/Utilities/FetchGraphql";

async function Banner() {
   const data = await fetchGraphqlData(`
   query {
      comments {
        nodes {
          id
        }
      }
    }  
   `);
   console.log(data.data.comments);
   return (
      <section className="banner">
         <div className="container banner__container px-2.5">
            <Link href="https://www.instagram.com/p/Cw2D6CasDYf" target="_blank">
               <Image src={banner} alt="banner" width={1500} height={400} />
            </Link>
         </div>
      </section>
   );
}
export default Banner;
