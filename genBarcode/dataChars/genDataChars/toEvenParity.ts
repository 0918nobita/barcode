import { _, I, Mod } from "../../barcodeModule.ts";
import { mapTuple7, Tuple7 } from "../../../tuple.ts";

const invert = (m: Mod): Mod => (m === _ ? I : _);

export const toEvenParity = (oddParity: Readonly<Tuple7<Mod>>): Tuple7<Mod> =>
  mapTuple7(oddParity, invert);
