import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { Box, Image, MainScreen, Row, Text, Icon } from "_shared";
import { useAppDispatch } from "_store";
import { Size, Theme } from "_theme";
import { useState } from "react";
import { HeaderProfil } from "./components/HeaderProfil";
import { ScrollView } from "react-native-gesture-handler";
import { Switch } from "react-native-switch";
import { MenuItem } from "./components/MenuItem";
import { Alert } from "react-native";
import {
  specificValueForIos,
  specificValueRelativeToThemeForIos,
} from "_utils";
import { setIsUserLogged } from "../auth/authSlice";

export function ProfilScreen() {
  const theme = useTheme<Theme>();
  const { secondary, primary, white } = theme.colors;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //data
  const topMenu = [
    {
      id: 1,
      title: "Dark Mode",
      icon: "nights-stay",
      switchValue: true,
    },
    {
      id: 2,
      title: "Localisation",
      icon: "location-on",
      switchValue: true,
    },
  ];

  //logics

  return (
    <>
      <HeaderProfil />
      <MainScreen typeOfScreen="stack">
        <Box>
          <Box
            flexDirection={"row"}
            justifyContent={"center"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            style={{
              transform: [
                { translateX: -50 },
                { translateY: specificValueForIos(-112, -65) },
              ],
            }}
            borderWidth={4}
            borderRadius={"hg"}
            borderColor={"white"}
          >
            <Image
              source={require("_assets/images/profil_delivery.jpg")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 60,
                margin: 5,
              }}
            />
          </Box>
        </Box>
        <Box
          mt={specificValueRelativeToThemeForIos("s", "m")}
          mb={"s"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text variant={"bigTitle"} color={"black"}>
            Dama RKTVO
          </Text>
          <Text variant={"bigTitle"} color={"black"}>
            +261 34 12 345 67
          </Text>
        </Box>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box mt={"s"}>
            <Row flex={1} height={80}>
              {topMenu.map((menu) => (
                <Box
                  key={menu.id}
                  backgroundColor={"primaryYellow"}
                  flex={1}
                  marginHorizontal={"xs"}
                  px={"s"}
                  flexDirection={"column"}
                  justifyContent={"space-evenly"}
                  borderRadius={"sm"}
                >
                  <Row alignItems={"center"} justifyContent={"space-between"}>
                    <Icon
                      name={menu.icon}
                      size={Size.ICON_MEDIUM}
                      color={primary}
                    />
                    <Switch
                      value={menu.switchValue}
                      onValueChange={(val) => console.log(val)}
                      circleSize={20}
                      barHeight={20}
                      circleBorderWidth={1}
                      backgroundActive={primary}
                      backgroundInactive={secondary}
                      circleActiveColor={white}
                      circleInActiveColor={white}
                      changeValueImmediately={true}
                      renderActiveText={false}
                      renderInActiveText={false}
                      switchWidthMultiplier={2}
                      switchBorderRadius={30}
                    />
                  </Row>
                  <Text variant={"bigTitle"}>{menu.title}</Text>
                </Box>
              ))}
            </Row>
          </Box>

          <Box mt={"m"}>
            <MenuItem
              iconLeft={"lock-reset"}
              label={"Changer mot de passe"}
              onPress={() => navigation.navigate("change_password_screen")}
            />
            <MenuItem
              iconLeft={"contact-support"}
              label={"Contacter support"}
              onPress={() => Alert.alert("Menu cliquer")}
            />
            <MenuItem
              iconLeft={"logout"}
              label={"Se déconnecter"}
              onPress={() => dispatch(setIsUserLogged(false))}
            />
          </Box>
        </ScrollView>
      </MainScreen>
    </>
  );
}
