import React, { useState } from "react";
import { Row, Col, Image, Button, Space } from "antd";

import { ShoppingOutlined, CheckOutlined } from "@ant-design/icons";
import {
  PlusOutlined,
  MinusOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";

import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {
  ProductDetail,
  StyleImgSmall,
  StyleColImgSmall,
  StyleNameProduct,
  StyleNameBrand,
  StyleDescription,
  WrapperStyleTextSell,
  PriceProduct,
  PriceTextProduct,
  WrapperAddressProduct,
  QualityProduct,
  WrapperInputNumber,
  WrapperBtnQualityProduct,
} from "./style";

const ProductDetailComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalSold, setTotalSold] = useState(1000); // Tổng số lượng đã bán, bạn có thể thay đổi giá trị này
  const [sold, setSold] = useState(0); // Số lượng đã bán của sản phẩm này

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Hàm xử lý khi nhấn nút Thêm vào giỏ hàng
  const addToCart = () => {
    // Xử lý logic khi thêm sản phẩm vào giỏ hàng ở đây
    // Ví dụ: cập nhật giỏ hàng, hiển thị thông báo thành công, vv.

    // Tăng số lượng đã bán của sản phẩm này
    setSold(sold + quantity);
    // Cập nhật tổng số lượng đã bán
    setTotalSold(totalSold + quantity);
    // Reset số lượng chọn về 1
    setQuantity(1);
  };

  const buyNow = () => {
    // Xử lý logic khi nhấn nút Mua ngay ở đây
  };

  // Giả sử bạn có một số liệu đánh giá trung bình của sản phẩm
  const averageRating = 4.5; // Đây là số sao trung bình

  // Tạo một mảng chứa các số sao dựa vào số sao trung bình
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= averageRating) {
      stars.push(<StarFilled key={i} style={{ color: "#FFD700" }} />);
    } else {
      stars.push(<StarOutlined key={i} style={{ color: "#FFD700" }} />);
    }
  }

  return (
    <div>
      <Row style={{ padding: "16px", display: "flex" }}>
        <Col span={10} style={{ paddingRight: "20px" }}>
          <Image
            src="https://mernstore-bucket.s3.us-east-2.amazonaws.com/mbp-spacegray-select-202011_GEO_US.jpeg"
            alt="imageProduct"
            preview={true}
          />

          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            {[1, 2, 3, 4, 5].map((index) => (
              <StyleColImgSmall key={index} span={4}>
                <StyleImgSmall
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh9xkr2dkveb86"
                  alt={`Image Small ${index}`}
                  preview={false}
                />
              </StyleColImgSmall>
            ))}
          </Row>
        </Col>

        <ProductDetail span={14} style={{ paddingLeft: "20px" }}>
          <StyleNameProduct>Tên sản phẩm</StyleNameProduct>
          <PriceProduct>
            <PriceTextProduct>Giá: 100.000 VNĐ</PriceTextProduct>
          </PriceProduct>
          <Row
            style={{ marginTop: "10px", display: "flex", alignItems: "center" }}
          >
            <Col>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "5px" }}>
                  {stars}
                  <span style={{ marginLeft: "5px", color: "#666" }}>
                    ({averageRating.toFixed(1)})
                  </span>
                </div>
              </div>
            </Col>
            <Col flex="auto">
              <div> Đã bán: {sold}</div>
            </Col>
          </Row>

          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">1234567</span> -
            <span className="change-address">Đổi địa chỉ</span>
          </WrapperAddressProduct>
          <StyleDescription>Mô tả sản phẩm</StyleDescription>
          <StyleNameBrand>Thương hiệu: ABC</StyleNameBrand>

          <div
            style={{
              margin: "10px 0 20px",
              padding: "10px 0",
            }}
          >
            <div style={{ marginBottom: "10px" }}>Số lượng: </div>
            <QualityProduct>
              <div>
                <button
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                  onClick={decreaseQuantity}
                >
                  <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
                </button>
                <span style={{ margin: "0 8px" }}>{quantity}</span>
                <button
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                  onClick={increaseQuantity}
                >
                  <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
                </button>
              </div>
            </QualityProduct>
          </div>

          <div>
            <Space>
              <Button
                type="primary"
                icon={<ShoppingOutlined />}
                size="large"
                style={{
                  fontFamily: "poppins, sans-serif",
                  background: "#EE204E",
                  height: "45px",
                  width: "220px",
                  border: "none",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
                onClick={addToCart}
              >
                Thêm vào giỏ hàng
              </Button>

              <ButtonComponent
                size="large"
                styleButton={{
                  background: "white",
                  height: "45px",
                  width: "150px",
                  border: "2px solid #007bff",
                  borderRadius: "8px",
                  color: "#007bff",
                }}
                onClick={buyNow}
                textButton="Mua Ngay"
              />
            </Space>
          </div>
        </ProductDetail>
      </Row>
    </div>
  );
};

export default ProductDetailComponent;
