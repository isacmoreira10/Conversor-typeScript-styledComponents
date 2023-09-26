import { Currency, Date, Description, HeaderContainer, PageDescription, SubTitle, Title } from './styles'
import Stone from '../../../assets/images/Stone.png'

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <Title>
                    <img src={Stone} />
                    <SubTitle>
                        <hr></hr>
                        <Currency>Currency</Currency>
                    </SubTitle>
                </Title>
                <PageDescription>
                    <Date>
                        <a>23 de setembro de 2023</a>
                        <span> |</span>
                        <a>19:47 UTC </a>
                    </Date>
                    <div>
                        <Description>Dados de câmbio disponibilizados pela Morningstar</Description>
                    </div>
                </PageDescription>
            </HeaderContainer>
        </div>
    )
} 