type From = number;
type Size = number;
export type ContiguousIndexGroup = [From, Size];

export const groupContiguousIndices = (
  indices: number[],
): ContiguousIndexGroup[] =>
  indices.reduce((groups: ContiguousIndexGroup[], index) => {
    if (groups.length === 0) {
      groups.push([index, 1]);
      return groups;
    }

    const [from, size] = groups[groups.length - 1];
    if (index === from + size) {
      groups[groups.length - 1][1] += 1;
    } else {
      groups.push([index, 1]);
    }

    return groups;
  }, []);
