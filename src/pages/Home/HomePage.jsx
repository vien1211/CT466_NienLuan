import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CarouselSlider from "../../components/CarouselSlider/CarouselSlider";
import ProductCard from "../../components/CardComponent/ProductCard";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import {
  ProductListContainer,
  ProductItem,
  ProductTitle,
} from "../../components/CardComponent/style";
const images = [
  "https://mern-store-gold.vercel.app/images/banners/banner-3.jpg",
  "https://mern-store-gold.vercel.app/images/banners/banner-2.jpg",
];
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
      "https://mernstore-bucket.s3.us-east-2.amazonaws.com/pexels-ready-made-3987280.jpg",
    price: "100.000 VNĐ",
    sold: "200",
    star: "5.0",
  },

  {
    id: 3,
    name: "Product 3",
    image:
      "https://locphuc.com.vn/Content/Images/072023/DFH0109BRW.WG01A/nhan-kim-cuong-DFH0109BRW-WG01A-g1.jpg",
    price: "100.000 VNĐ",
    sold: "150",
    star: "5.0",
  },

  {
    id: 4,
    name: "Product 4",
    image:
      "https://locphuc.com.vn/Content/Images/072023/DFH0109BRW.WG01A/nhan-kim-cuong-DFH0109BRW-WG01A-g1.jpg",
    price: "100.000 VNĐ",
    sold: "1000",
    star: "5.0",
  },

  {
    id: 5,
    name: "Product 4",
    image:
      "https://locphuc.com.vn/Content/Images/072023/DFH0109BRW.WG01A/nhan-kim-cuong-DFH0109BRW-WG01A-g1.jpg",
    price: "100.000 VNĐ",
    sold: "1000",
    star: "5.0",
  },
  
];


const HomePage = () => {
  return (
    <div>
      <Container>
        <CarouselSlider images={images} />
        <ProductTitle>Sản Phẩm Gợi Ý</ProductTitle>
        <ProductListContainer>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ProductCard product={product} />
            </ProductItem>
          ))}
        </ProductListContainer>
        <div style={{ display: "flex", justifyContent: "center", fontFamily: "poppins, sans-serif" }}>
        <ButtonComponent
            size="md"
            variant="success"
            textButton="Xem thêm"
          />
        </div>
        
      </Container>
    </div>
  );
};

export default HomePage;
