import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3.5px;
  white-space: nowrap;
  font-family: 'poppins', sans-serif;
  font-weight: 400;
  align-items: center;
  justify-content: center; 

  // @media (max-width: 1200px) {
  //   justify-content: space-around;
  // }

  // @media (max-width: 992px) {
  //   justify-content: center;
  // }

  // @media (max-width: 768px) {
  //   justify-content: flex-start;
  // }
`;

export const ProductItem = styled.div`
  
  width: 235px;
  margin-bottom: 20px;
  transition: transform 0.3s;
  object-fit: contain;
  // @media (max-width: 1200px) {
  //   width: calc(20% - 10px);
  // }

  // @media (max-width: 992px) {
  //   width: calc(33.33% - 10px);
  // }

  // @media (max-width: 768px) {
  //   width: calc(50% - 10px);
  // }

  // @media (max-width: 576px) {
  //   width: calc(100% - 10px);
  // }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    transform: scale(1.05); 
  }
  cursor: pointer;
`;

export const ProductTitle = styled.h2`
  margin-bottom: 20px;
  font-family: 'poppins', sans-serif;
  font-weight: 400;
  text-align: center;
`;

export const ProductPrice = styled(Card.Text)`
  margin-top: 5px;
  font-size: 20px;
`;

export const ReportText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 25%;
  align-items: center;
  
`;

export const ProductImage = styled(Card.Img)`
  width: 100%;
  height: 250px;
  object-fit: contain;
`;

export const StarIcon = styled.span`
  color: #FFD700;
  margin-right: 5px;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CartButton = styled(Button)`
  
  border-radius: 50%;
  margin-left: 12px;
  font-size: 14px;
  height: 3.2em;
  width: 3.2em;
`;

export const CartIcon = styled.i`
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const PriceAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  
`;