import { _, I, Mod } from "./barcodeModule.ts";

type Invert<M extends Mod> = M extends _ ? I : _;

const invert = <M extends Mod>(m: M) => (m === _ ? I : _) as Invert<M>;

export const toEvenParity = <
  M1 extends Mod,
  M2 extends Mod,
  M3 extends Mod,
  M4 extends Mod,
  M5 extends Mod,
  M6 extends Mod,
  M7 extends Mod
>([m1, m2, m3, m4, m5, m6, m7]: readonly [M1, M2, M3, M4, M5, M6, M7]) =>
  [
    invert(m1),
    invert(m2),
    invert(m3),
    invert(m4),
    invert(m5),
    invert(m6),
    invert(m7),
  ] as const;
