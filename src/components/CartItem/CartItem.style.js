import styled from "styled-components";

export const CartTr = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid rgb(228, 228, 228);
`

export const CartTd = styled.div`
    display: table-cell;
    height: 74px;
    line-height: 24px;
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
`

export const DeleteButton = styled.button`
    display: inline-block;
    min-width: 90px;
    height: 40px;
    background-color: white;
    border: solid 0.5px #474646;
    margin-left: 45px;
`

export const CartImage = styled.img`
    margin: 3px 25px 0px 25px;
    width: 110px;
    height: 110px;
    object-fit: cover;
`

export const CartInfoDiv = styled.a`
    text-decoration: none;
    color: black;
    display: flex;
`