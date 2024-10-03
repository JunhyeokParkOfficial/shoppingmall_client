import styled from "styled-components";

export const DetailContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 72px;
    width: 1024px;
`

export const SimpleBox = styled.div`
    height: 500px;
`    
export const ImageDiv = styled.div`
    float: left;
    width: 40%;
`

export const InfosDiv = styled.div`
    margin-left: 10%;
    float: right;
    width: 50%;
`

export const NameDiv = styled.div`
    height: 50px;
    margin-top: 18px;
    padding-left: 15px;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -0.5px;
    border-bottom: 2px solid #e0e0e0;
`

export const InfoDiv = styled.div`
    height: 40px;
    padding-top: 20px;
    border-bottom: 1px solid #e0e0e0;
`

export const InfoTitleSpan = styled.span`
    display: inline-block;
    width: 95px;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Noto Sans KR', sans-serif;
    margin-left: 15px;
    color: #808080;
`

export const InfoSpan = styled.span`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Lato', sans-serif;
    color: #808080;
`

export const CountDiv = styled.div`
    margin-top: 20px;
    margin-bottom: 80px;
    margin-left: 15px;
    display: flex;
    align-items: center;
`

export const CountButtonDiv = styled.div`
    display: inline-block;
    width: 35px;
    height: 30px;
    text-align: center;
    padding-top: 7px;
    border: #808080 0.5px solid;
`

export const CountTitleDiv = styled.div`
    display: inline-block;
    width: 53px;
    font-size: 19px;
`

export const TotalPriceDiv = styled.div`
    height: 90px;
    margin-top: 120px;
    align-items: center;
`

export const TotalPriceTitleDiv = styled.div`
    font-size: 23px;
    font-weight: 400;
    text-align: left;
    color: #0d0d0d;
    float: left;
    margin: 10px 0px 0px 15px;
`

export const TotalPriceSpan = styled.span`
    font-size: 35px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    float: right;
    color: #d92525;
    margin-right: 15px;
`

export const CartAndPurchaseDiv = styled.div`
    display: block;
`

export const CartButton = styled.div`
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    font-family: "Noto Sans KR",sans-serif;
    width: 245px;
    height: 60px;
    border: #000 1px solid;
    float: left;
`

export const PurchaseButton = styled.div`
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    font-family: "Noto Sans KR",sans-serif;
    width: 245px;
    height: 60px;
    border: #000 1px solid;
    float: right;
    background-color: black;
    color: white
`
export const DetailBoxDiv = styled.div`
    margin-top: 80px;
`

export const DetailDiv = styled.div`
    margin-top: 30px;
`
export const PopupDiv = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
    width: 290px;
    height: 150px;
    border: solid black 1px;
    position: absolute;
    top: 30%;
    left: 50%;
    padding: 10px 10px 10px;
    min-width: 300px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 50%) 20px 20px 80px 0px;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    transition: all 100ms ease-in 0s;
`

export const CloseButtonDiv = styled.div`
display: flex;
  justify-content: flex-end;
    height: 40px;
`

export const PopupCloseButton = styled.button`
    cursor: pointer;
    background-color: white;
    border: none;
    font-size: 20px;
`

export const NavigateCartA = styled.a`
    text-decoration: none;
    margin: 24px auto 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    max-width: 161px;
    border: 1px solid rgb(212, 212, 212);
    border-radius: 2px;
    font-size: 14px;
    color: rgb(93, 93, 93);
    background-color: rgb(255, 255, 255);
    line-height: 40px;
`