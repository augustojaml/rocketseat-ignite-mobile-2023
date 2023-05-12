import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

function normalize(size: number, based = "width") {
  const newSize = based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const width = (size: number) => {
  return normalize(size, "width");
};

const height = (size: number) => {
  return normalize(size, "height");
};

const font = (size: number) => {
  return height(size);
};

const sizeVertical = (size: number) => {
  return height(size);
};

const sizeHorizontal = (size: number) => {
  return width(size);
};

const getPixel = {
  width,
  height,
  font,
  sizeVertical,
  sizeHorizontal,
};

export { getPixel };
