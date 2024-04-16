import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import BrandProduct from "./BrandProduct"; // Import component Brand

const BrandsDropdown = ({ brands }) => {
  return (
    <NavDropdown title="Brands" id="brands-dropdown">
      {brands.map((brand, index) => (
        <NavDropdown.Item key={index}>
          <BrandProduct name={brand.name} logoUrl={brand.logoUrl} />
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default BrandsDropdown;
