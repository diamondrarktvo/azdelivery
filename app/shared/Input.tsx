import { TextInput, TextInputProps, StyleSheet } from "react-native";
import React from "react";
import Row from "./Row";
import Text from "./Text";
import Icon from "./Icon";
import TouchableOpacity from "./TouchableOpacity";
import { Theme } from "_theme";
import { useTheme } from "@shopify/restyle";
import Box from "./Box";

type InputProps = TextInputProps & {
  iconRight?: {
    name: string;
    color: string;
    size: number;
    onPress?: () => void;
  };
  iconLeft?: {
    name: string;
    color: string;
    size: number;
  };
  errorMessage?: string;
  label?: string;
  inputCustomStyle?: any;
};

const Input = ({
  iconRight,
  iconLeft,
  errorMessage,
  label,
  inputCustomStyle,
  ...props
}: InputProps) => {
  const theme = useTheme<Theme>();
  const { spacing, colors } = theme;

  return (
    <Box my="s">
      {label ? (
        <Text variant={"primary"} color="black">
          {label}
        </Text>
      ) : null}
      <Row
        borderBottomWidth={1}
        borderColor="secondary"
        borderRadius="xs"
        width="100%"
        paddingHorizontal={iconLeft ? "xs" : "s"}
        paddingVertical="xs"
        marginVertical="xs"
        alignItems="center"
      >
        {iconLeft && (
          <Icon
            name={iconLeft.name}
            size={iconLeft.size}
            color={iconLeft.color}
          />
        )}
        <Row flex={1} justifyContent="space-between">
          <TextInput
            {...props}
            style={{
              width: iconRight ? "90%" : "100%",
              marginLeft: iconLeft ? spacing.s : 0,
              color: colors.black,
              ...inputCustomStyle,
            }}
          />
          {iconRight && (
            <TouchableOpacity onPress={iconRight.onPress}>
              <Icon
                name={iconRight.name}
                size={iconRight.size}
                color={iconRight.color}
              />
            </TouchableOpacity>
          )}
        </Row>
      </Row>
      {errorMessage ? (
        <Text variant={"tertiary"} color="error">
          {errorMessage}
        </Text>
      ) : null}
    </Box>
  );
};

export type ImageProps = React.ComponentProps<typeof Input>;
export default Input;

const styles = StyleSheet.create({});
