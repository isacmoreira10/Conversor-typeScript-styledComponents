import { Currency, Date, Description, HeaderContainer, PageDescription, SubTitle, Title } from './styles'
import Stone from '../../../assets/images/Stone.png'
import { format } from 'date-fns'

export function Header() {
    const currentDate = format(new window.Date(), "dd-MM-yyyy");
    const currentHour = format(new window.Date(), "HH:mm")
    
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
                        <a>{currentDate}</a>
                        <span> |</span>
                        <a>{currentHour} BR</a>
                    </Date>
                    <div>
                        <Description>Dados de câmbio disponibilizados pela Morningstar</Description>
                    </div>
                </PageDescription>
            </HeaderContainer>
        </div>
    )
} 
