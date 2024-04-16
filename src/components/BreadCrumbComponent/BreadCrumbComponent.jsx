import React from "react";
import { Breadcrumb } from "antd";

function BreadCrumbComponent() {
  const items = [
    { label: "Home", link: "/" },
    { label: "Category", link: "/category" },
    { label: "Subcategory", link: "/category/subcategory" },
    { label: "Current Page", link: "#" },
  ];
  return (
    <div>
      <Breadcrumb separator=">">
        {items.map((item, index) => (
          <Breadcrumb.Item key={index} href={item.link}>
            {item.label}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumbComponent;
