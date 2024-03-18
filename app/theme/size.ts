import { fontScalePerWidth } from "_utils";
import { Dimensions } from "react-native";

//import {isTablet} from './system';

const isTablet = false;

const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const _scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (_scale(size) - size) * factor;

const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const scale = isTablet /*isTablet()*/ ? verticalScale : _scale;

const ICON_SMALL = scale(10);
const ICON_MEDIUM = scale(20);
const ICON_LARGE = scale(30);

const IMAGE_SMALL = scale(50);
const IMAGE_MEDIUM = scale(100);
const IMAGE_LARGE = scale(150);

const DIMENSIONS = {
  height: {
    small: "25%",
    medium: "50%",
    large: "75%",
    full: "100%",
  },
  width: {
    small: "25%",
    medium: "50%",
    large: "75%",
    full: "100%",
  },
};

const TYPO = {
  veryBig: fontScalePerWidth(6),
  big: fontScalePerWidth(5),
  primary: fontScalePerWidth(4),
  secondary: fontScalePerWidth(3.5),
  tertiary: fontScalePerWidth(3),
  verySmall: fontScalePerWidth(2),
};

export const Size = {
  TYPO,
  ICON_LARGE,
  ICON_MEDIUM,
  ICON_SMALL,
  IMAGE_LARGE,
  IMAGE_MEDIUM,
  IMAGE_SMALL,
  DIMENSIONS,
};
