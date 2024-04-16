import React from "react";
import styled from "styled-components";
import { HeaderInfo, HeaderInfoText } from "./style";


const HeaderComponent = () => {
  return (
    <header>
      <HeaderInfo>
        <HeaderInfoText text-center col-md-4>
          <span
            class="material-symbols-outlined"
            style={{ marginRight: "8px" }}
          >
            local_shipping
          </span>
          Miễn Phí Vận Chuyển
        </HeaderInfoText>

        <HeaderInfoText text-center col-md-4>
          <span
            class="material-symbols-outlined"
            style={{ marginRight: "8px" }}
          >
            credit_card
          </span>
          Thanh Toán Tiện Lợi
        </HeaderInfoText>

        <HeaderInfoText text-center col-md-4>
          <span
            class="material-symbols-outlined"
            style={{ marginRight: "8px" }}
          >
            call
          </span>
          Liên hệ: (+84) 776 812 012
        </HeaderInfoText>

        <ResponsiveHeaderInfoText text-center col-12>
          <span
            class="material-symbols-outlined"
            style={{ marginRight: "8px" }}
          >
            call
          </span>
          Hãy Liên hệ với chúng tôi
        </ResponsiveHeaderInfoText>
      </HeaderInfo>
    </header>
  );
};

const ResponsiveHeaderInfoText = styled(HeaderInfoText)`
  display: none;

  @media (max-width: 767px) {
    display: flex;
  }
`;

export default HeaderComponent;
