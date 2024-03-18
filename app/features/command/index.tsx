import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { useTheme } from "@shopify/restyle";
import {
  Box,
  EmptyList,
  HeaderStackNavNormal,
  MainScreen,
  Row,
  Icon,
  Text,
  Button,
} from "_shared";
import { useAppDispatch } from "_store";
import { Button as RNEIButton } from "@rneui/themed";
import { Theme } from "_theme";
import { useState } from "react";
import { ListRenderItem, RefreshControl } from "react-native";
import { commandTypes } from "./types";

export function CommandScreen() {
  const theme = useTheme<Theme>();
  const { secondary, primaryYellow, white, primary, transparent } =
    theme.colors;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //logics
  const allCommands = [
    {
      id: 1,
      idOrder: "#45486",
      datePublish: "5min",
      status: "En attente",
      price: 2500,
      district: "Analamahitsy",
      products: {
        id: 1,
        name: "T-shirt",
        price: 45000,
        quantity: 1,
        image:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      },
      distance: "1.5 km",
    },
  ];

  //components
  const renderItemOrder: ListRenderItem<commandTypes> = ({ item }) => {
    return (
      <Box
        backgroundColor={"offWhite"}
        borderRadius={"xs"}
        key={item.id}
        py={"s"}
        px={"m"}
        mb={"s"}
      >
        <Row justifyContent="space-between">
          <Text variant={"primaryBold"}>{item.idOrder}</Text>
          <Text variant={"primary"} color={"primary"}>
            {item.datePublish}
          </Text>
        </Row>
        <Row justifyContent={"center"} alignItems={"center"} mt={"s"}>
          <Icon name="fiber-manual-record" size={20} color={primaryYellow} />
          <Text color={"primaryYellow"}>----------------------------</Text>
          <Text variant={"primary"} color={"primary"}>
            {" "}
            {item.distance}{" "}
          </Text>
          <Text color={"primaryYellow"}>----------------------------</Text>
          <Icon name="fiber-manual-record" size={20} color={primaryYellow} />
        </Row>
        <Box mt={"s"}>
          <Text variant={"primary"}>Lieu : {item.district}</Text>
          <Text variant={"primary"}>
            Prix : {item.price.toLocaleString("fr-FR")} Ar
          </Text>
          <Row alignItems="center">
            <Text variant={"primary"}>Status : </Text>
            <Text variant={"primaryBold"} color={"success"}>
              {item.status}
            </Text>
          </Row>
        </Box>
        <Box mt={"m"}>
          <Row justifyContent="space-between">
            <RNEIButton
              buttonStyle={{
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: transparent,
                borderWidth: 1,
                borderColor: primary,
                width: "80%",
              }}
              titleStyle={{
                color: primary,
              }}
              onPress={() => {}}
            >
              Info
            </RNEIButton>
            <RNEIButton
              buttonStyle={{
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: primary,
                width: "80%",
              }}
              titleStyle={{
                color: white,
              }}
              onPress={() => {}}
            >
              Prendre
            </RNEIButton>
          </Row>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <HeaderStackNavNormal title="Liste des commandes" />
      <MainScreen typeOfScreen="stack">
        <Box flex={1}>
          <FlashList
            keyExtractor={(item, index) => item.id.toString()}
            estimatedItemSize={200}
            data={allCommands}
            renderItem={renderItemOrder}
            extraData={allCommands}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyList textToShow="Il n'y a pas de commande en cours" />
            }
          />
        </Box>
      </MainScreen>
    </>
  );
}
