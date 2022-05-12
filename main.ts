import { computeCheckDigit } from "./checkDigit.ts";
import { genBarcode } from "./genBarcode.ts";
import { render, tag, tagS } from "./tag.ts";

const digits = [0, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5] as const;
const checkDigit = computeCheckDigit(...digits);
console.log(checkDigit);

const barcode = genBarcode(...digits);
console.log(barcode);

const svg = tag("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "37.29mm",
  height: "22.86mm",
}, [
  tagS("rect", {
    x: "3.63mm",
    y: "0",
    width: "0.33mm",
    height: "100%",
    fill: "black",
    stroke: "none",
  }),
]);
console.log(render(svg));
