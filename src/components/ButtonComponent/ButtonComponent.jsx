import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({ size, variant, textButton, styleButton, disabled, icon, ...rests }) => {
  return (
    <Button
    style={{
      ...styleButton,
      //background: disabled ? '#ccc' : styleButton.background
    }}
      size={size} 
      variant={variant}
      {...rests}
      >
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
