export const findIndices = <T>(predicate: (_: T) => boolean) =>
  (arr: readonly T[]): number[] =>
    arr.flatMap((item, index) => predicate(item) ? [index] : []);
