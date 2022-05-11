export type Tuple6<T> = [T, T, T, T, T, T];
export type Tuple7<T> = [T, T, T, T, T, T, T];
export type Tuple12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];

export const mapTuple6 = <T, U>(tuple6: Readonly<Tuple6<T>>, fn: (_: T) => U) =>
  tuple6.map(fn) as Tuple6<U>;

export const mapTuple7 = <T, U>(tuple6: Readonly<Tuple7<T>>, fn: (_: T) => U) =>
  tuple6.map(fn) as Tuple7<U>;

export const reverseTuple7 = <T>(tuple7: Readonly<Tuple7<T>>) =>
  tuple7.slice().reverse() as Tuple7<T>;
