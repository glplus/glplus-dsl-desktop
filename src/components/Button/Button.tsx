import React, { MouseEvent } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Button as GLPButton,
  ButtonProps as GLPButtonProps, outlinedInputClasses,
} from '@mui/material';
import { IconButton as GLPIconButton } from '@mui/material';

import glplusAddGreen from '../../assets/images/glplus-add-green.svg';
import glplusAddOrange from '../../assets/images/glplus-add-orange.svg';

import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CheckIcon from '@mui/icons-material/Check';
import DevicesIcon from '@mui/icons-material/Devices';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/List';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PhoneIcon from '@mui/icons-material/Phone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SortIcon from '@mui/icons-material/Sort';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SummarizeIcon from '@mui/icons-material/Summarize';
import YouTubeIcon from '@mui/icons-material/YouTube';


const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: '#3DA026',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#F67A1A',
      // light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#47008F',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          alignItems: 'center',
          borderRadius: '50px',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'row',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          fontWeight: '500',
          justifyContent: 'center',
          minWidth:'100px',
          padding: '8px 20px',
          margin: 0
        },
        outlinedGreen: {
          border: '2px solid #3DA026',
          color: '#3DA026',
          height: '32px',
          minWidth:'50px',
        },
        outlinedOrange: {
          border: '2px solid #F67A1A',
          color: '#F67A1A',
          height: '32px',
        },
        registration: {
          borderRadius: '8px',
          backgroundColor: '#F67A1A',
          padding: '6px 16px',
        },
        text: {
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#3DA026',
            textDecoration: 'underline',
          },
          '&:active': {
            backgroundColor: 'transparent',
            color: '#3DA026',
            textDecoration: 'underline',
          },
          color: '#343434',
        },
        white: {
          color: '#000000',
          backgroundColor: '#ffffff',
          border: '1px solid #000',
          borderRadius: '4px',
          fontSize: '12px',
          gap: '3px',
          height: '32px',
          padding: '12px',
        }
      },

    },
  },
});

// Use all except disableRipple
type ButtonBaseProps = Omit<GLPButtonProps, 'loadingPosition' | 'component' | 'size'>;

enum EColor {
  custom = 'custom',
  primary = 'primary',
  secondary = 'secondary',
}

enum EIcons {
  add = 'add',
  addToList = 'addToList',
  arrowBack = 'arrowBack',
  cart = 'cart',
  check = 'check',
  devices = 'devices',
  facebook = 'facebook',
  favorite = 'favorite',
  favoriteOutlined = 'favoriteOutlined',
  filter = 'filter',
  glplusAddGreen= 'glplusAddGreen',
  help = 'help',
  home = 'home',
  howItWorks = 'howItWorks',
  info = 'info',
  linkedin = 'linkedin',
  list = 'list',
  location = 'location',
  messages = 'messages',
  mobile = 'mobile',
  phone = 'phone',
  pinterest = 'pinterest',
  plus = 'plus',
  recipe = 'recipe',
  recurring = 'recurring',
  search = 'search',
  settings = 'settings',
  shop = 'shop',
  sort = 'sort',
  subscription = 'subscription', // loyalty icon
  suggested = 'suggested',
  suggestedOutlined = 'suggestedOutlined',
  youtube = 'youtube',
}

enum ETextColor {
  primary = 'primary',
  secondary = 'secondary'
}

enum EVariant {
  contained = 'contained',
  iconButton = 'iconButton',
  outlinedGreen = 'outlinedGreen',
  outlinedOrange = 'outlinedOrange',
  registration = 'registration',
  text = 'text',
  white = 'white'
}

export interface ButtonProps extends ButtonBaseProps {
  ariaLabel: string;
  color: EColor | string;
  dataTestId?: string;
  disabled?: boolean;
  endIcon?: EIcons;
  fullWidth?: boolean;
  href?: string;
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: EIcons;
  textColor?: ETextColor | string;
  variant: EVariant;
}


const Button =({ariaLabel, color = 'primary', dataTestId, disabled = false, endIcon, fullWidth = false, href, label, onClick, startIcon, textColor, variant, ...rest }: ButtonProps) => {
  let colorString, iconString, textString;
  // check for custom color
  switch (color) {
    case 'primary':
      colorString = '#3DA026';
      break;
    case 'secondary':
      colorString = '#F67A1A';
      break;
    default:
      colorString = color;
      break;
  }

  switch (textColor) {
    case 'primary':
      textString = '#3DA026';
      break;
    case 'secondary':
      textString = '#0A75BF';
      break;
    default:
      textString = textColor;
      break;
  }

  switch (startIcon) {
    case 'add':
      iconString = <AddIcon
        color={textColor !== undefined ? textColor : '#ffffff'}
        style={{
          backgroundColor: colorString,
          color: '#ffffff',
          width: '40px',
          height: '40px',
          borderRadius: '50%'
        }}
      />
      break;
    case 'addToList':
      iconString = <PlaylistAddIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'arrowBack':
      iconString = <ArrowBackIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'cart':
      iconString = <ShoppingCartIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'check':
      iconString = <CheckIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'devices':
      iconString = <DevicesIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'facebook':
      iconString = <FacebookIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'favorite':
      iconString = <FavoriteIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'favoriteOutlined':
      iconString = <FavoriteBorderIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'filter':
      iconString = <FilterAltIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'glplusAddGreen':
      iconString = <img src={glplusAddGreen} />
      break;
    case 'glplusAddOrange':
      iconString = <img src={glplusAddOrange} />
      break;
    case 'help':
      iconString = <HelpOutlineIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'home':
      iconString = <HomeIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'howItWorks':
      iconString = <QuestionAnswerIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'info':
      iconString = <InfoIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'linkedin':
      iconString = <LinkedInIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'list':
      iconString = <ListIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'location':
      iconString = <LocationOnIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'messages':
      iconString = <ChatBubbleOutlineIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'mobile':
      iconString = <InstallMobileIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'phone':
      iconString = <PhoneIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'pinterest':
      iconString = <PinterestIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'plus':
      iconString = <AddIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'recipe':
      iconString = <SummarizeIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'recurring':
      iconString = <AutorenewIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'search':
      iconString = <SearchIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'settings':
      iconString = <SettingsIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'shop':
      iconString = <ShoppingBasketIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'sort':
      iconString = <SortIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'subscription':
      iconString = <LoyaltyIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'suggested':
      iconString = <StarIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'suggestedOutlined':
      iconString = <StarBorderIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    case 'youtube':
      iconString = <YouTubeIcon color={textColor !== undefined ? textColor : '#ffffff'} />
      break;
    default:
      iconString = ''
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      {variant === 'iconButton' ? (
        <GLPIconButton aria-label={ariaLabel}>
          {iconString}
        </GLPIconButton>
      ) : (
        <GLPButton
          {...rest}
          aria-label={ariaLabel}
          color={color}
          data-testid={dataTestId}
          disabled={disabled}
          fullWidth={fullWidth}
          startIcon={iconString}
          sx={{
            backgroundColor: variant === 'contained' ? colorString : '',
            color: variant === 'contained' || variant === 'text' ? textString : ''
          }}
          variant={variant}
        >
          {label}
        </GLPButton>
      )}

    </ThemeProvider>
  );
}

export default Button;
