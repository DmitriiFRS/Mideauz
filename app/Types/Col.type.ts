export type ColModelTypeInner = {
   id: string;
   col: {
      name: string;
      power: string;
      cost: string;
      coolingOutput: string | null;
      heatOutput: string | null;
      energyOutput: string | null;
      areaCube: string | null;
      areaQuad: string | null;
      coolantCapacity: string | null;
      indoorNoiseLevel: string | null;
      outdoorNoiseLevel: string | null;
      company: Array<string>;
      description: string;
      temperatureRange: string;
      type: Array<string>;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

export type CurrencyInner = {
   dollarValue: {
      currencyValue: number;
   };
};

export type ColFetchData = {
   data: {
      colConditioners: {
         nodes: Array<ColModelTypeInner>;
      };
      currencyValues: {
         nodes: Array<CurrencyInner>;
      };
   };
};

export type DuctFetchData = {
   data: {
      ductConditioners: {
         nodes: Array<ColModelTypeInner>;
      };
      currencyValues: {
         nodes: Array<CurrencyInner>;
      };
   };
};
export type CasFetchData = {
   data: {
      casConditioners: {
         nodes: Array<ColModelTypeInner>;
      };
      currencyValues: {
         nodes: Array<CurrencyInner>;
      };
   };
};
