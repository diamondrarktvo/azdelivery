import Row from "./Row";
import Icon from "./Icon";
import Text from "./Text";
import TouchableOpacity from "./TouchableOpacity";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";
import { Theme, Size } from "_theme";
import Column from "./Column";
import { specificValueForIos } from "_utils";
import Box from "./Box";

type Props = {
  title?: string;
  iconRight?: string;
  iconRightOnPress?: () => void;
};

const HeaderStackNavNormal: React.FC<Props> = ({
  title,
  iconRight,
  iconRightOnPress,
}) => {
  const theme = useTheme<Theme>();
  const { black, white, primaryYellow } = theme.colors;
  const { xs, hg } = theme.borderRadii;
  const navigation = useNavigation();

  return (
    <Box flex={specificValueForIos(1, 0.12)}>
      <Box
        flex={1}
        backgroundColor={"primary"}
        borderBottomRightRadius={"md"}
        justifyContent={"flex-end"}
        paddingBottom={"s"}
        paddingLeft={"m"}
        paddingRight={"s"}
      >
        <Row justifyContent="space-between">
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
              {title}
            </Text>
          </Row>
          {iconRight ? (
            <TouchableOpacity onPress={iconRightOnPress}>
              <Icon
                name={iconRight}
                color={white}
                size={Size.ICON_LARGE}
                padding={8}
                paddingRight={12}
              />
            </TouchableOpacity>
          ) : null}
        </Row>
      </Box>
    </Box>
  );
};

export default HeaderStackNavNormal;
