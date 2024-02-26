import { createContext, useState, SetStateAction, Dispatch } from "react";

type LoadingPropTypes = {
    children: React.ReactNode
};

type LoadingContextTypes = {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    };

export const Loading = createContext<LoadingContextTypes>({
    loading: false,
    setLoading: () => {},
});

export function LoadingContext ({children}: LoadingPropTypes) {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <Loading.Provider value={{ loading, setLoading,}}>
          {children}
        </Loading.Provider>
      );
};
