import bn from "@locales/bn";
import en from "@locales/en";
import { ILocalize } from "@locales/localize.interface";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { createContext, useContext } from "react";

type ILocalizeType = {
    localize: { [property: string]: string | any };
};

const LocalizationContext = createContext<ILocalizeType>({
    localize: {}
});
export function useLocalization() {
    return useContext(LocalizationContext);
}

export function LocalizationProvider({ children }: { children: ReactNode }) {
    const { locale } = useRouter();
    const localize: ILocalize = locale === "en" ? en : bn;

    return (
        <LocalizationContext.Provider value={{ localize }}>
            {children}
        </LocalizationContext.Provider>
    );
}
