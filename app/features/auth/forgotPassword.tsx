import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import {
  Box,
  Button,
  Image,
  Input,
  MainScreen,
  Text,
  TouchableOpacity,
} from "_shared";
import { Theme } from "_theme";
import { useState } from "react";

export function ForgotPasswordScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const theme = useTheme<Theme>();
  const { secondary } = theme.colors;
  const navigation = useNavigation();

  return (
    <MainScreen typeOfScreen="stack">
      <Box flexDirection={"row"} justifyContent={"center"} my="l">
        <Image
          source={require("_assets/images/logo_white.png")}
          style={{ width: 248, height: 200 }}
        />
      </Box>
      <Box mt="s">
        <Input label="Adresse email" placeholder="Adresse email" />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        marginVertical={"m"}
        bold={"bold"}
        label="Réinitialiser le mot de passe"
        onPress={() => console.log("Login")}
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
    </MainScreen>
  );
}
