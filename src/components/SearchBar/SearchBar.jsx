import React from "react";

import InputForm from "../InputForm/InputForm";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function SearchBar(props) {
  const { size, placeholder, ariaLabel, variant, textButton } = props;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <InputForm
          type="search"
          placeholder={placeholder}
          aria-label={ariaLabel}
          size={size}
        />
      </div>

      <div style={{ marginLeft: "8px" }}>
        <ButtonComponent
          size={size}
          variant={variant}
          textButton={textButton}
        />
      </div>
    </div>
  );
}

export default SearchBar;
