import React, { MouseEvent } from 'react';
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import Box from '@mui/system/Box';

import glp_logo_full_primary from '../../../assets/images/glp_logo_full_primary.png';
import glp_logo_full_white from '../../../assets/images/glp_logo_full_white.png';
import glp_logo_full_black from '../../../assets/images/glp_logo_full_black.png';
import glp_logo_full_mixed from '../../../assets/images/glp_logo_full_mixed.png';
import glp_logo_partial_primary from '../../../assets/images/glp_logo_partial_primary.png';
import glp_logo_partial_white from '../../../assets/images/glp_logo_partial_white.png';
import glp_logo_partial_black from '../../../assets/images/glp_logo_partial_black.png';

enum EColorOptions {
  black = 'black',
  mixed = 'mixed',
  primary = "primary",
  white = 'white'
}

enum ESizeOptions {
  desktop = 'desktop',
  tablet = 'tablet',
  mobile = 'mobile'
}

enum EStyleOptions {
  full = 'full',
  partial = 'partial'
}

interface LogoProps {
  color: EColorOptions | string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size: ESizeOptions | string;
  style: EStyleOptions | string;
}

const Logo = ({ color = 'primary', onClick, size = 'desktop', style = 'full' }: LogoProps) => {
  const { t } = useTranslation();
  const altText = t("component.logo.altText.default")

  let imgWidth, selectedImage;

  if (style === 'partial') {
    switch (color) {
      case 'black':
        selectedImage = glp_logo_partial_black;
        break;
      case 'primary':
        selectedImage = glp_logo_partial_primary;
        break;
      case 'white':
        selectedImage = glp_logo_partial_white;
        break;
      default:
        selectedImage = glp_logo_partial_primary;
        break;
    }
  } else {
    switch (color) {
      case 'black':
        selectedImage = glp_logo_full_black;
        break;
      case 'mixed':
        selectedImage = glp_logo_full_mixed;
        break;
      case 'primary':
        selectedImage = glp_logo_full_primary;
        break;
      case 'white':
        selectedImage = glp_logo_full_white;
        break;
      default:
        selectedImage = glp_logo_full_primary;
        break;
    }
  }

  switch (size) {
    case 'desktop':
      imgWidth = style === 'full' ? '300px' : '65px';
      break;
    case 'tablet':
      imgWidth = style === 'full' ? '300px' : '65px';
      break;
    case 'mobile':
      imgWidth = style === 'full' ? '250px' : '65px';
      break;
    default:
      imgWidth = style === 'full' ? '300px' : '65px';
      break;
  }


  return (
    <Box onClick={() => onClick}>
        <img src={selectedImage} alt={altText} style={{ width: imgWidth }} />
    </Box>
  )
}

export default Logo;
