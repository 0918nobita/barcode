import { Mod } from "./barcodeModule.ts";
import { Digit } from "./digit.ts";
import { Tuple5, Tuple6, Tuple7, Tuple12 } from "./tuple.ts";

type DataChar = Tuple7<Mod>;

type LeftDataChars = Tuple6<DataChar>;
type RightDataChars = Tuple5<DataChar>;

export type BarcodeGenerator = (
  input: Tuple12<Digit>
) => [LeftDataChars, RightDataChars];
