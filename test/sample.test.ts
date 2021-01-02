import { TRAFIC_LIGHT, add } from "../src/sample";
describe("sample", () => {
  it("should pass", () => {
    expect(1).toBe(1);
  });
  it("should add", () => {
    expect(add(2, 3)).toBe(5);
  });
  describe("TRAFIC_LIGHT", () => {
    it("has 6 keys including reverse map", () => {
      expect(Object.keys(TRAFIC_LIGHT).length).toBe(6);
    });
  });
});
