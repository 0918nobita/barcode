import { render, tag, tagS } from "./tag.ts";

const svg = tag("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "37.29mm",
  height: "22.86mm",
}, [
  tagS("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "white",
  }),
  tagS("rect", {
    x: "3.63mm",
    y: "0",
    width: "0.33mm",
    height: "100%",
    fill: "black",
  }),
]);
console.log('<?xml version="1.0"?>');
console.log(render(svg));
