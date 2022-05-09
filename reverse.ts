type Reverse<Arr> = Arr extends readonly []
  ? readonly []
  : Arr extends readonly [infer Head, ...infer Rest]
  ? readonly [...Reverse<Rest>, Head]
  : Arr extends unknown[]
  ? Arr
  : never;

export const reverse = <Arr extends readonly unknown[]>(arr: Arr) =>
  arr.slice().reverse() as Reverse<Arr>;
