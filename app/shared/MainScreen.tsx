import { specificValueRelativeToThemeForIos } from "_utils";
import Box, { BoxProps } from "./Box";
import React from "react";

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
      paddingVertical={specificValueRelativeToThemeForIos("l", "s")}
      backgroundColor="mainBackground"
      {...props}
    >
      {children}
    </Box>
  );
};

export default MainScreen;
