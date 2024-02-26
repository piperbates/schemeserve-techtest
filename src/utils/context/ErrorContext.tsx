import { createContext, useState, SetStateAction, Dispatch } from "react";

type ErrorPropTypes = {
    children: React.ReactNode
};

type ErrorContextTypes = {
    error: string | null,
    setError: Dispatch<SetStateAction<string | null>>,
};

export const Error = createContext<ErrorContextTypes>({
    error: null,
    setError: () => {},
});

export function ErrorContext ({children}: ErrorPropTypes) {
    const [error, setError] = useState<string | null>(null);

    return (
        <Error.Provider value={{ error, setError,}}>
          {children}
        </Error.Provider>
      );
};
