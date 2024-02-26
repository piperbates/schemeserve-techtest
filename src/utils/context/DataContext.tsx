import { createContext, useState, SetStateAction, Dispatch } from "react";
import { DataType } from "../types/dataTypes";

type DataPropTypes = {
    children: React.ReactNode
};

type DataContextTypes = {
    data: DataType[] | [],
    setData: Dispatch<SetStateAction<
        DataType[] | []>>,
    };

export const Data = createContext<DataContextTypes>({
    data: [],
    setData: () => {},
});

export function DataContext ({children}: DataPropTypes) {
    const [data, setData] = useState<DataType[] | []>([]);

    return (
        <Data.Provider value={{ data, setData,}}>
          {children}
        </Data.Provider>
      );
};
