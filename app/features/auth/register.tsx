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
import { ScrollView } from "react-native-gesture-handler";
import { setIsUserLogged } from "./authSlice";

export function RegisterScreen() {
  const [hidePasswordOne, setHidePasswordOne] = useState(true);
  const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
  const theme = useTheme<Theme>();
  const { secondary } = theme.colors;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //logics
  const handleRegister = () => {
    dispatch(setIsUserLogged(true));
  };

  return (
    <MainScreen typeOfScreen="stack">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box flexDirection={"row"} justifyContent={"center"} my="s">
          <Image
            source={require("_assets/images/logo.png")}
            style={{ width: 248, height: 200 }}
          />
        </Box>
        <Box mt="xs">
          <Input label="Nom et prénoms" placeholder="Nom et prénoms" />
          <Input label="Adresse email" placeholder="Adresse email" />

          <Input
            label="Mot de passe"
            placeholder="Mot de passe"
            iconRight={{
              name: hidePasswordOne ? "visibility" : "visibility-off",
              size: 32,
              color: secondary,
              onPress: () => setHidePasswordOne(!hidePasswordOne),
            }}
          />
          <Input
            label="Confirmation du mot de passe"
            placeholder="Confirmation du mot de passe"
            iconRight={{
              name: hidePasswordTwo ? "visibility" : "visibility-off",
              size: 32,
              color: secondary,
              onPress: () => setHidePasswordTwo(!hidePasswordTwo),
            }}
          />
        </Box>
        <Button
          variant="primary"
          bold={"bold"}
          marginVertical={"s"}
          label="S'inscrire"
          onPress={() => handleRegister()}
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
      </ScrollView>
    </MainScreen>
  );
}
