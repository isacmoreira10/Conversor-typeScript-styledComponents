import styled from "styled-components";


export const MainDiv = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    margin-left: 64px;
    margin-top: 100px;
`

export const FormDiv = styled.div`
    display: flex;
    margin-bottom:32px;

    a{
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        margin-bottom: 10px;

        color:${(props) => props.theme['dark-gray']}
    }

    input{
        width: 168px;
        height: 56px;
        padding: 16px;
        border-radius:4px;

        box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
        border:1px solid ${(props) => props.theme['medium-gray']};
        background:${(props) => props.theme['white']};

    }
`

export const FormDolarContainer = styled.div`
    display: flex;
    flex-direction: column; 

    margin-right: 24px;
`

export const FormRateContainer = styled.div`
     display: flex;
    flex-direction: column;
`
export const Converter = styled.button`
    display: flex;
    border-radius:8px ;
    width: 149px;
    height: 56px;
    padding: 16px;

    border: 1px solid ${(props) => props.theme['green-primary']};
    background: ${(props) => props.theme['medium-gray-2']};

        img{
            width: 24px;
            height: 24px;
            margin-right: 16px;
        }

        a{
            font-family: Sharon Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
        
            color:${(props) => props.theme['white']};
        }
`

export const Money = styled.a`
    font-family: Sharon Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-right:8px ;    

    color:${(props) => props.theme['white']}
`

export const Card = styled.a`
     font-family: Sharon Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin-right:8px ;

    color:${(props) => props.theme['white']}
`

export const TypePurchase = styled.span`
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        
        margin-bottom: 16px;

        color:${(props) => props.theme['dark-gray']}
`

export const MethodPurchase = styled.div`
        display: flex;
        margin-bottom: 32px;

        img{
            margin-right: 8px;
            width: 24px;
            height: auto;
        }

        a{
            font-family: Circular Std;
            font-size: 16px;
            font-style: normal;
            font-weight: 450;
            line-height: 24px;

            color:${(props) => props.theme['dark-gray']};
        }
`

export const Img = styled.div`
   display: block;
`

export const EllipseContainer = styled.div`
        margin-top: -370px;
        margin-left: 859px;
`

export const Ellipse4 = styled.div`
        display: flex;
        align-items: center;

        width: 310px;
        height: 310px;
        border-radius: 50%;
        opacity: 0.9;
        border: 4px solid ;
        border-color: ${(props) => props.theme['green-secondary']};
`

export const Ellipse3 = styled.div`
        display: flex;
        align-items: center;
        margin: 44px 48px;

        width: 213px;
        height: 213px;
        border-radius:50%;
        opacity: 0.7;
        border:4px solid  ;
        border-color:${(props) => props.theme['green-primary']};
`

export const Ellipse2 = styled.div`
        display: flex;
        align-items: center;
        margin:55px 55px;

        width: 104px;
        height: 104px;
        border-radius: 50%;
        border: 4px solid; 
        border-color:${(props) => props.theme['green-secondary']};

        img{
            margin:34px 34px;
        }
           
`

export const DollarImage = styled.img`
         display: block;

        width: 1442px;
        height: 720px; 
        margin-top: -490px;
        margin-left: 70px;
`
