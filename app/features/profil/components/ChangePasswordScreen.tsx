import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import {
  Box,
  Image,
  MainScreen,
  Row,
  Text,
  Icon,
  HeaderStackNavNormal,
  TouchableOpacity,
  Input,
  Button,
} from "_shared";
import { useAppDispatch } from "_store";
import { Size, Theme } from "_theme";
import { useState } from "react";

import {
  specificValueForIos,
  specificValueRelativeToThemeForIos,
} from "_utils";
import { ScrollView } from "react-native-gesture-handler";
import { Alert } from "react-native";

export function ChangePasswordScreen() {
  const theme = useTheme<Theme>();
  const [hidePassword, setHidePassword] = useState({
    password: true,
    newPassword: true,
    confirmPassword: true,
  });
  const { secondary, primary, white, black, primaryYellow } = theme.colors;
  const { xs, hg } = theme.borderRadii;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //data

  //logics

  return (
    <>
      <HeaderStackNavNormal title="Changer mot de passe" />
      <MainScreen typeOfScreen="stack">
        <Input
          label="Mot de passe"
          secureTextEntry={hidePassword.password}
          placeholder="* * * *"
          iconRight={{
            name: hidePassword ? "visibility" : "visibility-off",
            size: 32,
            color: secondary,
            onPress: () =>
              setHidePassword((prevState) => {
                return {
                  ...prevState,
                  password: !prevState.password,
                };
              }),
          }}
        />
        <Input
          label="Nouveau mot de passe"
          secureTextEntry={hidePassword.newPassword}
          placeholder="* * * *"
          iconRight={{
            name: hidePassword ? "visibility" : "visibility-off",
            size: 32,
            color: secondary,
            onPress: () =>
              setHidePassword((prevState) => {
                return {
                  ...prevState,
                  newPassword: !prevState.newPassword,
                };
              }),
          }}
        />
        <Input
          label="Confirmer mot de passe"
          secureTextEntry={hidePassword.confirmPassword}
          placeholder="* * * *"
          iconRight={{
            name: hidePassword ? "visibility" : "visibility-off",
            size: 32,
            color: secondary,
            onPress: () =>
              setHidePassword((prevState) => {
                return {
                  ...prevState,
                  confirmPassword: !prevState.confirmPassword,
                };
              }),
          }}
        />
        <Button
          variant="primary"
          bold={"bold"}
          marginVertical={"m"}
          label="Enregistrer"
          onPress={() => Alert.alert("Mot de passe changé avec succès", "...")}
        />
      </MainScreen>
    </>
  );
}
