"use client";

import { getConditionerItems } from "@/app/Redux/Slices/items.slice";
import { AppDispatch, RootState } from "@/app/Redux/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {
  const params = useParams();
  const [model, setModel] = useState<any | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const goods = useSelector((state: RootState) => state.itemReducer.itemsList);

  useEffect(() => {
    dispatch(getConditionerItems());
  }, [dispatch]);

  useEffect(() => {
    if (goods) {
      setModel(
        goods.кондиционеры.filter((el) => {
          return el.name === params.Details;
        })
      );
    }
  }, [goods]);
  model ? console.log(model) : "";
  return model ? (
    <div className="conditionerCard container">
      <div className="">
        <div className="conditionerCard__img"></div>
        <div className="conditionerCard__main">
          <h2>{model[0].name}</h2>
          <h4>
            {model[0].models[0].price + "UZS"} -
            {model[0].models[model[0].models.length - 1].price + "UZS"}
          </h4>
          <label htmlFor="power">Мощность</label>
          <select name="" id="power"></select>
          <div className="">
            <input value={1} type="number" />
            <button className="conditionerCard__submit">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>fdfd</div>
  );
}
export default Details;
