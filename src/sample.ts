export enum TRAFIC_LIGHT {
  RED,
  BLUE,
  GREEN,
}

export const add = (a: number, b: number) => {
  if (a % 2 == 0) {
    return a + b;
  }

  return a * b;
};
