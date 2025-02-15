import React, { MouseEvent } from 'react';
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import glp_logo_full_primary from '../../../assets/images/glp_logo_full_primary.png';
import glp_logo_full_white from '../../../assets/images/glp_logo_full_white.png';
import glp_logo_full_black from '../../../assets/images/glp_logo_full_black.png';

/*
  Description:  Logo used throughout the app

  Props:
    Required:
      color - primary, white, black
      hasLink - true or false
      size - full, partial
    Optional:
      onClick - function

 */

enum EColorOptions {
  black = 'black',
  primary = "primary",
  white = 'white'
}

enum ESizeOptions {
  large = 'large',
  medium = 'medium',
  small = 'small'
}

enum EStyleOptions {
  full ='full',
  partial = 'partial'
}

interface LogoProps {
  color: EColorOptions;
  hasLink: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size: EStyleOptions;
}

const Logo = ({ color, hasLink = false, onClick, size }: LogoProps) => {
  const { t } = useTranslation();
  const altText = t("component.logo.altText.default")

  return (
    <>
      <div>
        <img src={glp_logo_full_primary} alt={altText} />
      </div>

      <div>
        {t("component.logo.altText.default")}
      </div>
    </>
  )
}

export default Logo;
