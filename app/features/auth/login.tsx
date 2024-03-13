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
import { useAppDispatch } from "_store";
import { Theme } from "_theme";
import { useState } from "react";
import { setIsUserLogged } from "./authSlice";

export function LoginScreen() {
  const [hidePassword, setHidePassword] = useState(true);
  const theme = useTheme<Theme>();
  const { secondary } = theme.colors;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //logics
  const handleLogin = () => {
    dispatch(setIsUserLogged(true));
  };

  return (
    <MainScreen typeOfScreen="stack">
      <Box flexDirection={"row"} justifyContent={"center"} my="l">
        <Image
          source={require("_assets/images/logo.png")}
          style={{ width: 248, height: 200 }}
        />
      </Box>
      <Box mt="s">
        <Input label="Adresse email" placeholder="Adresse email" />
        <Input
          label="Mot de passe"
          placeholder="Mot de passe"
          iconRight={{
            name: hidePassword ? "visibility" : "visibility-off",
            size: 32,
            color: secondary,
            onPress: () => setHidePassword(!hidePassword),
          }}
        />
      </Box>
      <TouchableOpacity
        flexDirection="row"
        justifyContent={"flex-end"}
        onPress={() => navigation.navigate("forgot_password_screen")}
      >
        <Text variant="primary" color={"primary"} fontWeight={"bold"}>
          Mot de passe oublié
        </Text>
      </TouchableOpacity>
      <Button
        variant="primary"
        bold={"bold"}
        marginVertical={"m"}
        label="Se connecter"
        onPress={() => handleLogin()}
      />
      <TouchableOpacity
        flexDirection="row"
        justifyContent={"flex-end"}
        onPress={() => navigation.navigate("register_screen")}
      >
        <Text variant="primary" color={"primary"}>
          S'enregistrer
        </Text>
      </TouchableOpacity>
    </MainScreen>
  );
}
