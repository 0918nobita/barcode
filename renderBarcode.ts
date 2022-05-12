import { _, I } from "./barcodeModule.ts";
import { LeftDataChars, RightDataChars } from "./genDataChars.ts";
import { render, tag, tagS } from "./tag.ts";

const leftMargin = [_, _, _, _, _, _, _, _, _, _, _] as const;
const leftGuardBar = [I, _, I] as const;
const centerBar = [_, I, _, I, _] as const;
const rightGuardBar = [I, _, I] as const;
const rightMargin = [_, _, _, _, _, _, _] as const;

type Rect = [number, number];

export const renderBarcode = (
  left: LeftDataChars,
  right: RightDataChars,
): string => {
  const blackModIndices = [
    ...leftMargin,
    ...leftGuardBar,
    ...left.flat(),
    ...centerBar,
    ...right.flat(),
    ...rightGuardBar,
    ...rightMargin,
  ].flatMap((elem, index) => elem === I ? [index] : []);

  const rects = blackModIndices.reduce(
    (rects: Rect[], elem: number): Rect[] => {
      if (rects.length === 0) {
        rects.push([elem, 1]);
        return rects;
      }
      const [from, size] = rects[rects.length - 1];
      if (elem === from + size) {
        rects[rects.length - 1][1] += 1;
      } else {
        rects.push([elem, 1]);
      }
      return rects;
    },
    [],
  );

  const svg = tag(
    "svg",
    {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "37.29mm",
      height: "22.86mm",
      viewBox: "0 0 3729 2286",
    },
    [
      tagS("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "white",
      }),
      ...rects.map(([from, size]) =>
        tagS("rect", {
          x: String(from * 33),
          y: "0",
          width: String(size * 33),
          height: "100%",
          fill: "black",
        })
      ),
      /*tagS("rect", {
        x: String(33 * 14),
        y: "85%",
        width: String(33 * 43),
        height: "15%",
        fill: "white",
      }),
      tagS("rect", {
        x: String(33 * 60),
        y: "85%",
        width: String(33 * 38),
        height: "15%",
        fill: "white",
      }),*/
    ],
  );
  return `<?xml version="1.0"?>\n${render(svg)}`;
};
