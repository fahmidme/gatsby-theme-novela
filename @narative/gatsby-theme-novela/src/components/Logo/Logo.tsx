import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";
import Image from '@components/Image';

import { Icon } from '@types';
import LogoImage from '@components/Assets/images/logo.png';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <Image style={{height: 110}} src={LogoImage} />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
