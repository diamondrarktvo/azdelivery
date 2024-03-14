import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import {
  Box,
  Button,
  Image,
  Input,
  MainScreen,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { useAppDispatch } from "_store";
import { Theme } from "_theme";
import { useState } from "react";
import { setIsUserLogged } from "./authSlice";
import { ImageBackground, StyleSheet } from "react-native";

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
    <Box flex={1}>
      <Box flex={1}>
        <ImageBackground
          source={require("_assets/images/livraison_background.jpg")}
          resizeMode="cover"
          blurRadius={4}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
        >
          <Box
            flex={1}
            backgroundColor={"primaryTransparent"}
            borderBottomRightRadius={"md"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              source={require("_assets/images/logo_white.png")}
              style={{ width: 180, height: 60 }}
            />
            <Text variant={"veryBigTitle"} color={"offWhite"} marginTop={"s"}>
              Bienvenue!
            </Text>
          </Box>
        </ImageBackground>
      </Box>
      <Box flex={1} backgroundColor={"purpleFromBackgroundImage"}>
        <Box flex={1} backgroundColor={"white"} borderTopLeftRadius={"md"}>
          <Box marginTop={"s"} marginHorizontal={"m"}>
            <Input label="Numéro télephone" placeholder="0343948483" />
            <Input
              label="Mot de passe"
              secureTextEntry={hidePassword}
              placeholder="* * * *"
              iconRight={{
                name: hidePassword ? "visibility" : "visibility-off",
                size: 32,
                color: secondary,
                onPress: () => setHidePassword(!hidePassword),
              }}
            />
            <TouchableOpacity
              flexDirection="row"
              justifyContent={"flex-end"}
              onPress={() => navigation.navigate("forgot_password_screen")}
            >
              <Text variant="primary" color={"primary"} fontWeight={"bold"}>
                Mot de passe oublié?
              </Text>
            </TouchableOpacity>
            <Button
              variant="primary"
              bold={"bold"}
              marginVertical={"m"}
              label="Se connecter"
              onPress={() => handleLogin()}
            />
            <Row justifyContent="center">
              <Text variant={"secondary"} color={"black"}>
                {" "}
                Pas de compte?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("register_screen")}
              >
                <Text
                  variant={"secondary"}
                  color={"primary"}
                  fontWeight={"bold"}
                >
                  S'enregistrer
                </Text>
              </TouchableOpacity>
            </Row>
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
