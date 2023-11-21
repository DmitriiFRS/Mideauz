"use client";

import { mideaConditionersData } from "../Data/ColumnConditioners.data";
import { welkinConditionersData } from "../Data/ColumnConditioners.data";
import Conditioners from "./Conditioners";

function ColumnConditioners() {
   const data = [
      {
         title: "Кондиционеры Midea",
      },
      {
         title: "Кондиционеры Welkin",
      },
   ];
   return (
      <section className="col-Conditioners flex-auto">
         <Conditioners title={data[0].title} data={mideaConditionersData} />
         <Conditioners title={data[1].title} data={welkinConditionersData} />
      </section>
   );
}
export default ColumnConditioners;
