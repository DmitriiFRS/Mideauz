import fetchGraphqlData from "@/app/Utilities/FetchGraphql";
import { count } from "firebase/firestore";
import { getValue } from "firebase/remote-config";
import Image from "next/image";
import CountInput from "./CountInput";
import SelectPowerInput from "./SelectPowerInput";
import CostPerUnit from "./CostPerUnit";
import AddToCart from "./AddToCart";

export type ModelsType = {
   details: Array<string>;
   params: Array<string>;
   power: string;
   price: string;
   id: number;
};
export type ModelType = {
   company: string;
   img: string;
   models: Array<ModelsType>;
   name: string;
};

export type ModelTypeInner = {
   id: string;
   conditionerField: {
      name: string;
      power: number;
      cost: string;
      coolingOutput: string | null;
      heatOutput: string | null;
      energyOutput: string | null;
      areaCube: string | null;
      areaQuad: string | null;
      indoorNoiseLevel: string | null;
      outdoorNoiseLevel: string | null;
      company: Array<string>;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type ModelType2 = {
   data: {
      data: {
         conditioners: {
            nodes: Array<ModelTypeInner>;
         };
      };
   };
};

async function Details({ params }: { params: { Details: string } }) {
   const data = await fetchGraphqlData(`
   {
      conditioners(first: 999) {
        nodes {
         id
          conditionerField {
            name
            power
            cost
            coolingOutput
            heatOutput
            energyOutput
            areaCube
            areaQuad
            indoorNoiseLevel
            outdoorNoiseLevel
            company
            image {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
   `);
   const currencyData = await fetchGraphqlData(`
   query {
      currencyValues {
        nodes {
          dollarValue {
            currencyValue
          }
        }
      }
    }
   `);
   let flag = false;
   return (
      <div className="conditionerCard container">
         {data.data.conditioners.nodes.map((el: ModelTypeInner, index: number) => {
            if (el.conditionerField.name.replace(/\s/g, "-") === params.Details && !flag) {
               flag = true;
               return (
                  <div key={index} className="conditionerCard__mainBody grid mt-10">
                     <div className="conditionerCard__img relative">
                        <Image
                           src={el.conditionerField.image.node.sourceUrl}
                           alt={el.conditionerField.name}
                           fill={true}
                        />
                     </div>
                     <div className="conditionerCard__main flex flex-col">
                        <h2 className="conditionerCard__modelTitle text-5xl">{el.conditionerField.name}</h2>
                        <div className="conditionerCard__optionContainer flex mt-10">
                           <SelectPowerInput data={data.data.conditioners.nodes} details={params.Details} />
                           <CountInput />
                        </div>
                        <CostPerUnit
                           currencyData={currencyData.data.currencyValues.nodes[0].dollarValue.currencyValue}
                        />
                        <AddToCart />
                     </div>
                  </div>
               );
            }
         })}
      </div>
   );
}

/*
function Details() {
   const params = useParams();
   const [model, setModel] = useState<any>(null);
   const [count, setCount] = useState<number>(1);
   const [optionValue, setValue] = useState(0);
   const [itemParams, setItemParams] = useState([]);
   const [itemOtherParams, setItemOtherParams] = useState([]);
   const selectRef = useRef<HTMLSelectElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const goods = useSelector((state: RootState) => state.itemReducer.itemsList);
   const currencyValue = useSelector((state: RootState) => state.mainReducer.currencyValue?.value);
   const [isInProgress, setProgress] = useState<boolean>(false);
   const [isFadeOut, setFadeEffect] = useState<boolean>(false);
   useEffect(() => {
      dispatch(currencyValueData());
   }, [dispatch]);

   useEffect(() => {
      dispatch(getConditionerItems());
   }, [dispatch]);

   useEffect(() => {
      if (goods) {
         const newModel = goods.кондиционеры.filter((el) => {
            return el.name.replace(/\s/g, "-") === params.Details;
         });
         setModel(newModel[0]);
      }
   }, [goods]);
   useEffect(() => {
      if (selectRef.current) {
         setItemParams(model.models[optionValue].params);
         setItemOtherParams(model.models[optionValue].details);
      }
   }, [optionValue, itemParams, model]);
   function getValue(e: ChangeEvent<HTMLSelectElement>) {
      setProgress(false);
      setFadeEffect(true);
      setTimeout(() => {
         setValue(parseInt(e.target.value));
         setFadeEffect(false);
      }, 200);
   }

   return model ? (
      <div className="conditionerCard container">
         <ItemAddedToCart isInProgress={isInProgress} />
         <div className="conditionerCard__mainBody grid mt-10">
            <div className="conditionerCard__img relative">
               <Image src={model.img} alt={model.name} fill={true} />
            </div>
            <div className="conditionerCard__main flex flex-col">
               <h2 className="conditionerCard__modelTitle text-5xl">{model.name}</h2>
               <div className="conditionerCard__optionContainer flex mt-10">
                  <SelectPowerInput selectRef={selectRef} getValue={getValue} model={model} />
                  <CountInput count={count} setCount={setCount} />
               </div>
               {currencyValue ? (
                  <div className="conditionerCard__price mt-10 text-2xl">
                     {"Стоимость за единицу:" +
                        " " +
                        (model.models[optionValue].price * currencyValue).toLocaleString() +
                        " UZS"}
                  </div>
               ) : (
                  ""
               )}

               <AddToCart setProgress={setProgress} model={model} optionValue={optionValue} count={count} />
            </div>
            <Description isFadeOut={isFadeOut} itemParams={itemParams} itemOtherParams={itemOtherParams} />
            <Video />
         </div>
      </div>
   ) : (
      <CartSkeleton />
   );
}*/
export default Details;
