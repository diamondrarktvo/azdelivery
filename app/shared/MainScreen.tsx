import Box, { BoxProps } from "./Box";
import React from "react";
import { Platform } from "react-native";

type Props = {
  children: React.ReactNode;
  typeOfScreen: "tab" | "stack" | "component" | "top";
  titleTabScreen?: string;
} & Partial<BoxProps>;

const MainScreen: React.FC<Props> = ({
  children,
  typeOfScreen,
  titleTabScreen,
  ...props
}) => {
  return (
    <Box
      flex={1}
      paddingHorizontal="s"
      paddingVertical={Platform.OS === "ios" ? "l" : "s"}
      backgroundColor="mainBackground"
      {...props}
    >
      {children}
    </Box>
  );
};

export default MainScreen;
