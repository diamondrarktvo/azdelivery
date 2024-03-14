import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import {
  Box,
  Button,
  Icon,
  Image,
  Input,
  MainScreen,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { Size, Theme } from "_theme";
import { useState } from "react";
import { ImageBackground, StyleSheet, Alert } from "react-native";

export function ForgotPasswordScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const theme = useTheme<Theme>();
  const { secondary, black, primaryYellow } = theme.colors;
  const { hg } = theme.borderRadii;
  const navigation = useNavigation();

  return (
    <Box flex={1}>
      <Box flex={0.15}>
        <Box
          flex={1}
          backgroundColor={"primary"}
          borderBottomRightRadius={"md"}
          justifyContent={"flex-end"}
          paddingBottom={"s"}
          paddingLeft={"m"}
        >
          <Row alignItems="center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name={"arrow-back"}
                color={black}
                size={Size.ICON_MEDIUM}
                containerStyle={{
                  backgroundColor: primaryYellow,
                  padding: 8,
                  borderRadius: hg,
                  marginRight: 12,
                }}
              />
            </TouchableOpacity>
            <Text variant={"veryBigTitle"} color={"offWhite"}>
              Reinitialiser mot de passe
            </Text>
          </Row>
        </Box>
      </Box>
      <Box flex={1} backgroundColor={"primary"}>
        <Box flex={1} backgroundColor={"white"} borderTopLeftRadius={"md"}>
          <Box marginTop={"s"} marginHorizontal={"m"}>
            <Input label="Numéro télephone" placeholder="0343948483" />

            <Button
              variant="outlined"
              color="primary"
              marginVertical={"m"}
              bold={"bold"}
              label="Réinitialiser le mot de passe"
              onPress={() =>
                Alert.alert(
                  "Reinitialisation mot de passe",
                  "Mot de passe envoyé sur le numéro...",
                )
              }
            />
            <TouchableOpacity
              flexDirection="row"
              justifyContent={"flex-end"}
              onPress={() => navigation.navigate("login_screen")}
            >
              <Text variant="primary" color={"primary"}>
                S'identifier
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  imageStyle: {
    borderBottomRightRadius: 45,
  },
});
