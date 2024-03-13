import Row from "./Row";
import Icon from "./Icon";
import Text from "./Text";
import TouchableOpacity from "./TouchableOpacity";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";
import { Theme, Size } from "_theme";
import Box from "./Box";
import { Platform, StyleSheet } from "react-native";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { useCallback, useMemo, useRef, useState } from "react";
import Column from "./Column";
import Image from "./Image";

type topUpType = {
  title: string;
  icon: string;
  onPress: () => void;
};

const HeaderStackPrincipal: React.FC = ({}) => {
  const theme = useTheme<Theme>();
  const { black, white, text } = theme.colors;
  const navigation = useNavigation();
  const [hideAmount, setHideAmount] = useState(true);

  const snapPoints = useMemo(() => [1, "20%"], []);

  const bottomSheetRef = useRef<BottomSheetModal | null>(null);

  //logics
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

  const topUpMenu: topUpType[] = [
    {
      title: "Recevoir",
      icon: "arrow-downward",
      onPress: () => navigation.navigate("receive_top_up_screen"),
    },
    {
      title: "Envoyer",
      icon: "arrow-upward",
      onPress: () => openBottomSheet(),
    },
    {
      title: "Acheter",
      icon: "add",
      onPress: () => navigation.navigate("recharge_top_up_screen"),
    },
    {
      title: "Historique",
      icon: "history",
      onPress: () => navigation.navigate("historique_top_up_screen"),
    },
  ];

  //components
  const renderBackDrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop {...props} opacity={0.6} />
    ),
    [],
  );

  return (
    <Box
      backgroundColor={"primary"}
      paddingHorizontal="s"
      paddingTop={Platform.OS === "ios" ? "l" : "m"}
      paddingBottom={"s"}
      borderBottomLeftRadius={"md"}
      borderBottomRightRadius={"md"}
    >
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"s"}
      >
        <TouchableOpacity onPress={() => console.log("go")}>
          <Text>touch</Text>
        </TouchableOpacity>

        <Text variant={"primary"} color={"white"} fontWeight={"600"}>
          Bonjour, Bob 👌
        </Text>
        <Icon
          name="notifications"
          size={Size.ICON_MEDIUM}
          color={white}
          onPress={() => console.log("notification icon")}
        />
      </Box>

      <Box my="s">
        <Box
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"xs"}
        >
          <Text variant={"title"} color={"white"} mr={"s"}>
            Ar 25 000
          </Text>
          <Icon
            name={hideAmount ? "visibility" : "visibility-off"}
            size={Size.ICON_MEDIUM}
            color={black}
            onPress={() => setHideAmount(!hideAmount)}
          />
        </Box>
        <Text variant={"secondary"} color={"white"} textAlign={"center"}>
          bobdemo@gmail.com
        </Text>
      </Box>

      <Box
        mt="s"
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        {topUpMenu.map((item, index) => (
          <Box
            key={item.title + "-" + index}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            height={90}
          >
            <TouchableOpacity
              onPress={item.onPress}
              backgroundColor="white"
              width={45}
              height={45}
              borderRadius={10}
              justifyContent={"center"}
            >
              <Icon name={item.icon} size={Size.ICON_LARGE} color={black} />
            </TouchableOpacity>
            <Text variant={"tertiary"} color={"white"} ml={"s"}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Box>
      <BottomSheetModal
        backdropComponent={renderBackDrop}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        style={styles.bottomSheet_container}
      >
        <Column>
          <TouchableOpacity
            borderBottomWidth={1}
            borderColor="grey"
            width={"100%"}
            paddingVertical={14}
            onPress={() => {
              navigation.navigate("send_money_via_coinizeo_account_screen");
              closeBottomSheet();
            }}
          >
            <Text variant={"title"} color={"primary"}>
              Vers un compte Coinizeo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            borderBottomWidth={1}
            borderColor="grey"
            width={"100%"}
            paddingVertical={14}
            onPress={() => {
              navigation.navigate("send_money_via_mobile_money_screen");
              closeBottomSheet();
            }}
          >
            <Text variant={"title"} color={"primary"}>
              Vers Mobile Money
            </Text>
          </TouchableOpacity>
        </Column>
      </BottomSheetModal>
    </Box>
  );
};

const styles = StyleSheet.create({
  bottomSheet_container: {
    paddingHorizontal: "4%",
  },
});

export default HeaderStackPrincipal;
