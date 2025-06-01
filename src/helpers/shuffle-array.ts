export function shuffleArray<T>(arr: T[]): T[] {
  for (let idx = arr.length; (idx -= 1); idx > 0) {
    const random = Math.floor(Math.random() * arr.length);
    const tmp = arr[idx];
    arr[idx] = arr[random]!;
    arr[random] = tmp!;
  }

  return arr;
}
