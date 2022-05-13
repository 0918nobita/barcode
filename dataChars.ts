import { Mod } from "./barcodeModule.ts";
import { Tuple6, Tuple7 } from "./tuple.ts";

type DataChar = Readonly<Tuple7<Mod>>;

export type LeftDataChars = Tuple6<DataChar>;

export type RightDataChars = Tuple6<DataChar>;
