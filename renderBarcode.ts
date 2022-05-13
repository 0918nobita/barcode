import { _ } from "./barcodeModule.ts";
import { ContiguousIndexGroup } from "./groupContiguousIndices.ts";
import { render, tag, tagS } from "./tag.ts";

export const renderBarcode = (
  blackModGroups: ContiguousIndexGroup[],
): string => {
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
      ...blackModGroups.map(([from, size]) =>
        tagS("rect", {
          x: String(from * 33),
          y: "0",
          width: String(size * 33),
          height: "100%",
          fill: "black",
        })
      ),
    ],
  );
  return `<?xml version="1.0"?>\n${render(svg)}`;
};
