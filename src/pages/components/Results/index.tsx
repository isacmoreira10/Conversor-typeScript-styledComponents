import { DescriptionPurchase, Ellipse2, Ellipse3, Ellipse4, EllipseContainer, Img, ResultsContainer, ResultsConvertion, Text } from "./styles";
import { ArrowLeft } from 'phosphor-react'
import Ellipse from '../../../assets/images/Ellipse 2.png'
    import Mask from '../../../assets/images/Mask.png'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ConversionContext } from "../../../context/Context";

export function Results() {
    const { conversion, rateShareDate, quotation, quotationReal } = useContext(ConversionContext)

    return (
        <div>
            <ResultsContainer>
                <nav>
                    <NavLink to="/" title="Tela inicial">
                        <button>
                            <ArrowLeft size={24}
                                className="icon">
                            </ArrowLeft>
                            Voltar
                        </button>
                    </NavLink>
                </nav>

                <Text>O resultador da conversão é:</Text>
                <ResultsConvertion>R$ {Number(conversion)},00</ResultsConvertion>
                <DescriptionPurchase> compra no dinheiro a taxa é {Number(rateShareDate)}%</DescriptionPurchase>
                <DescriptionPurchase> Cotação do dólar: ${Number(quotation)} = R$ {Number(quotationReal)}</DescriptionPurchase>
            </ResultsContainer>
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
