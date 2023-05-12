import { Typography } from "@components/Texts/Typography";
import { Container } from "./styles";
import { Ionicons } from "@components/Icons";
import { ComponentProps } from "react";
import { useTheme } from "styled-components/native";
import { getPixel } from "@globals/helpers/getPixel";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { ColorsProps, SizesProps } from "@globals/styles";

interface ButtonContainedProps extends TouchableOpacityProps {
  title?: string;
  textSize?: SizesProps;
  textWeight?: "regular" | "medium" | "bold";

  active?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onLoading?: boolean;
  rounded?: boolean;

  textColor?: ColorsProps;
  inactiveTextColor?: ColorsProps;

  background?: ColorsProps;
  borderColor?: ColorsProps;
  inactiveBackground?: ColorsProps;
  inactiveBorderColor?: ColorsProps;

  borderWidth?: number;
  width?: number | string;
  height?: number;
  paddingHorizontal?: number;

  iconName?: ComponentProps<typeof Ionicons>["name"];
  iconSize?: number;

  activityIndicatorSize?: "small" | "large";

  marginLeft?: number;
  marginRight?: number;
}

export function ButtonContained({
  title = "ButtonContained",
  textSize = "text-base",
  textWeight = "regular",
  active = true,
  disabled = false,
  rounded = false,
  onLoading = false,
  fullWidth,
  textColor,
  inactiveTextColor,

  background,
  borderColor,
  inactiveBackground,
  inactiveBorderColor,

  borderWidth,
  width,
  height,
  paddingHorizontal,

  iconName,
  iconSize = 20,
  activityIndicatorSize = "small",

  marginLeft,
  marginRight,

  ...rest
}: ButtonContainedProps) {
  const theme = useTheme();

  return (
    <>
      <Container
        active={active}
        disabled={disabled}
        background={background}
        borderColor={borderColor}
        inactiveBackground={inactiveBackground}
        inactiveBorderColor={inactiveBorderColor}
        borderWidth={borderWidth}
        fullWidth={fullWidth}
        width={width}
        height={height}
        rounded={rounded}
        paddingHorizontal={paddingHorizontal}
        marginLeft={marginLeft}
        marginRight={marginRight}
        {...rest}
      >
        {active ? (
          <>
            {onLoading ? (
              <>
                <ActivityIndicator
                  color={theme.colors[textColor ?? "shape"]}
                  style={{ marginRight: getPixel.sizeHorizontal(10) }}
                  size={activityIndicatorSize}
                />
              </>
            ) : (
              <>
                {iconName && (
                  <>
                    <Ionicons
                      name={iconName}
                      size={iconSize}
                      color={theme.colors[textColor ?? "shape"]}
                      style={{ marginRight: getPixel.sizeHorizontal(10) }}
                    />
                  </>
                )}
              </>
            )}

            <Typography
              weight={textWeight}
              size={textSize}
              color={textColor ?? "shape"}
            >
              {title}
            </Typography>
          </>
        ) : (
          <>
            {onLoading ? (
              <ActivityIndicator
                color={theme.colors[inactiveTextColor ?? "shape"]}
                style={{ marginRight: getPixel.sizeHorizontal(10) }}
                size={activityIndicatorSize}
              />
            ) : (
              <>
                {iconName && (
                  <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={theme.colors[inactiveTextColor ?? "shape"]}
                    style={{ marginRight: getPixel.sizeHorizontal(10) }}
                  />
                )}
              </>
            )}

            <Typography
              weight={textWeight}
              size={textSize}
              color={inactiveTextColor ?? "shape"}
            >
              {title}
            </Typography>
          </>
        )}
      </Container>
    </>
  );
}
