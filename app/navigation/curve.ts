import * as shape from "d3-shape";
import { scale } from "react-native-size-scaling";

//** Path Line */
const line = (width: number, height: number) => {
  const path = shape
    .line()
    .x((d) => d[0]) // Accès au premier élément du tuple pour x
    .y((d) => d[1]) // Accès au deuxième élément du tuple pour y
    .curve(shape.curveLinear)([
    [width / 2, 0],
    [width, 0],
    [width, height],
    [0, height],
    [0, 0],
    [width / 2, 0],
  ]);

  return path;
};

//** Path Curved */
const lineCurvedDown = (iPosition: number, height: number, circle: number) => {
  const position = iPosition;
  const circleWidth = circle + position;
  const trim = (position + circleWidth) / 2;

  const curved = shape
    .line()
    .x((d) => d[0]) // Accès au premier élément du tuple pour x
    .y((d) => d[1]) // Accès au deuxième élément du tuple pour y
    .curve(shape.curveBasis)([
    [position - scale(20), 0],
    [position - scale(10), scale(2)],
    [position - scale(2), scale(10)],
    [position, scale(17)],
    [trim - scale(25), height / 2 + scale(2)],
    [trim - scale(10), height / 2 + scale(10)],
    [trim, height / 2 + scale(10)],
    [trim + scale(10), height / 2 + scale(10)],
    [trim + scale(25), height / 2 + scale(2)],
    [circleWidth, scale(17)],
    [circleWidth + scale(2), scale(10)],
    [circleWidth + scale(10), 0],
    [circleWidth + scale(20), 0],
  ]);

  return curved;
};

export const getPathDown = (
  width: number,
  iHeight: number,
  centerWidth: number,
) => {
  const height = scale(iHeight);
  const circleWidth = scale(centerWidth) + scale(16);
  return `${line(width, height)} ${lineCurvedDown(
    width / 2 - circleWidth / 2,
    height,
    circleWidth,
  )}`;
};
