"use client";

import { getConditionerItems } from "@/app/Redux/Slices/items.slice";
import { AppDispatch, RootState } from "@/app/Redux/store";
import { useParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import "../air-conditioners.scss";

type ModelsType = {
  details: Array<string>;
  params: Array<string>;
  power: string;
  price: string;
};

function Details() {
  const params = useParams();
  const [model, setModel] = useState<any | null>(null);
  const [count, setCount] = useState<number>(1);
  const [optionValue, setValue] = useState(0);
  const [itemParams, setItemParams] = useState([]);
  const [itemOtherParams, setItemOtherParams] = useState([]);
  const selectRef = useRef<HTMLSelectElement>(null);
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
  useEffect(() => {
    if (selectRef.current) {
      setItemParams(model[0].models[optionValue].params);
      setItemOtherParams(model[0].models[optionValue].details);
    }
  }, [optionValue, itemParams, model]);
  function getValue(e: ChangeEvent<HTMLSelectElement>) {
    setValue(parseInt(e.target.value));
  }
  return model ? (
    <div className="conditionerCard container">
      <div className="conditionerCard__mainBody flex mt-20">
        <div className="conditionerCard__img relative">
          <Image src={model[0].img} alt={model[0].name} fill={true} />
        </div>
        <div className="conditionerCard__main flex flex-col mt-10 py-5">
          <h2 className="text-5xl text-center">{model[0].name}</h2>
          <h4 className="mt-10 text-2xl text-center">
            {model[0].models[0].price + "UZS"} -
            {model[0].models[model[0].models.length - 1].price + "UZS"}
          </h4>
          <div className="flex mt-10">
            <div className="flex flex-col">
              <label htmlFor="conditionerPower" className=" text-2xl">
                Мощность
              </label>
              <select
                onChange={(e) => getValue(e)}
                name="powerSelect"
                id="conditionerPower"
                className="conditionerCard__select mt-5 text-2xl"
                ref={selectRef}
              >
                {model[0].models.map((el: ModelsType, index: number) => {
                  return (
                    <option key={index} value={index}>
                      {el.power}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="conditionerCount__modpowBody flex flex-col ml-10">
              <label htmlFor="conditionerCount" className="text-2xl">
                Количество
              </label>
              <input
                id="conditionerCount"
                value={count}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCount(parseInt(e.target.value))
                }
                type="number"
                className="conditionerCard__input text-2xl mt-5"
              />
            </div>
          </div>
          <div className="conditionerCard__price mt-10 text-2xl text-center">
            {model[0].models[optionValue].price + " UZS"}
          </div>

          <div className="conditionerCard__btnContainer mt-10">
            <button className="conditionerCard__submit text-2x1 ml-5">
              Добавить в корзину
            </button>
          </div>
        </div>
        <div className="conditionerCard__desc mt-10 py-5 flex flex-col">
          <h2 className="text-4xl">Характеристики</h2>
          <ul className="conditionerCard__descList mt-10">
            {selectRef.current &&
              itemParams.map((el, index) => {
                return (
                  <li key={index} className="conditionerCard__descItem text-xl">
                    {`-${el}`}
                  </li>
                );
              })}
          </ul>
          <div className="conditionerCard__other mt-10">
            <h2 className="text-4xl">Подробнее</h2>
            <ul className="conditionerCard__descList mt-10">
              {selectRef.current &&
                itemOtherParams.map((el, index) => {
                  return (
                    <li
                      key={index}
                      className="conditionerCard__descItem text-xl"
                    >{`-${el}`}</li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>fdfd</div>
  );
}
export default Details;
