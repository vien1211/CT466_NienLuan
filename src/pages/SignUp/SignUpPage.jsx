import React from 'react';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { ContainerLeft, ContainerRight, WrapperText } from "./style";
import {Image} from "antd";
import h1 from '../../assets/images/h1.png'
function SignUpPage() {
  const handleSignUp = () => {
    // Xử lý đăng nhập ở đây
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
    <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
      <ContainerLeft>
        <h2>Đăng ký</h2>
        <InputForm style={{marginBottom: '10px'}} placeholder="Nhập Email"/>
        <InputForm style={{marginBottom: '10px'}} placeholder="Nhập Mật Khẩu"/>
        <InputForm placeholder="Xác Nhận Mật Khẩu"/>
        <ButtonComponent
        size="large"
        styleButton={{
          background: '#007bff',
          height: '45px',
          width: '100%',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          margin: '26px 0 10px'
        }}
        onClick={handleSignUp}
        textButton="Đăng ký"
      />
      
          <p>Đã có tài khoản? <WrapperText> Đăng Nhập</WrapperText></p>
      </ContainerLeft>
      <ContainerRight>
        <Image src={h1} preview={false} alt="imglogo" />
      </ContainerRight>
      </div>  
    </div>
  );
}

export default SignUpPage;
