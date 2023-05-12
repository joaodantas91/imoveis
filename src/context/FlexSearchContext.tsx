import React, { createContext, ReactNode, useEffect, useState } from 'react';
import localDB from '@/public/db/properties';
import { Properties } from '@/types/properties';



type FlexSearchProviderProps = {
  children: ReactNode;
}

type FlexSearchContext = {
  store: {
    [key: number]: Properties;
  }
}

const flexSearchContext = createContext<FlexSearchContext>({ store: {} });

export const FlexSearchProvider: React.FC<FlexSearchProviderProps> = ({ children }) => {
  // const [index, setIndex] = useState(null);


  const store = {};
  localDB.forEach((item, index) => {
    Object.assign(store, { [index]: item })
  });

  // console.log({ store });

  // useEffect(() => {

  //   // const index = new Index(options);

  //   data.forEach(item => {
  //     flexIndex.add(item.id, item);
  //   });

  //   setIndex(flexIndex);
  // }, [data]);

  return (
    <flexSearchContext.Provider value={{ store }}>
      {children}
    </flexSearchContext.Provider>
  );
};

export default flexSearchContext;