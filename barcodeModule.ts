import { reverse } from "./reverse.ts";

const _ = 0;
const I = 1;

type _ = typeof _;
type I = typeof I;

type Invert<T> = T extends _ ? I : T extends I ? _ : never;
type ToEvenParity<O> = { [P in keyof O]: Invert<O[P]> };

const toEvenParity = <OddParity extends readonly unknown[]>(
  odd: OddParity
): ToEvenParity<OddParity> =>
  odd.map((elem) => (elem === _ ? I : _)) as unknown as ToEvenParity<OddParity>;

export const O0 = [_, _, _, I, I, _, I] as const;
export const O1 = [_, _, I, I, _, _, I] as const;
export const O2 = [_, _, I, _, _, I, I] as const;
export const O3 = [_, I, I, I, I, _, I] as const;
export const O4 = [_, I, _, _, _, I, I] as const;
export const O5 = [_, I, I, _, _, _, I] as const;
export const O6 = [_, I, _, I, I, I, I] as const;
export const O7 = [_, I, I, I, _, I, I] as const;
export const O8 = [_, I, I, _, I, I, I] as const;
export const O9 = [_, _, _, I, _, I, I] as const;

export const E0 = toEvenParity(O0);
export const E1 = toEvenParity(O1);
export const E2 = toEvenParity(O2);
export const E3 = toEvenParity(O3);
export const E4 = toEvenParity(O4);
export const E5 = toEvenParity(O5);
export const E6 = toEvenParity(O6);
export const E7 = toEvenParity(O7);
export const E8 = toEvenParity(O8);
export const E9 = toEvenParity(O9);

export const F0 = reverse(E0);
export const F1 = reverse(E1);
export const F2 = reverse(E2);
export const F3 = reverse(E3);
export const F4 = reverse(E4);
export const F5 = reverse(E5);
export const F6 = reverse(E6);
export const F7 = reverse(E7);
export const F8 = reverse(E8);
export const F9 = reverse(E9);
