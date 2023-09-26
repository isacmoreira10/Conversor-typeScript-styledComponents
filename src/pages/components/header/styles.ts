import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    margin: 64px 64px ;

    img{
        height: 64px;
        width: 163px;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 48px;
`

export const SubTitle = styled.div`
    display: flex;

    hr{
        width: 83px;
        height: 4px;
        opacity: 0.32;
        background-color:${(props) => props.theme['stone-green']} ;
    }
`

export const Currency = styled.span`
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        color:${(props) => props.theme['stone-green']} ;
`

export const PageDescription = styled.div`
        margin-top: 20px;
`

export const Description = styled.a`
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
        color:${(props) => props.theme['medium-gray']};
`

export const Date = styled.div`
    margin-bottom:5px ;

        a {
            font-family: Roboto;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            color:${(props) => props.theme['dark-gray']};
         }   

        span{
            padding: 20px;
        }
`


