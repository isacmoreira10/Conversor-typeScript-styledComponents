
import { Card, Converter, Ellipse2, Ellipse3, Ellipse4, EllipseContainer, FormDiv, FormDolarContainer, FormRateContainer, Img, MainDiv, MethodPurchase, Money, TypePurchase } from './styles'
import Tranfer from '../../../assets/images/Transfer.png'
import UnMarked from '../../../assets/images/Unmarked.png'
import { NavLink } from 'react-router-dom'
import Mask from '../../../assets/images/Mask.png'
import Ellipse from '../../../assets/images/Ellipse 2.png'
import React, { useContext, useState } from 'react'
import { ConversionContext } from '../../../context/Context'

export interface DollarProps {
    dollar: number | undefined
    setDollar: React.Dispatch<React.SetStateAction<number | undefined>>
}

export interface RateProps {
    rate: number
    setRate: React.Dispatch<React.SetStateAction<number | undefined>>
}


export function Main() {
    const { setConversion, setRateShareDate, setquotation, setquotationReal } = useContext(ConversionContext)
    const [dollar, setDollar] = useState<DollarProps | number>(0)
    const [rate, setRate] = useState<RateProps | number>(0)
    const [imageUnMarkedDollar, setImageDollar] = useState(UnMarked)
    const [imageUnMarkedCarton, setImageUnMarkedCarton] = useState(UnMarked)

    let resultQuotationReal = 0
    let resultQuotation = 0
    const takeValueDollarInput = (event?: React.ChangeEvent<HTMLInputElement>) => {
        if (event?.target.value != undefined) {
            { setDollar(parseInt(event.target.value)) }
            if (!Number.isNaN(dollar)) {
                resultQuotationReal = (+dollar / +dollar) * +event?.target.value
                resultQuotation = +dollar / +dollar

                setquotationReal(resultQuotationReal)
                setquotation(resultQuotation)
            }
        }
    }

    let resultConversion = 0
    const takeValueRateInput = (event?: React.ChangeEvent<HTMLInputElement>) => {
        if (event?.target.value != undefined) {
            setRate(parseInt(event.target.value))
            setRateShareDate(Number(event.target.value))
        }

        if (dollar != undefined) {
            resultConversion = Number(dollar) * Number(event?.target.value)
            setConversion(resultConversion)
        }
    }

       function handleChangeImageMarkedDollar() {
        if (imageUnMarkedCarton === Marked || imageUnMarkedDollar === UnMarked) {
            setImageUnMarkedCarton(UnMarked)
            setImageDollar(Marked)
        }
    }

    function handleChangeImageMarked() {
        if (imageUnMarkedDollar === Marked || imageUnMarkedCarton === UnMarked) {
            setImageUnMarkedCarton(Marked)
            setImageDollar(UnMarked)
        }
    }

    function handlecreateNewCorversion() {
        takeValueDollarInput()
        takeValueRateInput()
    }

    return (
        <div>
            <MainDiv>
                <FormDiv>
                    <FormDolarContainer>
                        <a>Dólar</a>
                        <input
                            type='number'
                            placeholder="$ 1.00"
                            id="dollar"
                            onChange={takeValueDollarInput}
                            value={Number(dollar)}
                        ></input>
                    </FormDolarContainer>
                    <FormRateContainer>
                        <a>Taxa do estado</a>
                        <input
                            type='number'
                            placeholder="0%"
                            id='rate'
                            onChange={takeValueRateInput}
                            value={Number(rate)}
                        ></input>
                    </FormRateContainer>
                </FormDiv>
                <TypePurchase>tipo de compra</TypePurchase>
                <MethodPurchase>
                    <img 
                        src={imageUnMarkedDollar}
                        onClick={handleChangeImageMarkedDollar}>
                        ></img>
                    <Money>dinheiro</Money>
                    <img 
                        src={imageUnMarkedCarton}
                        onClick={handleChangeImageMarked}>
                        ></img>
                    <Card>cartão</Card>
                </MethodPurchase>
                <nav>
                    <NavLink to="/Results" title='Resultado do câmbio'>
                        <Converter
                            onClick={handlecreateNewCorversion}
                        >
                            <img src={Tranfer}></img>
                            Converter
                        </Converter>
                    </NavLink>
                </nav>
            </MainDiv>
            <Img>
                <EllipseContainer>
                    <Ellipse4 >
                        <Ellipse3 >
                            <Ellipse2>
                                <img src={Ellipse}></img>
                            </Ellipse2>
                        </Ellipse3>
                    </Ellipse4>
                </EllipseContainer>

                <DollarImage src={Mask}></DollarImage> 
            </Img>
        </div>
    )
}
