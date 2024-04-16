import React from 'react';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { ContainerLeft, ContainerRight, WrapperText } from "./style";
import {Image} from "antd";
import h1 from '../../assets/images/h1.png'
function SignInPage() {
  const handleSignIn = () => {
    // Xử lý đăng nhập ở đây
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
    <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
      <ContainerLeft>
        <h2>Đăng nhập</h2>
        <InputForm style={{marginBottom: '10px'}} placeholder="1111"/>
        <InputForm placeholder="1111"/>
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
        onClick={handleSignIn}
        textButton="Đăng nhập"
      />
      <p><WrapperText>Quên mật khẩu?</WrapperText></p>
          <p>Chưa có tài khoản? <WrapperText> Tạo tài khoản</WrapperText></p>
      </ContainerLeft>
      <ContainerRight>
        <Image src={h1} preview={false} alt="imglogo" />
      </ContainerRight>
      </div>  
    </div>
  );
}

export default SignInPage;
