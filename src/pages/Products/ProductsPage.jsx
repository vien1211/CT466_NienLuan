
import React from 'react';
import Container from "react-bootstrap/Container";
import SideMenu from "../../components/SideMenuComponent/SideMenu";
import ProductCard from "../../components/CardComponent/ProductCard";

import {
  ProductListContainer,
  ProductItem,
  ProductTitle,
} from "../../components/CardComponent/style";

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://mernstore-bucket.s3.us-east-2.amazonaws.com/mbp-spacegray-select-202011_GEO_US.jpeg",
    price: "100.000 VNĐ",
    sold: "255",
    star: "5.0",
  },

  {
    id: 2,
    name: "Product 2",
    image:
      "https://mernstore-bucket.s3.us-east-2.amazonaws.com/mbp-spacegray-select-202011_GEO_US.jpeg",
    price: "100.000 VNĐ",
    sold: "255",
    star: "5.0",
  },

  {
    id: 3,
    name: "Product 3",
    image:
      "https://mernstore-bucket.s3.us-east-2.amazonaws.com/mbp-spacegray-select-202011_GEO_US.jpeg",
    price: "100.000 VNĐ",
    sold: "255",
    star: "5.0",
  },

  {
    id: 4,
    name: "Product 4",
    image:
      "https://mernstore-bucket.s3.us-east-2.amazonaws.com/mbp-spacegray-select-202011_GEO_US.jpeg",
    price: "100.000 VNĐ",
    sold: "255",
    star: "5.0",
  },

];

const ProductsPage = () => {
  return (
    <Container>
      <div style={{ display: "flex"}}>
        {/* SideMenu */}
        <SideMenu />
        {/* Danh sách sản phẩm */}
        <ProductListContainer style={{ margin: "1.75em"}}>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ProductCard product={product} />
            </ProductItem>
          ))}
        </ProductListContainer>

      </div>
    </Container>
  );
};

export default ProductsPage;
