function PowerAndCount({ model }: any) {
  return (
    <div className="conditionerCard__powerCount">
      <div className="conditionerCard__power">
        <label htmlFor="conditionerPower" className="mt-10 text-2xl">
          Мощность
        </label>
        <select
          name="powerSelect"
          id="conditionerPower"
          className="conditionerCard__select mt-2 text-2xl"
        >
          {model[0].models.map((el: ModelsType, index: number) => {
            return (
              <option key={index} value={index + 1}>
                {el.power}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default PowerAndCount;
