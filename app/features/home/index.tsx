import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import { MainScreen, Text } from "_shared";
import { useAppDispatch } from "_store";
import { Theme } from "_theme";
import { HeaderHome } from "./components/HeaderHome";

export function HomeScreen() {
  const theme = useTheme<Theme>();
  const { secondary } = theme.colors;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  //logics

  return (
    <>
      <HeaderHome />
      <MainScreen typeOfScreen="stack">
        <Text>Home screen</Text>
      </MainScreen>
    </>
  );
}
