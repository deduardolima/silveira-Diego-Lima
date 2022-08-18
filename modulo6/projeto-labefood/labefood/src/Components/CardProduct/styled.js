import styled from "styled-components";


export const ContainerCardProduct = styled.div`
    width: 100%;
    
    margin: 0.5rem 0;
    display: flex;
    border: solid 1px grey;
    border-radius: 7px;
`

export const ImageProduct = styled.img`
    width: 6rem;
    height: 7.3rem;    
    border-radius: 7px;
`
export const QuantityProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px red;
    width: 2.063rem;
    height: 2.063rem;
    border-radius: 8px 0 8px 0;
    color: white;
    background-color: red;
`
export const BoxNameQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    
`

export const NameProduct = styled.h3`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.39px;
    color: #e8222e;
    margin-left: 1.5rem;
    padding-bottom: 0.25rem;
    padding-top: 1rem;
    margin-top: -0.3rem;
`
export const BoxInform = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
`
export const InformDescription = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.39px;
    color: grey;
    padding: 0.25rem 0;
    margin-left: 1.5rem;
    margin-top: -0.5rem;
    flex-grow: 1;
`
export const BoxInformPriceButton = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

`
export const InformPrice = styled.p`
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.39px;
    color: #000000;
    margin-left: 1.5rem;
    margin-top: -0.3rem;
`

export const InformAddButton = styled.button`
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    outline: 0;
    border: 1.5px black solid;
`
export const InformRemoveButton = styled(InformAddButton)`
    border: 1px red solid;
    color: white;
    background: red;
   
`
export const Hr = styled.div`
    background: black;
    width: 100%;
    height: 1px;
    margin: 5px auto;
`
