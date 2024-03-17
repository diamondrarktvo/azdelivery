import { useTheme } from "@shopify/restyle";
import {
  Image,
  MainScreen,
  Row,
  Text,
  Column,
  Icon,
  TouchableOpacity,
} from "_shared";
import { Size, Theme } from "_theme";

type Props = {
  iconLeft: string;
  label: string;
  onPress: () => void;
};

export const MenuItem = ({ iconLeft, label, onPress }: Props) => {
  const theme = useTheme<Theme>();
  const { borderRadii, colors } = theme;
  return (
    <TouchableOpacity onPress={onPress}>
      <Row
        borderBottomWidth={1}
        paddingBottom="xs"
        marginTop="s"
        borderColor="offWhite"
      >
        <Icon name={iconLeft} size={Size.ICON_MEDIUM} color={colors.black} />
        <Column paddingHorizontal="s" flex={2}>
          <Text variant="primary" color="text">
            {label}
          </Text>
        </Column>
        <Icon
          name="chevron-right"
          size={Size.ICON_LARGE}
          color={colors.black}
        />
      </Row>
    </TouchableOpacity>
  );
};
