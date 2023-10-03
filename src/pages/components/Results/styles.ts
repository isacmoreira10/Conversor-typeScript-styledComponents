import styled from "styled-components";


export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    margin-left: 64px;

    button{
        display:flex;
        align-items: center;
        width: 120px;
        height:56px;
        padding: 16px;
        border-radius:8px;
        margin-bottom: 32px;

        font-family: Sharon Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        
        border:1px solid ${(props) => props.theme['medium-gray-3']};
        background:${(props) => props.theme['white']};
        color:${(props) => props.theme['dark-gray']};
        box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);

        .icon{
            margin-right: 16px;
            color:${(props) => props.theme['medium-gray-2']};
        }
}
`
export const Text = styled.a`
    font-family: Sharon Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;

    margin-bottom: 8px;

    color:${(props) => props.theme['dray-gray-2']};
`

export const ResultsConvertion = styled.span`
    font-family: Sharon Sans;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;

    margin-bottom: 32px;

    color:${(props) => props.theme['stone-green']};
`

export const DescriptionPurchase = styled.a`
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;

    color:${(props) => props.theme['dark-gray']};
`

export const DescriptionCotation = styled.a`
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;

    color:${(props) => props.theme['dark-gray']};
`

export const Img = styled.div`
   display: block;
`

export const EllipseContainer = styled.div`
        margin-top: -350px;
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
        margin-top: -480px;
        margin-left: 70px;
`
