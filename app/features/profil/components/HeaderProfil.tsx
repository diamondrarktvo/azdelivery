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
import { Alert, Platform } from "react-native";
import { formatDateToString } from "_utils";

export function HeaderProfil() {
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
      height={160}
    >
      <Row
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"s"}
        pt={"m"}
      >
        <Text variant={"veryBigTitle"} color={"offWhite"}>
          Mon profil
        </Text>
        <Row flex={0.25} justifyContent={"space-between"}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => Alert.alert("Modification profil")}
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
    </Box>
  );
}
