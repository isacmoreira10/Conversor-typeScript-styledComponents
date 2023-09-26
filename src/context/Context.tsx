import { ReactNode, createContext, useState } from 'react'
import { DollarProps, RateProps } from '../pages/components/main'

interface ContextConversionProps {
    children: ReactNode
}

export interface Conversion {
    dollar: DollarProps
    rate: RateProps
}

interface Rate {
    rate: RateProps
}

interface Quotation {
    dollar: number
}

interface QuotationReal {
    dollar: number
}


interface ConversionContext {
    conversion: Conversion | number
    setConversion: React.Dispatch<React.SetStateAction<Conversion | number>>
    rateShareDate: Rate | number
    setRateShareDate: React.Dispatch<React.SetStateAction<number | Rate>>
    quotation: Quotation | number
    setquotation: React.Dispatch<React.SetStateAction<number | Quotation>>
    quotationReal: QuotationReal | number
    setquotationReal: React.Dispatch<React.SetStateAction<number | QuotationReal>>
}



export const ConversionContext = createContext<ConversionContext>({} as ConversionContext)

export function ConversionValue({ children }: ContextConversionProps) {
    const [conversion, setConversion] = useState<Conversion | number>(0)
    const [rateShareDate, setRateShareDate] = useState<Rate | number>(0)
    const [quotation, setquotation] = useState<Quotation | number>(0)
    const [quotationReal, setquotationReal] = useState<QuotationReal | number>(0)

    return (
        <ConversionContext.Provider value={{
            conversion,
            setConversion,
            rateShareDate,
            setRateShareDate,
            quotation,
            setquotation,
            quotationReal,
            setquotationReal

        }}>
            {children}
        </ConversionContext.Provider>
    )


}