import React from "react";
import { Menu, Select, Rate } from "antd";
import {PieChartOutlined, AppstoreOutlined, DollarOutlined, CommentOutlined} from '@ant-design/icons';
import styled from "styled-components";
import { StyledMenu } from "./style";
const { Option } = Select;


const SideMenu = () => {
  const handleMenuClick = (e) => {
    console.log("click ", e);
  };

  return (
    <StyledMenu
      onClick={handleMenuClick}
      style={{ width: 280 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.ItemGroup key="group1" title={<span><PieChartOutlined /> Loại Sản Phẩm</span>}>
        <Select
          mode="multiple"
          style={{ width: "90%", marginBottom: "10px" }}
          placeholder="Chọn loại sản phẩm"
        >
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Menu.ItemGroup>
      <hr />
      <Menu.ItemGroup key="group2" title={<span><AppstoreOutlined /> Thương hiệu</span>} >
        <Select
          mode="multiple"
          style={{ width: "90%", marginBottom: "10px" }}
          placeholder="Chọn thương hiệu"
        >
          <Option value="1">Brand 1</Option>
          <Option value="2">Brand 2</Option>
          <Option value="3">Brand 3</Option>
        </Select>
      </Menu.ItemGroup>
      <hr />
      <Menu.ItemGroup key="group3" title={<span><DollarOutlined /> Giá</span>}>
        <Select
          mode="multiple"
          style={{ width: "90%", marginBottom: "10px" }}
          placeholder="Chọn giá"
        >
          <Option value="1">Từ thấp đến cao</Option>
          <Option value="2">Từ cao đến thấp</Option>
        </Select>
      </Menu.ItemGroup>
      <hr />
      <Menu.ItemGroup key="group3" title={<span><CommentOutlined /> Đánh Giá</span>}>
      <Rate allowHalf defaultValue={2.5} />
      </Menu.ItemGroup>
      <hr />
    </StyledMenu>
  );
};

export default SideMenu;
