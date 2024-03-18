import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import {
  Box,
  Button,
  Column,
  Icon,
  Image,
  Input,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { useAppDispatch } from "_store";
import { Size, Theme } from "_theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Alert, Platform, StyleSheet, ToastAndroid } from "react-native";
import { scalePerHeight, formatDateToString } from "_utils";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import * as ImagePicker from "expo-image-picker";

export function HeaderProfil() {
  const theme = useTheme<Theme>();
  const { black, primaryYellow, secondary, primary, offWhite } = theme.colors;
  const { xs, hg } = theme.borderRadii;

  const [imageImported, setImageImported] = useState<string>("");
  const [dateCurrentSelected, setDateCurrentSelected] = useState<Date>(
    new Date(),
  );
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const snapPoints = useMemo(() => [1, "90%"], []);
  const bottomSheetRef = useRef<BottomSheetModal | null>(null);

  const renderBackDrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop {...props} opacity={0.6} />
    ),
    [],
  );

  const openBottomSheet = () => {
    if (bottomSheetRef !== null && bottomSheetRef.current !== null) {
      return bottomSheetRef.current.present();
    }
    return;
  };

  const closeBottomSheet = () => {
    if (bottomSheetRef !== null && bottomSheetRef.current !== null) {
      return bottomSheetRef.current.close();
    }
    return;
  };

  const handleRegister = () => {
    closeBottomSheet();
    ToastAndroid.show("Profil modifié", ToastAndroid.SHORT);
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
    <Box
      backgroundColor={"primary"}
      pt={"m"}
      borderBottomLeftRadius={"md"}
      borderBottomRightRadius={"md"}
      height={scalePerHeight(24)}
    >
      <Row
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"s"}
        pt="m"
      >
        <Text variant={"veryBigTitle"} color={"offWhite"}>
          Mon profil
        </Text>
        <Row flex={0.25} justifyContent={"space-between"}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => openBottomSheet()}
          >
            <Icon name="edit" color={offWhite} size={Size.ICON_MEDIUM} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("main_tab", { screen: "profil_screen" })
            }
          >
            <Icon name="logout" color={offWhite} size={Size.ICON_MEDIUM} />
          </TouchableOpacity>
        </Row>
      </Row>

      <BottomSheetModal
        backdropComponent={renderBackDrop}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        style={styles.bottomSheet_container}
      >
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          <Text variant={"bigTitle"} textAlign={"center"}>
            Modifier votre profil
          </Text>
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
                  formatDateToString(dateCurrentSelected) ?? "Choisir une date"
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
              label="Enregistrer"
              onPress={() => handleRegister()}
            />
          </Box>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </Box>
  );
}

const styles = StyleSheet.create({
  bottomSheet_container: {
    paddingHorizontal: "4%",
  },
});
