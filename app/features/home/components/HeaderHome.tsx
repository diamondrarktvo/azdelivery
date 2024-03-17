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
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { formatDateToString } from "_utils";

export function HeaderHome() {
  const theme = useTheme<Theme>();
  const { black, primaryYellow, secondary, primary, offWhite } = theme.colors;
  const { xs, hg } = theme.borderRadii;

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Box
      backgroundColor={"primary"}
      borderBottomLeftRadius={"md"}
      borderBottomRightRadius={"md"}
    >
      <Row
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"s"}
        pt={"m"}
      >
        <Text variant={"veryBigTitle"} color={"offWhite"}>
          Dashboard
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.navigate("main_tab", { screen: "profil_screen" })
          }
        >
          <Icon name="person" color={offWhite} size={Size.ICON_MEDIUM} />
        </TouchableOpacity>
      </Row>
      <Box my={"l"}>
        <Row
          alignItems={"center"}
          justifyContent={"space-around"}
          mx={"m"}
          py={"m"}
          backgroundColor="purplePrimaryVeryTransparent"
          borderRadius="sm"
        >
          <Column>
            <Text variant={"secondary"} fontWeight={"600"} color="offWhite">
              Total nouvelle commande
            </Text>
            <Text variant={"primary"} fontWeight={"600"} color="offWhite">
              Prends en une maintenant ...
            </Text>
          </Column>
          <Box backgroundColor={"white"} borderRadius={"hg"} px={"s"} py={"xs"}>
            <Text variant={"veryBigTitle"}>5</Text>
          </Box>
        </Row>
      </Box>
    </Box>
  );
}
