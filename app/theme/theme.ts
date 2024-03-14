import { createTheme } from "@shopify/restyle";
import { Size } from "./size";
import { Typography } from "./typography";

//PALETTE
const palette = {
  purplePrimary: "#562785",
  purplePrimaryTransparent: "rgba(86, 39, 133, 0.9)",
  purpleFromBackgroundImage: "#642b78",
  blueDark: "#241D2D",
  yellowPrimary: "#F5BD20",

  redBordeaux: "#FB222D",

  white: "#F0F2F3",
  grey: "#939597",
  offWhite: "#DDD",
  success: "green",
  black: "#0B0B0B",
  offBlack: "#252525",
  transparent: "transparent",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primary: palette.purplePrimary,
    primaryTransparent: palette.purplePrimaryTransparent,
    purpleFromBackgroundImage: palette.purpleFromBackgroundImage,
    primaryDark: palette.blueDark,
    primaryYellow: palette.yellowPrimary,
    secondary: palette.grey, //grey
    error: palette.redBordeaux,
    success: palette.success,
    white: palette.white,
    black: palette.black,
    offWhite: palette.offWhite,
    offBlack: palette.offBlack,
    text: palette.blueDark,
    textPrimaryColor: palette.purplePrimary,
    transparent: palette.transparent,
  },
  spacing: {
    none: "0%",
    xxs: "1%",
    xs: "2%",
    s: "4%",
    m: "8%",
    l: "16%",
    xl: "32%",
    xxl: "40%",
  },
  sizes: {
    ...Size.DIMENSIONS,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  borderRadii: {
    none: 0,
    xxs: 4,
    xs: 8,
    sm: 16,
    md: 45,
    lg: 64,
    hg: 128,
  },
  textVariants: {
    ...Typography,
    button: {
      ...Typography.button,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    },
    defaults: {
      fontSize: 12,
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: "primary",
      color: "white",
    },
    secondary: {
      backgroundColor: "secondary",
      color: "white",
    },
    tertiary: {
      backgroundColor: "secondary",
      color: "black",
      borderColor: "secondary",
    },
    outlined: {
      backgroundColor: "transparent",
      color: "primary",
      borderWidth: 2,
      borderColor: "primary",
    },
    buttonWithShadow: {
      backgroundColor: "white",
      color: "primary",
      borderWidth: 1,
      borderColor: "white",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  },
});

const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    primary: palette.purplePrimary,
    secondary: palette.black, //grey
    error: palette.redBordeaux,
    white: palette.offWhite,
    black: palette.offBlack,
    text: palette.white,
  },
});

export type Theme = typeof theme;
export { theme, darkTheme };
