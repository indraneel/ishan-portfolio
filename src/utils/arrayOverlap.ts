export function arraysOverlap(arr1: any[], arr2: any[]) {
  const set1 = new Set(arr1);
  for (let item of arr2) {
    if (set1.has(item)) {
      return true;
    }
  }
  return false;
}
