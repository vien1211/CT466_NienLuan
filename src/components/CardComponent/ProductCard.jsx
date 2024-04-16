import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import React from "react";
import {
  ProductListContainer,
  ProductTitle,
  ProductImage,
  ReportText,
  StarIcon,
  StarContainer,
  ProductPrice,
  CartButton,
  CartIcon,
  PriceAndCart,
} from "./style";

const ProductCard = ({ product }) => {

  return (
    
    <ProductListContainer>
      <Card style={{ width: "14rem" }}>
        <ProductImage variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <ReportText>
            <StarContainer>
              <span>{product.star}</span>
              <StarIcon className="material-symbols-outlined">grade</StarIcon>
            </StarContainer>
            <span>Đã bán {product.sold}</span>
          </ReportText>

          <PriceAndCart>
            <ProductPrice>{product.price}</ProductPrice>
            <CartButton variant="outline-success">
              <CartIcon className="material-symbols-outlined">
                local_mall
              </CartIcon>
            </CartButton>
          </PriceAndCart>
        </Card.Body>
      </Card>
    </ProductListContainer>
    

    
  );
};

export default ProductCard;
