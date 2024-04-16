import React from "react";

import Container from "react-bootstrap/Container";
import BreadCrumbComponent from "../../components/BreadCrumbComponent/BreadCrumbComponent";
import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

function ProductDetailPage() {
  return (
    <Container>
      <BreadCrumbComponent />

      <ProductDetailComponent />
    </Container>
  );
}

export default ProductDetailPage;
