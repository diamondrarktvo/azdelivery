import { Dimensions } from "react-native";

export default {
  //url de base
  BASE_URL: "http://localhost",
};

export const constants = {
  HEIGHT_DEVICE: Dimensions.get("window").height,
  WIDTH_DEVICE: Dimensions.get("window").width,
};
