import Row from "./Row";
import Icon from "./Icon";
import Text from "./Text";
import TouchableOpacity from "./TouchableOpacity";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";
import { Theme, Size } from "_theme";
import Column from "./Column";

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
  const { black, white } = theme.colors;
  const navigation = useNavigation();

  return (
    <Row
      justifyContent="flex-end"
      alignItems="center"
      backgroundColor="primary"
      paddingTop={"m"}
      paddingBottom={"xs"}
      paddingLeft="xs"
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-ios"
          color={white}
          size={Size.ICON_MEDIUM}
          borderColor="white"
          padding={8}
        />
      </TouchableOpacity>
      <Column flex={2} marginLeft="m">
        {title ? (
          <Text variant="primaryBold" color="white">
            {title}
          </Text>
        ) : null}
      </Column>
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
  );
};

export default HeaderStackNavNormal;
