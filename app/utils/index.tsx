import { theme } from "_theme";
import { Dimensions, PixelRatio, Platform } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const formatDateToString = (inputDate: string | Date) => {
  const options: {} = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString("fr-FR", options);
  return formattedDate;
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function getFirstCharactere(text: string) {
  if (text === "" || undefined || null) {
    return "";
  }
  return text.charAt(0).toUpperCase();
}

export const verifyText = (text: any): boolean => {
  //pour vérifier si le texte est un chiffre
  if (/^\d*$/.test(text)) {
    return true;
  }
  return false;
};

// Fonction pour convertir le pourcentage de la largeur de l'écran en un nombre de pixels
export const widthPercentageToDP = (widthPercent: number) => {
  const elemWidth =
    typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

// Fonction pour ajuster la taille d'un composant selon le width de l'écran
export const scalePerWidth = (size: number) => {
  const elemWidth = (screenWidth * size) / 100;
  return PixelRatio.roundToNearestPixel(elemWidth);
};

// Fonction pour ajuster la taille d'un composant selon la taille de l'écran
export const scalePerHeight = (size: number) => {
  const elemWidth = (screenHeight * size) / 100;
  return PixelRatio.roundToNearestPixel(elemWidth);
};

export const specificValueForIos = (
  valueForIos: number,
  valueForAndroid: number,
) => {
  if (Platform.OS === "ios") {
    return valueForIos;
  }
  return valueForAndroid;
};

type ResponsiveSize = "none" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

export const specificValueRelativeToThemeForIos = (
  valueForIos: ResponsiveSize,
  valueForAndroid: ResponsiveSize,
): ResponsiveSize => {
  if (Platform.OS === "ios") {
    return valueForIos;
  }
  return valueForAndroid;
};
