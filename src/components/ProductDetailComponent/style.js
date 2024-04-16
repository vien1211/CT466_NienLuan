import { Image, Col, Row, InputNumber } from "antd";
import styled from "styled-components";

export const ProductDetail = styled(Col)`
    font-family: 'poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
` 
export const StyleImgSmall = styled(Image)`
    height: 65px;
    width: 65px;
    
`;
export const StyleColImgSmall = styled(Col)`
    flex-basics: unset;
    display: flex;
`
export const StyleNameProduct = styled.h1`
    color: rgb(36, 36, 36);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    word-break: break-word;
`
export const StyleNameBrand = styled.h2`
    color: rgb(36, 36, 36);
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
`

export const StyleDescription = styled.h2`
    color: rgb(36, 36, 36);
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`

export const PriceProduct = styled.div`
    //background: rgb(250, 250, 250);
    border-radius: 4px;
`

export const PriceTextProduct = styled.h1`
    font-size: 24px;
    line-height: 40px;
    margin-right: 8px;
    font-weight: 500;
    padding: 10px;
    margin-top: 10px;
`

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsisl
    };
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
    }
`

export const QualityProduct = styled.div`
    //display: flex;
    gap: 4px;
    align-items: center;
    width: 120px;
    //border: 1px solid #ccc;
    //border-radius: 4px;
`

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width: 40px;
        border-top: none;
        border-bottom: none;
        .ant-input-number-handler-wrap {
            display: none !important;
        }
    };
`