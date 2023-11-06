import { ChangeEvent } from "react";

function CountInput({
  count,
  setCount,
}: {
  count: number;
  setCount: Function;
}) {
  return (
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
  );
}
export default CountInput;
