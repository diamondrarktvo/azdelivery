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
import { useAppDispatch } from "_store";
import { Size, Theme } from "_theme";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { setIsUserLogged } from "./authSlice";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { formatDateToString } from "_utils";

export function RegisterScreen() {
  const [hidePasswordOne, setHidePasswordOne] = useState(true);
  const [hidePasswordTwo, setHidePasswordTwo] = useState(true);
  const [imageImported, setImageImported] = useState<string>("");
  const [dateCurrentSelected, setDateCurrentSelected] = useState<Date>(
    new Date(),
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const theme = useTheme<Theme>();
  const { black, primaryYellow, secondary, primary } = theme.colors;
  const { xs, hg } = theme.borderRadii;

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //logics
  const handleRegister = () => {
    dispatch(setIsUserLogged(true));
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageImported(result.assets[0].uri);
    }
  };

  const removeThisImage = () => {
    setImageImported("");
  };

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
              Créer un compte
            </Text>
          </Row>
        </Box>
      </Box>
      <ScrollView style={{ flex: 1 }}>
        <Box flex={1} backgroundColor={"primary"}>
          <Box flex={1} backgroundColor={"white"} borderTopLeftRadius={"md"}>
            <Box marginTop={"s"} marginHorizontal={"m"}>
              <Input label="Nom" placeholder="Rakoto" />
              <Input label="Prénom" placeholder="Arialy" />
              <Input label="Numéro employé" placeholder="123456789" />

              <Input label="Numéro télephone" placeholder="0343948483" />
              <Input label="Note" placeholder="Votre note ..." />

              <Box>
                <Row
                  alignItems="center"
                  marginBottom={"s"}
                  justifyContent="space-between"
                >
                  <Text variant={"primary"} color={"black"}>
                    Date et heure de travail
                  </Text>
                  <Row flex={0.3} justifyContent="space-between">
                    <Icon
                      name="date-range"
                      size={Size.ICON_MEDIUM}
                      color={primary}
                      onPress={() => {
                        setShowDatePicker(!showDatePicker);
                      }}
                    />
                    <Icon
                      name="access-time"
                      size={Size.ICON_MEDIUM}
                      color={primary}
                      onPress={() => {
                        setShowTimePicker(!showTimePicker);
                      }}
                    />
                  </Row>
                </Row>
                <Button
                  height={50}
                  alignItems={"center"}
                  justifyContent={"center"}
                  variant={"secondary"}
                  label={
                    formatDateToString(dateCurrentSelected) ??
                    "Choisir une date"
                  }
                  disabled
                />
                {showDatePicker && Platform.OS === "android" && (
                  <DateTimePicker
                    testID={"dateOfBirth"}
                    value={new Date(dateCurrentSelected)}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(!showDatePicker);
                      if (selectedDate) {
                        setDateCurrentSelected(selectedDate);
                      }
                    }}
                    style={{
                      width: 200,
                      position: "relative",
                      left: -75,
                      marginVertical: 5,
                    }}
                  />
                )}
                {showTimePicker && Platform.OS === "android" && (
                  <DateTimePicker
                    testID={"dateOfBirth"}
                    value={new Date(dateCurrentSelected)}
                    mode="time"
                    display="default"
                    onChange={(event, selectedTime) => {
                      setShowTimePicker(!showTimePicker);
                      if (selectedTime) {
                        setDateCurrentSelected(selectedTime);
                      }
                    }}
                    style={{
                      width: 200,
                      position: "relative",
                      left: -75,
                      marginVertical: 5,
                    }}
                  />
                )}
                {showDatePicker && Platform.OS === "ios" && (
                  <DateTimePicker
                    testID={"dateOfBirth"}
                    value={dateCurrentSelected}
                    mode="datetime"
                    display="default"
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(!showDatePicker);
                      if (selectedDate) {
                        setDateCurrentSelected(selectedDate);
                      }
                    }}
                    style={{
                      width: 200,
                      position: "relative",
                      left: -75,
                      marginVertical: 5,
                    }}
                  />
                )}
              </Box>
              <Input
                label="Mot de passe"
                secureTextEntry={hidePasswordOne}
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
                secureTextEntry={hidePasswordTwo}
                placeholder="* * * *"
                iconRight={{
                  name: hidePasswordTwo ? "visibility" : "visibility-off",
                  size: 32,
                  color: secondary,
                  onPress: () => setHidePasswordTwo(!hidePasswordTwo),
                }}
              />

              <Box>
                <Text variant={"primary"} color={"black"} marginBottom={"s"}>
                  Photo de profil
                </Text>
                {!imageImported ? (
                  <Box
                    borderWidth={1}
                    height={100}
                    width={"100%"}
                    justifyContent={"center"}
                    borderStyle={"dashed"}
                  >
                    <Icon
                      name="image"
                      size={Size.ICON_LARGE}
                      color={black}
                      onPress={() => pickImage()}
                    />
                  </Box>
                ) : (
                  <Box>
                    <Image
                      source={{ uri: imageImported }}
                      style={{
                        width: Size.IMAGE_MEDIUM,
                        height: Size.IMAGE_MEDIUM,
                        borderRadius: xs,
                        marginVertical: 5,
                      }}
                    />
                    <Box position={"absolute"} left={100} top={-6}>
                      <Icon
                        name={"close"}
                        color={primary}
                        size={Size.ICON_MEDIUM}
                        containerStyle={{
                          backgroundColor: primaryYellow,
                          borderRadius: hg,
                          marginRight: 12,
                        }}
                        onPress={() => removeThisImage()}
                      />
                    </Box>
                  </Box>
                )}
              </Box>

              <Button
                variant="primary"
                bold={"bold"}
                marginVertical={"m"}
                label="S'inscrire"
                onPress={() => {}}
              />
              <Row justifyContent="center">
                <Text variant={"secondary"} color={"black"}>
                  {" "}
                  Vous avez un compte?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("login_screen")}
                >
                  <Text
                    variant={"secondary"}
                    color={"primary"}
                    fontWeight={"bold"}
                  >
                    Se connecter
                  </Text>
                </TouchableOpacity>
              </Row>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
