import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { MainScreen, Text } from "_shared";
import { useAppDispatch } from "_store";
import { Theme } from "_theme";
import { useState } from "react";

export function ProfilScreen() {
  const theme = useTheme<Theme>();
  const { secondary } = theme.colors;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //logics

  return (
    <MainScreen typeOfScreen="stack">
      <Text>Profil screen</Text>
    </MainScreen>
  );
}
